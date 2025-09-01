<%@ Page Language="C#" %>
<%@ Import Namespace="System.Data.SqlClient" %>
<%@ Import Namespace="System.Configuration" %>

<script runat="server">
    protected void Page_Load(object sender, EventArgs e)
    {
        Response.ContentType = "application/json";
        
        try
        {
            // Obtener la connection string "Main" del web.config
            var connectionStringConfig = ConfigurationManager.ConnectionStrings["Main"];
            
            if (connectionStringConfig == null)
            {
                Response.Write(@"{
                    ""success"": false,
                    ""error"": ""Connection string 'Main' not found in configuration"",
                    ""timestamp"": """ + DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss") + @""",
                    ""server"": """ + System.Environment.MachineName + @"""
                }");
                return;
            }
            
            string connectionString = connectionStringConfig.ConnectionString;
            
            if (string.IsNullOrEmpty(connectionString))
            {
                Response.Write(@"{
                    ""success"": false,
                    ""error"": ""Connection string 'Main' is empty"",
                    ""timestamp"": """ + DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss") + @""",
                    ""server"": """ + System.Environment.MachineName + @"""
                }");
                return;
            }

            // Intentar conectar a la base de datos
            using (SqlConnection conn = new SqlConnection(connectionString))
            {
                conn.Open();
                
                // Ejecutar una consulta simple para verificar conectividad
                using (SqlCommand cmd = new SqlCommand("SELECT 1 as TestResult, GETDATE() as ServerTime", conn))
                {
                    using (SqlDataReader reader = cmd.ExecuteReader())
                    {
                        if (reader.Read())
                        {
                            var serverTime = reader["ServerTime"].ToString();
                            Response.Write(@"{
                                ""success"": true,
                                ""message"": ""Database connection successful"",
                                ""timestamp"": """ + DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss") + @""",
                                ""server"": """ + System.Environment.MachineName + @""",
                                ""database"": """ + conn.Database + @""",
                                ""dataSource"": """ + conn.DataSource + @""",
                                ""serverVersion"": """ + conn.ServerVersion + @""",
                                ""databaseServerTime"": """ + serverTime + @"""
                            }");
                        }
                    }
                }
            }
        }
        catch (SqlException sqlEx)
        {
            Response.Write(@"{
                ""success"": false,
                ""error"": ""SQL Error: " + sqlEx.Message.Replace("\"", "\\\"") + @""",
                ""errorNumber"": " + sqlEx.Number + @",
                ""severity"": " + sqlEx.Class + @",
                ""state"": " + sqlEx.State + @",
                ""timestamp"": """ + DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss") + @""",
                ""server"": """ + System.Environment.MachineName + @"""
            }");
        }
        catch (Exception ex)
        {
            Response.Write(@"{
                ""success"": false,
                ""error"": ""General Error: " + ex.Message.Replace("\"", "\\\"") + @""",
                ""timestamp"": """ + DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss") + @""",
                ""server"": """ + System.Environment.MachineName + @"""
            }");
        }
    }
</script>