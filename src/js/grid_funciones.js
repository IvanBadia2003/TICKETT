// Obtener los elementos de los radio buttons y los menús
const iconFilter = document.getElementById('iconFilter');
const close = document.getElementById('close');
const filtros = document.getElementById('sidebar');
const checkboxes = document.querySelectorAll('.genre'); // Obtener los checkboxes de género

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

// Función para filtrar funciones por género
function filtrarPorGenero() {
  const selectedGenres = Array.from(checkboxes)
    .filter(checkbox => checkbox.checked)
    .map(checkbox => checkbox.value);

  const url = 'http://localhost:3000/obras'; // URL de la API de las funciones

  fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      const container = document.querySelector('.functions'); // Obtener el contenedor de funciones

      // Verificar si no se ha seleccionado ningún género
      if (selectedGenres.length === 0) {
        // Mostrar todas las funciones si no hay géneros seleccionados
        data.forEach(funcion => {
          const article = document.createElement('article');
          article.classList.add('card');
        
          const anchor = document.createElement('a');
          anchor.href = `descripcion_funcion.html?id=${funcion.id}`; // Incluyendo el ID en la URL
        
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
      } else {
        // Filtrar las funciones por género seleccionado
        const filteredFunctions = data.filter(funcion => selectedGenres.includes(funcion.genero));

        // Recorrer funciones filtradas y crear elementos HTML para cada una
        filteredFunctions.forEach(funcion => {
          const article = document.createElement('article');
          article.classList.add('card');
        
          const anchor = document.createElement('a');
          anchor.href = `descripcion_funcion.html?id=${funcion.id}`; // Incluyendo el ID en la URL
        
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
      }
    })
    .catch(error => console.error('There has been a problem with your fetch operation:', error));
}

// Agregar event listener a cada checkbox para el filtro por género
checkboxes.forEach(checkbox => {
  checkbox.addEventListener('change', filtrarPorGenero);
});

// Llamar a la función para mostrar todas las funciones al cargar la página
document.addEventListener('DOMContentLoaded', filtrarPorGenero);
