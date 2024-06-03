using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Web;

namespace UBuilder.Domain.Results
{
    public class UserData
    {
        public List<DesignsOut> GetUserDetails(List<DesignsOut> _list)
        {
            SqlConnection con = new SqlConnection(ConfigurationManager.ConnectionStrings["CliffKeen"].ConnectionString);
            try
            {
                string query = "select u_first_name,u_last_name from Addresses A inner join EmailActivityTrail E on A.g_id = E.documentid where E.documentnumber = @UserID";
                if (con.State == ConnectionState.Closed)
                {
                    con.Open();
                }
                foreach (var item in _list)
                {
                
                        SqlCommand cmd = new SqlCommand(query, con);
                        cmd.Parameters.AddWithValue("@UserID", item.UserId);
                        SqlDataReader dr = cmd.ExecuteReader();
                        if (dr.Read())
                        {
                            item.FirstName = Convert.ToString(dr[0]);
                            item.LastName = Convert.ToString(dr[1]);
                        }
                        else
                        {
                            item.FirstName = "Unknown";
                            item.LastName = "";
                        }
                        dr.Close();
                    

                }
            }
            catch(Exception ex)
            {

            }
            finally
            {
                con.Close();
            }
           

            return _list;
        }
      
    }
}