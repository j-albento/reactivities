
using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class BaseApiControllor : ControllerBase
    {

         protected IMediator Mediator => HttpContext.RequestServices.GetService<IMediator>();
    }
}