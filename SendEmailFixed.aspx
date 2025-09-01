<%@ Page Language="C#" %>
<%@ Import Namespace="System.Web.Script.Serialization" %>
<%@ Import Namespace="System.Data.SqlClient" %>
<%@ Import Namespace="System.IO" %>
<%@ Import Namespace="System.Data" %>

<script runat="server">
    protected void Page_Load(object sender, EventArgs e)
    {
        // Configurar headers CORS
        Response.AddHeader("Access-Control-Allow-Origin", "https://andresdramos.github.io");
        Response.AddHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
        Response.AddHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
        Response.AddHeader("Access-Control-Max-Age", "86400");
        
        // Manejar preflight request (OPTIONS)
        if (Request.HttpMethod == "OPTIONS")
        {
            Response.StatusCode = 200;
            Response.End();
            return;
        }
        
        if (Request.HttpMethod != "POST")
        {
            Response.StatusCode = 405;
            Response.ContentType = "application/json";
            Response.Write("{\"success\":false,\"error\":\"Only POST method allowed\"}");
            return;
        }

        try
        {
            // Leer el JSON del body
            string jsonString = "";
            using (StreamReader reader = new StreamReader(Request.InputStream))
            {
                jsonString = reader.ReadToEnd();
            }

            if (string.IsNullOrEmpty(jsonString))
            {
                Response.ContentType = "application/json";
                Response.Write("{\"success\":false,\"error\":\"No data received\"}");
                return;
            }

            // Deserializar JSON
            JavaScriptSerializer serializer = new JavaScriptSerializer();
            dynamic emailData = null;
            
            try 
            {
                emailData = serializer.DeserializeObject(jsonString);
                if (emailData == null)
                {
                    Response.ContentType = "application/json";
                    Response.Write("{\"success\":false,\"error\":\"Failed to parse JSON data\"}");
                    return;
                }
            }
            catch (Exception jsonEx)
            {
                Response.ContentType = "application/json";
                Response.Write("{\"success\":false,\"error\":\"Invalid JSON format: " + jsonEx.Message.Replace("\"", "\\\"") + "\"}");
                return;
            }

            string destinatario = null;
            string asunto = null;
            string mensaje = null;
            
            try
            {
                destinatario = emailData["destinatario"] != null ? emailData["destinatario"].ToString() : null;
                asunto = emailData["asunto"] != null ? emailData["asunto"].ToString() : null;
                mensaje = emailData["mensaje"] != null ? emailData["mensaje"].ToString() : null;
            }
            catch (Exception parseEx)
            {
                Response.ContentType = "application/json";
                Response.Write("{\"success\":false,\"error\":\"Error parsing email fields: " + parseEx.Message.Replace("\"", "\\\"") + "\"}");
                return;
            }

            if (string.IsNullOrEmpty(destinatario) || string.IsNullOrEmpty(asunto) || string.IsNullOrEmpty(mensaje))
            {
                Response.ContentType = "application/json";
                Response.Write("{\"success\":false,\"error\":\"Missing required fields\"}");
                return;
            }

            // Connection string hardcodeada (ya probada y funcional)
            string connectionString = "Data Source=192.168.4.5;Initial Catalog=EPS;Persist Security Info=True;User ID=web;Password=Uma#12)ey";
            
            using (SqlConnection conn = new SqlConnection(connectionString))
            {
                using (SqlCommand cmd = new SqlCommand("spinAlertaMail", conn))
                {
                    cmd.CommandType = CommandType.StoredProcedure;
                    
                    // Parámetros según el ejemplo proporcionado
                    cmd.Parameters.AddWithValue("@MailFrom", "AlertasEZIMetales@ezimetales.com.mx");
                    cmd.Parameters.AddWithValue("@MailTo", destinatario ?? "");
                    cmd.Parameters.AddWithValue("@MailSubject", asunto ?? "");
                    cmd.Parameters.AddWithValue("@MailBody", mensaje ?? "");
                    cmd.Parameters.AddWithValue("@Attachment", "");
                    cmd.Parameters.AddWithValue("@bHtmlFormat", 1); // 1 porque enviamos HTML
                    
                    conn.Open();
                    cmd.ExecuteNonQuery();
                }
            }

            Response.ContentType = "application/json";
            Response.Write("{\"success\":true,\"message\":\"Email sent successfully\"}");
        }
        catch (SqlException sqlEx)
        {
            Response.ContentType = "application/json";
            Response.Write("{\"success\":false,\"error\":\"Database Error: " + sqlEx.Message.Replace("\"", "\\\"") + "\"}");
        }
        catch (Exception ex)
        {
            Response.ContentType = "application/json";
            Response.Write("{\"success\":false,\"error\":\"" + ex.Message.Replace("\"", "\\\"") + "\"}");
        }
    }
</script>
