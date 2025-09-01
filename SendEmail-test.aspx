<%@ Page Language="C#" %>
<%@ Import Namespace="System.Web.Script.Serialization" %>
<%@ Import Namespace="System.Data.SqlClient" %>
<%@ Import Namespace="System.IO" %>
<%@ Import Namespace="System.Data" %>
<%@ Import Namespace="System.Configuration" %>

<script runat="server">
    protected void Page_Load(object sender, EventArgs e)
    {
        // Configurar headers CORS
        Response.AddHeader("Access-Control-Allow-Origin", "*");
        Response.AddHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
        Response.AddHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
        Response.AddHeader("Access-Control-Max-Age", "86400");
        
        Response.ContentType = "application/json";
        
        // Manejar preflight request (OPTIONS)
        if (Request.HttpMethod == "OPTIONS")
        {
            Response.StatusCode = 200;
            Response.Write("{\"success\":true,\"message\":\"CORS preflight OK\"}");
            Response.End();
            return;
        }

        try
        {
            var testResult = new {
                timestamp = DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss"),
                method = Request.HttpMethod,
                server = System.Environment.MachineName,
                step = "",
                success = false,
                message = "",
                error = "",
                details = new { }
            };

            // PASO 1: Verificar método
            testResult = new {
                timestamp = testResult.timestamp,
                method = testResult.method,
                server = testResult.server,
                step = "1_method_check",
                success = (Request.HttpMethod == "GET" || Request.HttpMethod == "POST"),
                message = Request.HttpMethod == "GET" ? "GET method - showing test info" : 
                         Request.HttpMethod == "POST" ? "POST method - processing email" : "Invalid method",
                error = Request.HttpMethod != "GET" && Request.HttpMethod != "POST" ? "Only GET and POST allowed" : "",
                details = new { allowedMethods = new[] { "GET", "POST" } }
            };

            if (!testResult.success)
            {
                Response.StatusCode = 405;
                Response.Write(new JavaScriptSerializer().Serialize(testResult));
                return;
            }

            // PASO 2: Verificar connection strings disponibles
            var connectionStrings = new List<object>();
            foreach (ConnectionStringSettings connStr in ConfigurationManager.ConnectionStrings)
            {
                connectionStrings.Add(new {
                    name = connStr.Name,
                    hasConnectionString = !string.IsNullOrEmpty(connStr.ConnectionString),
                    provider = connStr.ProviderName ?? "not specified"
                });
            }

            testResult = new {
                timestamp = testResult.timestamp,
                method = testResult.method,
                server = testResult.server,
                step = "2_connection_strings",
                success = connectionStrings.Count > 0,
                message = $"Found {connectionStrings.Count} connection strings",
                error = connectionStrings.Count == 0 ? "No connection strings found in web.config" : "",
                details = new { connectionStrings = connectionStrings }
            };

            if (!testResult.success)
            {
                Response.Write(new JavaScriptSerializer().Serialize(testResult));
                return;
            }

            // PASO 3: Buscar connection string "Main"
            var mainConnString = ConfigurationManager.ConnectionStrings["Main"];
            testResult = new {
                timestamp = testResult.timestamp,
                method = testResult.method,
                server = testResult.server,
                step = "3_main_connection_string",
                success = mainConnString != null && !string.IsNullOrEmpty(mainConnString.ConnectionString),
                message = mainConnString != null ? "Connection string 'Main' found" : "Connection string 'Main' not found",
                error = mainConnString == null ? "Connection string 'Main' not configured in web.config" : 
                       string.IsNullOrEmpty(mainConnString.ConnectionString) ? "Connection string 'Main' is empty" : "",
                details = new { 
                    hasMainConnection = mainConnString != null,
                    mainConnectionEmpty = mainConnString != null && string.IsNullOrEmpty(mainConnString.ConnectionString)
                }
            };

            if (!testResult.success)
            {
                Response.Write(new JavaScriptSerializer().Serialize(testResult));
                return;
            }

            // PASO 4: Probar conexión a base de datos
            try
            {
                using (SqlConnection conn = new SqlConnection(mainConnString.ConnectionString))
                {
                    conn.Open();
                    
                    testResult = new {
                        timestamp = testResult.timestamp,
                        method = testResult.method,
                        server = testResult.server,
                        step = "4_database_connection",
                        success = true,
                        message = "Database connection successful",
                        error = "",
                        details = new { 
                            connectionState = conn.State.ToString(),
                            database = conn.Database,
                            serverVersion = conn.ServerVersion,
                            dataSource = conn.DataSource
                        }
                    };
                }
            }
            catch (SqlException sqlEx)
            {
                testResult = new {
                    timestamp = testResult.timestamp,
                    method = testResult.method,
                    server = testResult.server,
                    step = "4_database_connection",
                    success = false,
                    message = "Database connection failed",
                    error = sqlEx.Message,
                    details = new { 
                        errorNumber = sqlEx.Number,
                        severity = sqlEx.Class,
                        state = sqlEx.State,
                        procedure = sqlEx.Procedure ?? "",
                        lineNumber = sqlEx.LineNumber
                    }
                };
                
                Response.Write(new JavaScriptSerializer().Serialize(testResult));
                return;
            }

            // PASO 5: Si es POST, procesar datos del email
            if (Request.HttpMethod == "POST")
            {
                string jsonString = "";
                try
                {
                    using (StreamReader reader = new StreamReader(Request.InputStream))
                    {
                        jsonString = reader.ReadToEnd();
                    }

                    if (string.IsNullOrEmpty(jsonString))
                    {
                        testResult = new {
                            timestamp = testResult.timestamp,
                            method = testResult.method,
                            server = testResult.server,
                            step = "5_post_data",
                            success = false,
                            message = "No POST data received",
                            error = "Request body is empty",
                            details = new { bodyLength = 0 }
                        };
                    }
                    else
                    {
                        // Intentar parsear JSON
                        JavaScriptSerializer serializer = new JavaScriptSerializer();
                        dynamic emailData = serializer.DeserializeObject(jsonString);
                        
                        var destinatario = emailData["destinatario"]?.ToString() ?? "";
                        var asunto = emailData["asunto"]?.ToString() ?? "";
                        var mensaje = emailData["mensaje"]?.ToString() ?? "";

                        testResult = new {
                            timestamp = testResult.timestamp,
                            method = testResult.method,
                            server = testResult.server,
                            step = "5_post_data",
                            success = !string.IsNullOrEmpty(destinatario) && !string.IsNullOrEmpty(asunto) && !string.IsNullOrEmpty(mensaje),
                            message = "POST data parsed successfully",
                            error = string.IsNullOrEmpty(destinatario) || string.IsNullOrEmpty(asunto) || string.IsNullOrEmpty(mensaje) ? 
                                   "Missing required fields: destinatario, asunto, mensaje" : "",
                            details = new { 
                                bodyLength = jsonString.Length,
                                hasDestinatario = !string.IsNullOrEmpty(destinatario),
                                hasAsunto = !string.IsNullOrEmpty(asunto),
                                hasMensaje = !string.IsNullOrEmpty(mensaje),
                                destinatario = destinatario.Length > 50 ? destinatario.Substring(0, 50) + "..." : destinatario,
                                asunto = asunto.Length > 50 ? asunto.Substring(0, 50) + "..." : asunto
                            }
                        };

                        // PASO 6: Si tenemos todos los datos, probar el stored procedure
                        if (testResult.success)
                        {
                            try
                            {
                                using (SqlConnection conn = new SqlConnection(mainConnString.ConnectionString))
                                {
                                    using (SqlCommand cmd = new SqlCommand("spinAlertaMail", conn))
                                    {
                                        cmd.CommandType = CommandType.StoredProcedure;
                                        
                                        cmd.Parameters.AddWithValue("@MailFrom", "AlertasEZIMetales@ezimetales.com.mx");
                                        cmd.Parameters.AddWithValue("@MailTo", destinatario);
                                        cmd.Parameters.AddWithValue("@MailSubject", asunto);
                                        cmd.Parameters.AddWithValue("@MailBody", mensaje);
                                        cmd.Parameters.AddWithValue("@Attachment", "");
                                        cmd.Parameters.AddWithValue("@bHtmlFormat", 1);
                                        
                                        conn.Open();
                                        cmd.ExecuteNonQuery();
                                    }
                                }

                                testResult = new {
                                    timestamp = testResult.timestamp,
                                    method = testResult.method,
                                    server = testResult.server,
                                    step = "6_email_sent",
                                    success = true,
                                    message = "Email sent successfully via spinAlertaMail",
                                    error = "",
                                    details = new { 
                                        storedProcedure = "spinAlertaMail",
                                        emailTo = destinatario
                                    }
                                };
                            }
                            catch (SqlException spEx)
                            {
                                testResult = new {
                                    timestamp = testResult.timestamp,
                                    method = testResult.method,
                                    server = testResult.server,
                                    step = "6_email_sent",
                                    success = false,
                                    message = "Stored procedure execution failed",
                                    error = spEx.Message,
                                    details = new { 
                                        storedProcedure = "spinAlertaMail",
                                        errorNumber = spEx.Number,
                                        severity = spEx.Class,
                                        procedure = spEx.Procedure ?? ""
                                    }
                                };
                            }
                        }
                    }
                }
                catch (Exception jsonEx)
                {
                    testResult = new {
                        timestamp = testResult.timestamp,
                        method = testResult.method,
                        server = testResult.server,
                        step = "5_post_data",
                        success = false,
                        message = "JSON parsing failed",
                        error = jsonEx.Message,
                        details = new { 
                            bodyLength = jsonString.Length,
                            bodyPreview = jsonString.Length > 100 ? jsonString.Substring(0, 100) + "..." : jsonString
                        }
                    };
                }
            }

            // Respuesta final
            Response.Write(new JavaScriptSerializer().Serialize(testResult));

        }
        catch (Exception ex)
        {
            var errorResult = new {
                timestamp = DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss"),
                method = Request.HttpMethod,
                server = System.Environment.MachineName,
                step = "general_error",
                success = false,
                message = "Unexpected error occurred",
                error = ex.Message,
                details = new { 
                    stackTrace = ex.StackTrace
                }
            };
            
            Response.StatusCode = 500;
            Response.Write(new JavaScriptSerializer().Serialize(errorResult));
        }
    }
</script>
