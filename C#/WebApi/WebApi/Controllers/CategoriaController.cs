using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using webapi.Models;
using webapi.Services;

namespace WebApi.Controllers
{
    [Route("api/[controller]")]
    public class CategoriaController : ControllerBase
    {

        ICategoriaService categoriaService;

        public CategoriaController(ICategoriaService service)
        {
            categoriaService = service;
        }

        [HttpGet]
        public IActionResult Get()
        {
            return Ok(categoriaService.GetCategorias());
        }

        [HttpPost]
        public IActionResult Post([FromBody] Categoria categoria)
        {
            categoriaService.SaveCategoria(categoria);
            return Ok();
        }

        [HttpPut("{id}")]
        public IActionResult Edit(Guid id, [FromBody] Categoria categoria)
        {
            categoriaService.UpdateCategoria(id, categoria);
            return Ok();
        }

        
        [HttpDelete("{id}")]
        public ActionResult Delete(Guid id)
        {
            categoriaService.DeleteCategoria(id);
            return Ok();
        }

    }
}
