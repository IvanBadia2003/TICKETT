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

// Event listener para detectar cambios en los radio buttons
iconFilter.addEventListener('click', mostrarFiltros);
close.addEventListener('click', cerrarFiltros);

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
        const container = document.querySelector('.container_funciones');
  
        // Recorrer todas las funciones y crear elementos HTML para cada una
        data.forEach(funcion => {
          const article = document.createElement('article');
          article.classList.add('cardFunction');
  
          const imgContainer = document.createElement('div');
          imgContainer.classList.add('cardFunction__img');
  
          const img = document.createElement('img');
          img.src = funcion.imagen;
          img.alt = funcion.titulo;
  
          imgContainer.appendChild(img);
          const textContainer = document.createElement('div');
          textContainer.classList.add('cardFunction__text');
  
          const h2 = document.createElement('h2');
          h2.textContent = funcion.titulo;
  
          const h3 = document.createElement('h3');
          h3.textContent = funcion.diaObra;
  
          textContainer.appendChild(h2);
          textContainer.appendChild(h3);
  
          article.appendChild(imgContainer);
          article.appendChild(textContainer);
          container.appendChild(article);
        });
      })
      .catch(error => console.error('There has been a problem with your fetch operation:', error));
  });
  


