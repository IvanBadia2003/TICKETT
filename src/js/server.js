const express = require('express');
const app = express();
var cors = require('cors')
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(cors())

let obras = [
  {
    id: 1,
    titulo: 'DON JUAN',
    descripcion: 'Esta historia narra la vida de don Juan Tenorio, un hombre que presume de ser un conquistador, de tener a todas las mujeres que desea en sus brazos. Por eso, lleva a cabo una apuesta con don Luis Mejía: quieren ver quién es capaz de conquistar a más mujeres en un año. Sin embargo, cuando parece que el Tenorio tiene casi la victoria, conocerá a doña Inés, una monja, y todo cambiará.',
    diaObra:'22/11/2003',
    horaObra:'13:00',
    imagenObra:'.../IMAGENES/donjuan.jpg',
    reparto: 'Autor 1',
  },
  {
    id: 2,
    titulo: 'LA CELESTINA',
    descripcion: 'Calisto, joven de noble familia, persiguiendo un día un halcón, entra en el jardín de una doncella también noble, Melibea, y queda rendidamente enamorado de ella, pero es rechazado. Su criado Sempronio lo conduce hasta una vieja alcahueta y hechicera, Celestina, con el fin de que medie en sus propósitos.',
    diaObra:'23/11/2023',
    horaObra:'16:00',
    imagenObra:'.../IMAGENES/celestina.jpg',
    reparto: 'Autor 1',
  },
  {
    id: 3,
    titulo: 'LA FUNCIÓN QUE SALE MAL',
    descripcion: 'En la obra un grupo de teatro amateur lucha constantemente contra las adversidades a las que son bastante propensos el día del estreno de una obra de misterio. Las inesperadas y jocosas consecuencias de los accidentes que van sucediendo serán irreparables y le irán dando forma al nombre de la obra.',
    diaObra:'23/11/2023',
    horaObra:'19:00',
    imagenObra:'.../IMAGENES/funcion-sale.mal.jpg',
    reparto: 'Autor 1',
  },
  {
    id: 4,
    titulo: 'LAPONIA',
    descripcion: 'Mónica, Ramón y su hijo de cinco años, Martí, han viajado a Finlandia para pasar las fiestas de Navidad con la hermana de Mónica, Nuria, su compañero finés y la hija de los dos, Aina, de cuatro años. El pequeño Martí está ilusionado, en Finlandia podrá ver al Papá Noel de verdad.escripción de la obra 1',
    diaObra:'',
    horaObra:'',
    imagenObra:'.../IMAGENES/laponia.jpg',
    reparto: 'Autor 1',
  },
  {
    id: 5,
    titulo: 'JOSÉ EL SOÑADOR',
    descripcion: 'José es vendido como esclavo a un mercader egipcio, y es en Egipto donde su suerte cambia pues su habilidad para interpretar los sueños le gana la confianza del Faraón Ramses. José les tenderá una trampa a sus hermanos para enseñarles una lección de vida y finalmente reencontrarse con ellos como un hombre poderoso.',
    diaObra:'24/11/2023',
    horaObra:'12:00',
    imagenObra:'.../IMAGENES/jose-el-sonador.jpg',
    reparto: 'Autor 1',
  },
  {
    id: 6,
    titulo: 'EL MAGO POP',
    descripcion: 'Un día, por un error de producción, Antonio descubre la verdad y decide abandonar Magic Life. Será entonces, fuera del programa, donde el protagonista se marque un objetivo; hacer un espectáculo para demostrar a todo el mundo que es un gran ilusionista.',
    diaObra:'25/11/2023',
    horaObra:'17:30',
    imagenObra:'.../IMAGENES/el-mago-pop.jpg',
    reparto: 'Autor 1',
  },
  {
    id: 7,
    titulo: 'ILUSIONATE',
    descripcion: 'Espectáculo familiar que nos plantea una gran pregunta: ¿por qué perdemos la ilusión a medida que crecemos? Por suerte he descubierto la fórmula para que esto no ocurra y la comparto en un espectáculo emocionante en el que niños y adultos vivirán una experiencia mágica mientras descubren los ingredientes para recuperar la ilusión.',
    diaObra:'26/11/2023',
    horaObra:'18:15',
    imagenObra:'.../IMAGENES/ilusionate.jpg',
    reparto: 'Autor 1',
  },
  {
    id: 8,
    titulo: 'LAS MIL Y UNA NOCHES',
    descripcion: 'Las mil y una noches son un beso largo lleno de humor y sensualidad. Encontrarás aquí una historia diferente cada noche, como la misma Sheherezade, que le contaba al sultán un cuento nuevo cada noche para no morir. Cada vez que vengas, habrá una nueva historia, quizás cómica, o erótica, o misteriosa, o sabia, o todo a la vez. Siempre sorprendente. No hay en España otro espectáculo así.',
    diaObra:'29/11/2023',
    horaObra:'18:00',
    imagenObra:'.../IMAGENES/las-mil-y-una-noches.jpg',
    reparto: 'Autor 1',
  },
  {
    id: 9,
    titulo: 'EL REY LEÓN',
    descripcion: 'El Rey León" es un deslumbrante musical que transporta a los espectadores a las majestuosas llanuras africanas. Con una mezcla envolvente de música, danza y una historia poderosa sobre el valor y el destino, sigue la emocionante aventura de Simba mientras descubre su camino para reclamar su lugar como rey. Con impactantes efectos visuales y la inolvidable música de Elton John y Tim Rice, este espectáculo cautiva a audiencias de todas las edades con su magia y emoción.',
    diaObra:'02/12/2023',
    horaObra:'12:00',
    imagenObra:'.../IMAGENES/ElReyLeon3Aniv200.jpg',
    reparto: 'Autor 1',
  },
  {
    id: 10,
    titulo: 'CAMPEONES DE LA COMEDIA',
    descripcion: 'Gloria y Josete se acaban de independizar bajo la tutela de Claudia. Ante la necesidad de encontrar un trabajo para poder tener un sueldo con el que mantenerse, Claudia les propone que intenten dedicarse a algo que les guste de verdad. Ellos quieren ser artistas. Para ello deberían encontrar un representante.',
    diaObra:'09/12/2023',
    horaObra:'20:00',
    imagenObra:'.../IMAGENES/campeones.jpg',
    reparto: 'Autor 1',
  },
  {
    id: 11,
    titulo: 'FANGO',
    descripcion: 'Fango, el nuevo monólogo del cómico gallego Rober Bodegas. Más de una hora de nuevo repertorio sobre temas actuales y tabú para la comedia. Hacer humor con todos esos temas de los que no se suele hacer humor. Piensa en un tema del que creas que no debería hablarse en un monólogo y seguramente lo encuentres en este show.',
    diaObra:'18/12/2023',
    horaObra:'12:00',
    imagenObra:'.../IMAGENES/fango.jpg',
    reparto: 'Autor 1',
  },
  {
    id: 12,
    titulo: 'DOBLE O NADA',
    descripcion: 'Doble o nada es un thriller emocional ambientado en el hostil ambiente de las altas esferas empresariales. Una historia sobre el amor platónico, traición y engaño, y sobre todo, el poder y la ambición.',
    diaObra:'25/12/2023',
    horaObra:'20:30',
    imagenObra:'.../IMAGENES/doble-o-nada.jpg',
    reparto: 'Autor 1',
  },
 
];

// Obtener lista de obras
app.get('/obras', (req, res) => {
  res.json(obras);
});

// Obtener detalles de una obra por ID
app.get('/obras/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const obra = obras.find(o => o.id === id);
  if (!obra) {
    res.status(404).send('Obra no encontrada');
  } else {
    res.json(obra);
  }
});

// Agregar una nueva obra
app.post('/obras', (req, res) => {
  const nuevaObra = req.body;
  obras.push(nuevaObra);
  res.send('Obra agregada correctamente');
});

// Actualizar detalles de una obra por ID
app.put('/obras/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const obraIndex = obras.findIndex(o => o.id === id);
  if (obraIndex === -1) {
    res.status(404).send('Obra no encontrada');
  } else {
    obras[obraIndex] = { ...obras[obraIndex], ...req.body };
    res.send('Detalles de la obra actualizados');
  }
});

// Eliminar una obra por ID
app.delete('/obras/:id', (req, res) => {
  const id = parseInt(req.params.id);
  obras = obras.filter(o => o.id !== id);
  res.send('Obra eliminada correctamente');
});

// Puerto en el que se ejecuta el servidor
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
