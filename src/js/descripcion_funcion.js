// En tu archivo scripts.js vinculado a la página detalle_funcion.html

document.addEventListener('DOMContentLoaded', () => {
    // Obtener el ID de la función de la URL
    const urlParams = new URLSearchParams(window.location.search);
    const funcionId = urlParams.get('id');
  
    if (funcionId) {
      // Hacer una solicitud para obtener los detalles de la función específica
      fetch(`http://localhost:3000/obras/${funcionId}`) // Utiliza la ruta correcta de tu API
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then(funcion => {
          // Actualizar la página con los detalles de la función
          document.querySelector('h2').textContent = funcion.titulo;
          document.querySelector('.principal img').src = funcion.imagenObra;
          document.querySelector('.date__data h3:nth-child(1)').textContent = `Día: ${funcion.diaObra}`;
          document.querySelector('.date__data h3:nth-child(2)').textContent = `Hora: ${funcion.horaObra}`;
          document.querySelector('.information__data h3:nth-child(1)').textContent = `Duración: ${funcion.duracion}`;
          document.querySelector('.information__data h3:nth-child(2)').textContent = `Precio: ${funcion.precio}`;
          document.querySelector('.information__data h3:nth-child(3)').textContent = `Género: ${funcion.genero}`;
          document.querySelector('.description p').textContent = funcion.descripcion;
          
          // Mostrar el reparto
          const castList = document.querySelector('.cast ul');
          castList.innerHTML = '';
          if (funcion && Array.isArray(funcion.reparto)) {
            // Itera a través de cada objeto de actor y su rol y crea elementos de lista para cada uno
            funcion.reparto.forEach(actor => {
              const li = document.createElement('li');
              const actorInfo = `<strong>${actor.rol}</strong> - ${actor.nombre}`; // Pone el rol en negrita
              li.innerHTML = actorInfo;
              castList.appendChild(li);
          
        })
        .catch(error => console.error('Hubo un problema con la solicitud:', error));
    } else {
      console.error('No se encontró el ID de la función en la URL');
    }
  });
}})
