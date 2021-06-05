using Microsoft.AspNetCore.Mvc;
using System;
using System.Threading.Tasks;
using cake_it.api.domain;
using cake_it.api.domain.Services;

namespace cake_it.api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CakesController : Controller
    {
        private readonly ICakeService _cakeService;

        public CakesController(ICakeService cakeService)
        {
            _cakeService = cakeService;
        }

        [HttpGet]
        public async Task<IActionResult> GetCakes(int maxResults, string fromId)
        {
            var cakes = await _cakeService.GetCakes(maxResults, fromId);

            return Ok(cakes);
        }

        [HttpGet]
        [Route("{cakeId}")]
        public async Task<IActionResult> GetCake(Guid cakeId)
        {
            var cake = await _cakeService.GetCake(cakeId);

            return Ok(cake);
        }

        [HttpPost]
        public async Task<IActionResult> NewCake(Cake cake)
        {
            var cakeId = await _cakeService.CreateCake(cake);

            return Created("/cake/cakeId", cakeId);
        }

        [HttpPut]
        [Route("{cakeId}")]
        public async Task<IActionResult> UpdateCake(Guid cakeId, Cake cake)
        {
            await _cakeService.UpdateCake(cakeId, cake);

            return Ok("Cake updated.");
        }

        [HttpDelete]
        [Route("{cakeId}")]
        public async Task<IActionResult> DeleteCake(Guid cakeId)
        {
            await _cakeService.DeleteCake(cakeId);
            
            return Ok("Cake deleted.");
        }
    }
}



///// <summary>
///// Creates a new session and returns it's session id.
///// </summary>
///// <remarks>
///// Used to create a new session, the session id should be sent with all subsequent requests as the session header.
///// </remarks>
///// <returns>Session Id</returns>
///// <response code="201">Returns new session id</response>
///// <response code="400">If provided input is invalid.</response>
///// <response code="403">If not authorised, ensure client id header is provided.</response>
///// <response code="500">Internal server error.</response>
//[ValidateHeaders(HeaderType.ClientId, Order = 1)]
//[ValidateModel(Order = 2)]
//[AllowAnonymous]
//[HttpPost]
//[ProducesResponseType(201)]
//[ProducesResponseType(typeof(IDictionary<string, string[]>), 400)]
//[ProducesResponseType(403)]
//[ProducesResponseType(typeof(IDictionary<string, string[]>), 500)]
//public async Task<IActionResult> CreateSession([FromBody] CreateSessionRequest sessionRequest)
//{
//    try
//    {
//        var headers = _headersService.GetRequestHeaders();
//        var newSessionId = await _sessionService.CreateSession(headers.ClientId, sessionRequest);

//        return CreatedAtAction("GetSession", new { sessionId = newSessionId }, newSessionId);
//    }
//    catch (Exception e)
//    {
//        return StatusCode(500, _modelFactory.Create(e));
//    }
//}