 //AQUI IRAN LAS EXPRESIONES REGULARES QUE SE USARAN PARA VALIDAR LOS INPUTS Y SUS
 //ENTRADAS 
 const regexNombre =/^[a-zA-Z\s]/;
 const regexApellido = /^[a-zA-Z\s]/;
 const regexTelefono = /^\d{10}$/;
 const regexDireccion = /^(ca?l?l?e?|ca?r?r?e?r?a)\s\d{1,3}\s?\w?\s?#\s?\d{1,2}\w?\s?-?\s?\d{1,2}\w?\s?$/i;
 const regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}\s?$/i;

 
function validarFormulario() {

  // tomamos el valor de los Inputs, si el input esta vacio y el boton ha sido presionado
  // cambiara el valor del label oculto a 'no olvides llenar este campo', si el valor ingresado al 
  // input no coincide con nuestro regex cambiara el valor del label oculto a '*nombre-input* invalido'
  // si el valor ingresado es valido, cambiara el valor de nuestra variable a true
  var apellido = document.getElementById("apellido-id");
  var telefono = document.getElementById('telefono-id');
  var direccion = document.getElementById('direccion-id');
  var email = document.getElementById('email-id');
  var error = document.getElementById('ocultarN');
  var errorA = document.getElementById('ocultarA');
  var errorT = document.getElementById('ocultarT');
  var errorD = document.getElementById('ocultarD');
  var errorE = document.getElementById('ocultarE');
  var nombre = document.getElementById("nombre-id");
  
  if(nombre.value === '') { 
    error.style.visibility = 'visible';
    error.innerHTML = "No olvides llenar este campo";
  } else {
      if(regexNombre.test(nombre.value)) { 
        console.log('bien nombre');
        nombre = true;
      } else {
          error.style.visibility = 'visible';
          error.style.color = 'red';
          nombre.style.border = '1px solid red';
          console.log('Introduce bien el nombre');
        }
    }  

  if(apellido.value === '') { 
    errorA.style.visibility = 'visible';
    errorA.innerHTML = "No olvides llenar este campo";
  } else {
      if(regexApellido.test(apellido.value)) {
        console.log('bien apellido');
        apellido = true;
      } else {
        errorA.style.color = 'red';
        apellido.style.border = '1px solid red';
        errorA.style.visibility = 'visible';
        console.log('Introduce bien el apellido');
        }
    }    
       
  if(telefono.value === '') { 
      errorT.style.visibility = 'visible';
      errorT.innerHTML = "No olvides llenar este campo";
    } else {  
        if(regexTelefono.test(telefono.value)) {
          telefono = true;
          console.log('bien telefono');
        } else {
          errorT.style.visibility = 'visible';
          errorT.innerHTML = "Solo 10 digitos!"
          telefono.style.border = '1px solid red';
          console.log('Introduce bien el telefono');
        }
      }    

  if(direccion.value === '') { 
    errorD.style.visibility = 'visible';
    errorD.innerHTML = "No olvides llenar este campo";
    } else {      
        if(regexDireccion.test(direccion.value)) {
          direccion = true;
          console.log('bien dirrecion');
        } else {
          errorD.style.visibility = 'visible';
          errorD.style.color = 'red';
          errorD.innerHTML = 'Direccion invalida';
          direccion.style.border = '1px solid red';
          console.log('Introduce bien la direccion');
         }  

      }

  if(email.value === '') { 
    errorE.style.visibility = 'visible';
    errorE.innerHTML = "No olvides llenar este campo";
  } else {
      if(regexEmail.test(email.value)) {
        email = true;
        console.log('bien email');
      } else {
          errorE.style.visibility = 'visible';
          errorE.style.color = 'red';
          email.style.border = '1px solid red';
          console.log('Introduce bien el email');
        }
    }
    
  // si todas las variables han sido true la pantalla llevara la vista a nuestra tabla
  if(nombre == true && apellido == true && telefono == true && direccion == true && email == true) {
    window.location.href = "StudentsTable.html";
  }
}