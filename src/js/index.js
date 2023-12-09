// Función para obtener los detalles de una obra por su ID
function obtenerDetallesObraPorId(id) {
    return fetch(`obras/${id}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('No se pudo obtener la obra');
        }
        return response.json();
      })
      .catch(error => {
        console.error('Error:', error);
        return null;
      });
  }
  
  // Obtener los elementos HTML a modificar
  const primeraCardFunction = document.querySelector('.articlesFunction .cardFunction:nth-child(1)');
  const segundaCardFunction = document.querySelector('.articlesFunction .cardFunction:nth-child(2)');
  
  // Actualizar la primera cardFunction con los detalles de la obra 1
  obtenerDetallesObraPorId(1)
    .then(obra => {
      if (obra) {
        const imagen1 = primeraCardFunction.querySelector('img');
        const titulo1 = primeraCardFunction.querySelector('h2');
        const fecha1 = primeraCardFunction.querySelector('h3');
  
        imagen1.src = obra.imagenObra;
        titulo1.textContent = obra.titulo;
        fecha1.textContent = `Fecha: ${obra.diaObra}`;
      } else {
        console.error('No se pudieron obtener los detalles de la obra 1');
      }
    });
  
  // Actualizar la segunda cardFunction con los detalles de la obra 2
  obtenerDetallesObraPorId(2)
    .then(obra => {
      if (obra) {
        const imagen2 = segundaCardFunction.querySelector('img');
        const titulo2 = segundaCardFunction.querySelector('h2');
        const fecha2 = segundaCardFunction.querySelector('h3');
  
        imagen2.src = obra.imagenObra;
        titulo2.textContent = obra.titulo;
        fecha2.textContent = `Fecha: ${obra.diaObra}`;
      } else {
        console.error('No se pudieron obtener los detalles de la obra 2');
      }
    });
  