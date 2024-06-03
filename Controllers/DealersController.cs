using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web;
using System.Web.Http;
using UBuilder.Domain;
using UBuilder.Domain.EntityRepository;
using UBuilder.Helper;

namespace UBuilder.Controllers
{
    //[Authorize]
    [RoutePrefix("api/Dealers")]
    public class DealersController : ApiController
    {
        IDealersRepository _DealersRepository;

        public DealersController (IDealersRepository DealersRepository)
        {
            _DealersRepository = DealersRepository;
        }

        [Route("GetDealers")]
        [HttpGet]
        public IHttpActionResult GetDealers()
        {
            try
            {
                var result = _DealersRepository.GetDealers();

                return Ok(result);
            }
            catch (System.Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}
