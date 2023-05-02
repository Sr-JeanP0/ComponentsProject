//Creamos una lista con los datos que recibira nuestra tabla
const estudiantes = [
  { nombre: 'Juan', edad: 25, curso: 'Matemáticas', telefono: '1234567890' },
  { nombre: 'María', edad: 30, curso: 'Historia', telefono: '0987654321' },
  { nombre: 'Pedro', edad: 20, curso: 'Inglés', telefono: '564646464' },
  { nombre: 'Marcela', edad: 20, curso: 'Español', telefono: '333333333'},
  { nombre: 'Kenis', edad: 38, curso: 'Geografia', telefono: '165489165' },
  { nombre: 'Ana', edad: 201, curso: 'Geometria', telefono: '61566511' },
  { nombre: 'Joan', edad: 56, curso: 'Algebra', telefono: '15646444'}
];

//tomamos el cuerpo de la tabla para poder introducir los datos en la misma.
const cuerpoTabla = document.getElementById('cuerpoTabla');

// verificamos si la lista de datos esta vacia, de estarlo mostrara una celda
// que dira 'no hay datos para mostrar'
if(estudiantes.length === 0){
  const fila = document.createElement('tr');

  const mensaje = document.createElement('td');
  mensaje.innerHTML = "no hay datos para mostrar";
  mensaje.style.textAlign = "center";
  mensaje.style.fontSize = "20px";
  mensaje.style.fontFamily = 'Quicksand';
  mensaje.colSpan = 5;
  fila.appendChild(mensaje);

  cuerpoTabla.appendChild(fila);

} else {
    // de lo contrario, al tener datos, con una funcion iteramos por la lista
    // y a cada dato le asiganremos una funcion, en la cual crearemos un input type checkbox,
    // junto a otras 5 celda, para al final introducirla dentro de una fila
    estudiantes.forEach(function(estudiante) {

      const fila = document.createElement('tr');
      const celdaCheckbox = document.createElement('td');
      const checkboxes = document.createElement('input');

      // les asignamos el tipo de input que es
      // y un id
      checkboxes.type = 'checkbox';
      checkboxes.id = 'checkboxes';

      celdaCheckbox.appendChild(checkboxes);
      fila.appendChild(celdaCheckbox);

      const celdaNombre = document.createElement('td');
      celdaNombre.textContent = estudiante.nombre;
      fila.appendChild(celdaNombre);
      const celdaEdad = document.createElement('td');
      celdaEdad.textContent = estudiante.edad;
      fila.appendChild(celdaEdad);
      const celdaCurso = document.createElement('td');
      celdaCurso.textContent = estudiante.curso;
      fila.appendChild(celdaCurso);
      const celdaTelefono = document.createElement('td');
      celdaTelefono.textContent = estudiante.telefono;
      fila.appendChild(celdaTelefono);

      cuerpoTabla.appendChild(fila);
    });
  }
  
/*
=================================
============ FIN TABLA ==========
=================================
*/

/* ---------------------------------------------------- */

/*
=================================
=========== SKELETON ============
=================================
*/

// tomamos los tags con el id 'skeleton' y le agregaremos una funcion,
// luego de pasar 3 segundo (3000 milisegundos) su display cambiara a 'none', por encodeURI, desaparecera
// de la pantalla, haciendo el efecto de carga
window.addEventListener('load', function() {
  const skeleton = document.getElementById('skeleton');
  setTimeout(function() {
    skeleton.style.display = 'none';
  }, 3000);
});

window.addEventListener('load', function() {
  const skeletonH1 = document.getElementById('skeleton-h1');
  setTimeout(function() {
    skeletonH1.style.display = 'none';
  }, 3000);
});

/*
=================================
========= FIN SKELETON ==========
=================================
*/

/* ---------------------------------------------------- */


/*
=================================
========== SELECT ALL ===========
=================================
*/

// verificamos si el checkbox principal esta chequeado
// si es asi tomara a los elementos con el id checkboxes y su  estado cambiara a checked
// tambien
const CheckboxP = document.getElementById('checkPro');
const checkeds = document.getElementById('checkboxes');

if (CheckboxP.checked) {
  console.log('El checkbox está marcado');
} else {
  console.log('El checkbox no está marcado');
}

/*
=================================
======== FIN SELECT ALL =========
=================================
*/

