const butacas = document.querySelectorAll('.butaca');

let butacasSeleccionadas = [];

function mostrarButacasSeleccionadas() {
  const butacasMostradas = document.getElementById('butacasSeleccionadas');
  butacasMostradas.textContent = `Butacas seleccionadas: ${butacasSeleccionadas.join(', ')}`;
}


const botonPago = document.getElementById('botonPago');
botonPago.addEventListener('click', function () {
  const butacasSeleccionadas = obtenerButacasSeleccionadas();

  sessionStorage.setItem('butacasSeleccionadas', JSON.stringify(butacasSeleccionadas));

  window.location.href = 'compra.html';
});

function obtenerButacasSeleccionadas() {
  const butacasSeleccionadas = [];
  const butacas = document.querySelectorAll('.butaca.seleccionada');

  butacas.forEach(function (butaca) {
    const numID = butaca.id.replace(/[^\d]/g, '');
    butacasSeleccionadas.push(numID);
  });

  return butacasSeleccionadas;
}




document.addEventListener('DOMContentLoaded', () => {

  const urlParams = new URLSearchParams(window.location.search);
  const funcionId = urlParams.get('id');

  if (funcionId) {

    const url = `http://localhost:3000/obras/${funcionId}`;

    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(funcion => {

        document.querySelector('.title h3').textContent = funcion.titulo;
        document.querySelector('.hour h3').textContent = `Hora: ${funcion.horaObra}`;
        document.querySelector('.info__img img').src = funcion.imagenObra;

        funcion.butacas.forEach(butaca => {
          const elementoButaca = document.getElementById(butaca.id);
          if (elementoButaca) {
            elementoButaca.classList.add(butaca.estado);
          }
        });


      })
      .catch(error => console.error('There has been a problem with your fetch operation:', error));


    butacas.forEach(function (butaca) {
      butaca.addEventListener('click', function () {
        const esLibre = this.classList.contains('libre');
        const butacaId = this.id;
  
        const urlActualizar = `http://localhost:3000/obras/${funcionId}/butacas/${butacaId}`;
        const newData = { estado: esLibre ? 'ocupada' : 'libre' };
  
        fetch(urlActualizar, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(newData),
        })
  
          .then(response => {
            if (response.ok) {
              if (esLibre) {
                this.classList.remove('libre');
                this.classList.add('seleccionada');
              } else {
                this.classList.remove('seleccionada');
                this.classList.add('libre');
              }
              
              const index = butacasSeleccionadas.indexOf(numID);
              if (index > -1) {
                butacasSeleccionadas.splice(index, 1);
              }
            }

            mostrarButacasSeleccionadas();
          });
      });
      console.log(`cambiado con exito`);
    })
      .catch(error => {
      });

  } else {
    console.error('No se encontró el ID de la función en la URL');
  }
});



