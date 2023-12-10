// Obtener los elementos de los radio buttons y los menús
const iconFilter = document.getElementById('iconFilter');
const close = document.getElementById('close');
const filtros = document.getElementById('sidebar');

// Función para mostrar el menú correspondiente a la opción seleccionada
function mostrarFiltros() {
  if (filtros.style.display === 'block') {
    filtros.style.display = 'none';
  } else {
    filtros.style.display = 'block';
  }
}
// Función para cerrar el menú correspondiente a la opción seleccionada
function cerrarFiltros() {
  if (filtros.style.display === 'none') {
    filtros.style.display = 'block';
  } else {
    filtros.style.display = 'none';
  }
}


// document.addEventListener('DOMContentLoaded', () => {
//   let data = []; // Variable para almacenar los datos de las obras

//   // Tu código para obtener los datos de la API...

//   const checkboxes = document.querySelectorAll('.genre');

//   checkboxes.forEach(checkbox => {
//     checkbox.addEventListener('change', handleCheckboxChange);
//   });

//   function handleCheckboxChange() {
//     const selectedGenres = Array.from(checkboxes)
//       .filter(checkbox => checkbox.checked && checkbox.value)
//       .map(checkbox => checkbox.value.toLowerCase().trim());
  
//     console.log('Géneros seleccionados:', selectedGenres); // Imprimir en la consola
  
//     let filteredObras = data;
  
//     if (selectedGenres.length > 0) {
//       filteredObras = data.filter(obra => {
//         const obraGenres = obra.genero ? obra.genero.toLowerCase().trim().split(',') : [];
//         return selectedGenres.every(selectedGenre => obraGenres.includes(selectedGenre));
//       });
//     }
  
//     console.log('Obras filtradas:', filteredObras); // Imprimir en la consola
  
//     renderObras(filteredObras);
//   }
  
  
//   function renderObras(obras) {
//     const container = document.querySelector('.content .functions');
//     container.innerHTML = ''; // Limpiar el contenido existente

//     if (!obras.length) {
//       container.innerHTML = '<p>No hay obras disponibles</p>';
//       return;
//     }

//     obras.forEach(funcion => {
//       const article = document.createElement('article');
//       article.classList.add('card');

//       // Crea los elementos HTML para cada obra aquí...

//       container.appendChild(article);
//     });
//   }

//   // Función inicial para mostrar todas las obras al cargar la página
//   fetch('http://localhost:3000/obras')
//     .then(response => {
//       if (!response.ok) {
//         throw new Error('Network response was not ok');
//       }
//       return response.json();
//     })
//     .then(responseData => {
//       data = responseData; // Asigna los datos obtenidos de la API a la variable data

//       renderObras(data); // Muestra todas las obras al principio
//     })
//     .catch(error => console.error('There has been a problem with your fetch operation:', error));
// });


document.addEventListener('DOMContentLoaded', () => {
  const url = 'http://localhost:3000/obras'; // URL de la API de las funciones

  fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      // Obtener el contenedor de funciones
      const container = document.querySelector('.content .functions'); // Cambiado el selector

      // Recorrer todas las funciones y crear elementos HTML para cada una
      data.forEach(funcion => {
        const article = document.createElement('article');
        article.classList.add('card');

        const anchor = document.createElement('a');
        anchor.href = 'descripcion_funcion.html';

        const imgContainer = document.createElement('div');
        imgContainer.classList.add('imgContainer');

        const img = document.createElement('img');
        img.src = funcion.imagenObra;
        img.alt = funcion.titulo;

        imgContainer.appendChild(img);
        anchor.appendChild(imgContainer);

        const textContainer = document.createElement('div');
        textContainer.classList.add('card__description');

        const h2 = document.createElement('h2');
        h2.textContent = funcion.titulo;

        const h3 = document.createElement('h3');
        h3.textContent = funcion.diaObra;

        textContainer.appendChild(h2);
        textContainer.appendChild(h3);

        anchor.appendChild(textContainer);
        article.appendChild(anchor);

        container.appendChild(article);
      });
    })
    .catch(error => console.error('There has been a problem with your fetch operation:', error));
});




