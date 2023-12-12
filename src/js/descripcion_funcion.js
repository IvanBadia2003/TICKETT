document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const funcionId = urlParams.get('id');
  
    if (funcionId) {
      fetch(`http://localhost:3000/obras/${funcionId}`) 
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then(funcion => {
          document.querySelector('h2').textContent = funcion.titulo;
          document.querySelector('.principal img').src = funcion.imagenObra;
          document.querySelector('.date__data h3:nth-child(1)').textContent = `Día: ${funcion.diaObra}`;
          document.querySelector('.date__data h3:nth-child(2)').textContent = `Hora: ${funcion.horaObra}`;
          document.querySelector('.information__data h3:nth-child(1)').textContent = `Duración: ${funcion.duracion}`;
          document.querySelector('.information__data h3:nth-child(2)').textContent = `Precio: ${funcion.precio}`;
          document.querySelector('.information__data h3:nth-child(3)').textContent = `Género: ${funcion.genero}`;
          document.querySelector('.description p').textContent = funcion.descripcion;
          
          const castList = document.querySelector('.cast ul');
          if (funcion && Array.isArray(funcion.reparto)) {
            funcion.reparto.forEach(actor => {
              const li = document.createElement('li');
              const actorInfo = `<strong>${actor.rol}</strong> - ${actor.nombre}`;
              li.innerHTML = actorInfo;
              castList.appendChild(li);
          
        })
        .catch(error => console.error('Hubo un problema con la solicitud:', error));
    } else {
      console.error('No se encontró el ID de la función en la URL');
    }
  });
}})
