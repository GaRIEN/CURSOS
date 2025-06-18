using Microsoft.AspNetCore.Mvc;
using webapi.Models;
using webapi.Services;

namespace WebApi.Controllers
{

    [Route("api/[controller]")]
    public class TareaController : ControllerBase
    {

        ITareaService tareaService;

        public TareaController(ITareaService service)
        {
            tareaService = service;
        }

        [HttpGet]
        public IActionResult Get()
        {
            return Ok(tareaService.GetTareas());
        }

        [HttpPost]
        public IActionResult Post([FromBody] Tarea tarea)
        {
            tareaService.SaveTarea(tarea);
            return Ok();
        }

        [HttpPut("{id}")]
        public IActionResult Edit(Guid id, [FromBody] Tarea tarea)
        {
            tareaService.UpdateTarea(id, tarea);
            return Ok();
        }


        [HttpDelete("{id}")]
        public ActionResult Delete(Guid id)
        {
            tareaService.DeleteTarea(id);
            return Ok();
        }
    }
}
