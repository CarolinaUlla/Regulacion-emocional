/*!
    * Start Bootstrap - Freelancer v6.0.4 (https://startbootstrap.com/themes/freelancer)
    * Copyright 2013-2020 Start Bootstrap
    * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-freelancer/blob/master/LICENSE)
    */

// JAVASCRIPT BOOTSTRAP 

(function ($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 71)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Scroll to top button appear
  $(document).scroll(function () {
    var scrollDistance = $(this).scrollTop();
    if (scrollDistance > 100) {
      $('.scroll-to-top').fadeIn();
    } else {
      $('.scroll-to-top').fadeOut();
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function () {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 80
  });

  // Collapse Navbar
  var navbarCollapse = function () {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);

  // Floating label headings for the contact form
  $(function () {
    $("body").on("input propertychange", ".floating-label-form-group", function (e) {
      $(this).toggleClass("floating-label-form-group-with-value", !!$(e.target).val());
    }).on("focus", ".floating-label-form-group", function () {
      $(this).addClass("floating-label-form-group-with-focus");
    }).on("blur", ".floating-label-form-group", function () {
      $(this).removeClass("floating-label-form-group-with-focus");
    });
  });

})(jQuery);

onclick = "javascript:window.location.reload()";

//CHANGES IN DOM

function globoDialogo () {
  document.getElementById ('saludo').innerHTML = 'Empecemos! Cómo te sientes hoy?';  
}
  setTimeout (globoDialogo, 3000);


let emocion1 = document.getElementById('frustracion');
emocion1.addEventListener('click', function mostrarTermometros() {
  document.getElementById('portfolioModal1').hidden = false;
  document.getElementById('modal-content-nuevo').hidden = true;
  document.getElementById('img1').hidden = false;
  document.getElementById('img2').hidden = true;
  document.getElementById('img3').hidden = true;
  document.getElementById('img4').hidden = true;
  document.getElementById('img5').hidden = true;
  document.getElementById('img6').hidden = true;
  document.getElementById('img7').hidden = true;
  document.getElementById('img8').hidden = true;
});

let emocion2 = document.getElementById('miedo');
emocion2.addEventListener('click', function mostrarTermometros() {

  document.getElementById('portfolioModal1').hidden = false;
  document.getElementById('modal-content-nuevo').hidden = true;
  document.getElementById('img2').hidden = false;
  document.getElementById('img1').hidden = true;
  document.getElementById('img3').hidden = true;
  document.getElementById('img4').hidden = true;
  document.getElementById('img5').hidden = true;
  document.getElementById('img6').hidden = true;
  document.getElementById('img7').hidden = true;
  document.getElementById('img8').hidden = true;
});

let emocion3 = document.getElementById('ansiedad');
emocion3.addEventListener('click', function mostrarTermometros() {
  document.getElementById('portfolioModal1').hidden = false;
  document.getElementById('modal-content-nuevo').hidden = true;
  document.getElementById('img3').hidden = false;
  document.getElementById('img2').hidden = true;
  document.getElementById('img1').hidden = true;
  document.getElementById('img4').hidden = true;
  document.getElementById('img5').hidden = true;
  document.getElementById('img6').hidden = true;
  document.getElementById('img7').hidden = true;
  document.getElementById('img8').hidden = true;
});

let emocion4 = document.getElementById('culpa');
emocion4.addEventListener('click', function mostrarTermometros() {
  document.getElementById('portfolioModal1').hidden = false;
  document.getElementById('modal-content-nuevo').hidden = true;
  document.getElementById('img4').hidden = false;
  document.getElementById('img2').hidden = true;
  document.getElementById('img3').hidden = true;
  document.getElementById('img1').hidden = true;
  document.getElementById('img5').hidden = true;
  document.getElementById('img6').hidden = true;
  document.getElementById('img7').hidden = true;
  document.getElementById('img8').hidden = true;
});

let emocion5 = document.getElementById('enojo');
emocion5.addEventListener('click', function mostrarTermometros() {
  document.getElementById('portfolioModal1').hidden = false;
  document.getElementById('modal-content-nuevo').hidden = true;
  document.getElementById('img5').hidden = false;
  document.getElementById('img2').hidden = true;
  document.getElementById('img3').hidden = true;
  document.getElementById('img4').hidden = true;
  document.getElementById('img1').hidden = true;
  document.getElementById('img6').hidden = true;
  document.getElementById('img7').hidden = true;
  document.getElementById('img8').hidden = true;
});

let emocion6 = document.getElementById('angustia');
emocion6.addEventListener('click', function mostrarTermometros() {
  document.getElementById('portfolioModal1').hidden = false;
  document.getElementById('modal-content-nuevo').hidden = true;
  document.getElementById('img6').hidden = false;
  document.getElementById('img2').hidden = true;
  document.getElementById('img3').hidden = true;
  document.getElementById('img4').hidden = true;
  document.getElementById('img5').hidden = true;
  document.getElementById('img1').hidden = true;
  document.getElementById('img7').hidden = true;
  document.getElementById('img8').hidden = true;
});

let emocion7 = document.getElementById('verguenza');
emocion7.addEventListener('click', function mostrarTermometros() {
  document.getElementById('portfolioModal1').hidden = false;
  document.getElementById('modal-content-nuevo').hidden = true;
  document.getElementById('img7').hidden = false;
  document.getElementById('img2').hidden = true;
  document.getElementById('img3').hidden = true;
  document.getElementById('img4').hidden = true;
  document.getElementById('img5').hidden = true;
  document.getElementById('img6').hidden = true;
  document.getElementById('img1').hidden = true;
  document.getElementById('img8').hidden = true;
});

let emocion8 = document.getElementById('tristeza');
emocion8.addEventListener('click', function mostrarTermometros() {
  document.getElementById('portfolioModal1').hidden = false;
  document.getElementById('modal-content-nuevo').hidden = true;
  document.getElementById('img8').hidden = false;
  document.getElementById('img2').hidden = true;
  document.getElementById('img3').hidden = true;
  document.getElementById('img4').hidden = true;
  document.getElementById('img5').hidden = true;
  document.getElementById('img6').hidden = true;
  document.getElementById('img7').hidden = true;
  document.getElementById('img1').hidden = true;
});



const mostrarPantallaRelajacion = () => {

  document.getElementById('modal-content-nuevo').hidden = false;
  document.getElementById('modal-body').hidden = true;
}



let botonValidar = document.querySelector('#validar');
botonValidar.addEventListener('click', function () {
  let valor = document.querySelector('#valor-numero').value

  console.log(valor);

  if (valor >= 60) {
    mostrarPantallaRelajacion();
  } else {
    mostrarPantallaCambios();
  }
})

const mostrarPantallaPractica = () => {
  document.getElementById ('modal-content-practica').hidden = false;
  document.getElementById ('modal-content-nuevo').hidden = true;
}

let botonAvanzar = document.getElementById ('siguiente');
botonAvanzar.addEventListener ('click', mostrarPantallaPractica);



const mostrarPantallaAbdominal = () => {
  document.getElementById ('modal-content-practica').hidden = true;
  document.getElementById ('modal-content-abdominal').hidden = false;
}

let botonAbdominal = document.getElementById ('abdominal');
botonAbdominal.addEventListener ('click', mostrarPantallaAbdominal);

const escucharAudioAbdominal = () => {

  let cargandoPagina = document.createElement ('p');
  cargandoPagina.innerHTML = 'Cargando. Puede tardar unos segundos';
  cargandoPagina.classList.add ('loading');
  document.getElementById ('loading-context').appendChild (cargandoPagina);

  let audio1 = document.createElement ('audio');
  audio1.src = "/assets/audios/Respiración abdominal - con música de fondo.mp3";
  audio1.play();
  document.getElementById ('audio1').appendChild (audio1);

  const finalizarAudio = () => {
    audio1.pause();
  }

  let detenerAudio = document.getElementById ('continuar');
  detenerAudio.addEventListener ('click',finalizarAudio);
  
  setTimeout(function(){ 
    cargandoPagina.style.display = 'none'; }, 3000);
}

let prenderAudio = document.getElementById ('boton-audio1');
prenderAudio.addEventListener ('click',escucharAudioAbdominal);



const mostrarPantallaImaginario = () => {
  document.getElementById ('modal-content-practica').hidden = true;
  document.getElementById ('modal-content-imaginario').hidden = false;
}

let botonImaginario = document.getElementById ('imaginario');
botonImaginario.addEventListener ('click', mostrarPantallaImaginario);

const escucharAudio = () => {

  let cargandoPagina2 = document.createElement ('p');
  cargandoPagina2.innerHTML = 'Cargando. Puede tardar unos segundos';
  cargandoPagina2.classList.add ('loading');
  document.getElementById ('loading-context2').appendChild (cargandoPagina2);

  let audio = document.createElement ('audio');
  audio.src = "/assets/audios/Viaje imaginario El Árbol - con música de fondo.mp3";
  audio.play();
  document.getElementById ('audio').appendChild (audio);

  const FinAudio = () => {
    audio.pause();
  }

  let frenarAudio = document.getElementById ('continuar2');
  frenarAudio.addEventListener ('click',FinAudio);

  setTimeout(function(){ 
  cargandoPagina2.style.display = 'none'; }, 3000);
}

let botonAudio = document.getElementById ('boton-audio');
botonAudio.addEventListener ('click',escucharAudio);



const mostrarPantallaProgresiva = () => {
  document.getElementById ('modal-content-practica').hidden = true;
  document.getElementById ('modal-content-progresiva').hidden = false;
}

let botonProgresiva = document.getElementById ('progresiva');
botonProgresiva.addEventListener ('click', mostrarPantallaProgresiva);



const escucharAudioRmp = () => {
  let cargandoPagina3 = document.createElement ('p');
  cargandoPagina3.innerHTML = 'Cargando. Puede tardar unos segundos';
  cargandoPagina3.classList.add ('loading');
  document.getElementById ('loading-context3').appendChild (cargandoPagina3);

  let audio2 = document.createElement ('audio');
  audio2.src = "/assets/audios/RMP breve - con música de fondo.mp3";
  audio2.play();
  document.getElementById ('audio3').appendChild (audio2);

  const finalizarAudioRmp = () => {
    audio2.pause();
  }

  let stopAudio = document.getElementById ('continuar3');
  stopAudio.addEventListener ('click',finalizarAudioRmp);

  setTimeout(function(){ 
  cargandoPagina3.style.display = 'none'; }, 3000);
}

let playAudio = document.getElementById ('boton-audio2');
playAudio.addEventListener ('click',escucharAudioRmp);

const mostrarPantallaLogro = () => {
  document.getElementById('modal-content-ejer-respiracion').hidden = false;
  document.getElementById('modal-content-abdominal').hidden = true;
}
let botonContinuar = document.getElementById('continuar');
botonContinuar.addEventListener('click', mostrarPantallaLogro);


const mostrarPantallaLogro2 = () => {
  document.getElementById('modal-content-ejer-respiracion').hidden = false;
  document.getElementById('modal-content-imaginario').hidden = true;
}

let botCont = document.getElementById('continuar2');
botCont.addEventListener('click', mostrarPantallaLogro2);


const mostrarPantallaLogro3 = () => {
  document.getElementById('modal-content-ejer-respiracion').hidden = false;
  document.getElementById('modal-content-progresiva').hidden = true;
}
let botContinuar = document.getElementById('continuar3');
botContinuar.addEventListener('click', mostrarPantallaLogro3);


const mostrarPantallaPreguntaCambio = () => {
  document.getElementById ('modal-content-ejer-respiracion').hidden = true;
  document.getElementById ('modal-content-cambio').hidden = false;
}

let botonACambio = document.getElementById ('ir-a-pregunta-cambio');
botonACambio.addEventListener ('click', mostrarPantallaPreguntaCambio);

function mensajeChange() {
  
  const mensaje = document.getElementById("valor-numero");
  const boton = document.getElementById("validar");
  
  
  if (mensaje.value.trim() !== "") {
   
    boton.removeAttribute('disabled')
  } else {
    boton.setAttribute('disabled', "true");
  }
}


const mostrarPantallaCambios = () => {
  document.getElementById('modal-content-cambio').hidden = false;
  document.getElementById('modal-body').hidden = true;
}


const mostrarBotonesNuevos = () => {

  let parrafoCambios = document.createElement ('p');
  parrafoCambios. innerHTML = 'Qué puedo cambiar?';
  document.getElementById ('modal-content-botones').appendChild (parrafoCambios);
  parrafoCambios.classList.add ('cambios2');


  let botonNuevo = document.createElement ('button');
  botonNuevo.innerHTML = 'SITUACIÓN';
  document.getElementById ('modal-content-botones').appendChild (botonNuevo);
  botonNuevo.classList.add ('botones-nuevos');

  let botonNuevo2 = document.createElement ('button');
  botonNuevo2.innerHTML = 'CONTEXTO';
  document.getElementById ('modal-content-botones').appendChild (botonNuevo2);
  botonNuevo2.classList.add ('botones-nuevos');

  let botonNuevo3 = document.createElement ('button');
  botonNuevo3.innerHTML = 'REACCIÓN';
  document.getElementById ('modal-content-botones').appendChild (botonNuevo3);
  botonNuevo3.classList.add ('botones-nuevos');

  botonNuevo3.addEventListener ('click', mostrarPantallaRegistro);

  botonNuevo.addEventListener ('click', mostrarPantallaResolucion);
  botonNuevo2.addEventListener ('click', mostrarPantallaResolucion);
}

let botonSi = document.getElementById('si');
botonSi.addEventListener('click', mostrarBotonesNuevos);

const mostrarPantallaResolucion = () => {
  document.getElementById ('modal-content-cambio').hidden = true;
  document.getElementById ('modal-content-resolucion').hidden = false;
}

const mostrarPantallaEjercicioResolucion = () => {
  document.getElementById ('modal-content-resolucion').hidden = true;
  document.getElementById ('modal-content-resolucion-identificar').hidden = false; 
}

let botonSeguir = document.getElementById ('seguir1');
botonSeguir.addEventListener ('click', mostrarPantallaEjercicioResolucion);


const mostrarPantallaEjercicioResolucion2 = () => {
  document.getElementById ('modal-content-resolucion-ideas').hidden = false; 
}

let botonSeguir2 = document.getElementById ('seguir2');
botonSeguir2.addEventListener ('click', mostrarPantallaEjercicioResolucion2);


const mostrarPantallaEjercicioResolucion3 = () => {
  document.getElementById ('modal-content-resolucion-alternativas').hidden = false; 
}

let botonSeguir3 = document.getElementById ('seguir3');
botonSeguir3.addEventListener ('click', mostrarPantallaEjercicioResolucion3);

const mostrarPantallaEjercicioResolucion4 = () => {
  document.getElementById ('modal-content-resolucion-soluciones').hidden = false; 
}

let botonSeguir4 = document.getElementById ('seguir4');
botonSeguir4.addEventListener ('click', mostrarPantallaEjercicioResolucion4);

const mostrarPantallaEjercicioResolucion5 = () => {
  document.getElementById ('modal-content-resolucion-eficacia').hidden = false; 
}

let botonSeguir5 = document.getElementById ('seguir5');
botonSeguir5.addEventListener ('click', mostrarPantallaEjercicioResolucion5);




const mostrarPantallaEficacia = () => {
  document.getElementById ('modal-content-eficacia').hidden = false; 
  document.getElementById ('modal-content-resolucion-eficacia').hidden = true; 
  document.getElementById ('modal-content-resolucion-soluciones').hidden = true;
  document.getElementById ('modal-content-resolucion-alternativas').hidden = true; 
  document.getElementById ('modal-content-resolucion-ideas').hidden = true; 
  document.getElementById ('modal-content-resolucion-identificar').hidden = true;
}

let botonSiEficacia = document.getElementById ('boton-yes');
botonSiEficacia.addEventListener ('click', mostrarPantallaEficacia);




const mostrarPantallaSoluciones = () => {
  document.getElementById ('modal-content-resolucion-soluciones').hidden = false;
  document.getElementById ('modal-content-resolucion-eficacia').hidden = true; 
  document.getElementById ('modal-content-resolucion-alternativas').hidden = true; 
  document.getElementById ('modal-content-resolucion-ideas').hidden = true; 
  document.getElementById ('modal-content-resolucion-identificar').hidden = true;
  document.getElementById ('modal-content-eficacia').hidden = true;
}

let botonNoEficacia = document.getElementById ('boton-no');
botonNoEficacia.addEventListener ('click', mostrarPantallaSoluciones);



const mostrarPantallaAceptacion = () => {
  document.getElementById('modal-content-cambio').hidden = true;
  document.getElementById('modal-content-aceptacion').hidden = false;
  document.getElementById ('modal-content-reevaluacion').hidden = true;
}

let botonNo = document.getElementById('no');
botonNo.addEventListener('click', mostrarPantallaAceptacion);



const mostrarPantallaEjerAceptacion = () => {
  document.getElementById('modal-content-aceptacion').hidden = true;
  document.getElementById('modal-content-ejer-aceptacion').hidden = false;
}

let botonEjercicio = document.getElementById('ejercicio');
botonEjercicio.addEventListener('click', mostrarPantallaEjerAceptacion);


const mostrarPantallaAceptacion2 = () => {
  document.getElementById ('modal-content-ejer-aceptacion').hidden = true;
  document.getElementById ('modal-content-ejer-aceptacion2').hidden = false;
}

let buttonSi = document.getElementById ('button-si');
buttonSi.addEventListener ('click', mostrarPantallaAceptacion2);

const mostrarPantallaRegistro = () => {
  document.getElementById ('modal-content-ejer-aceptacion').hidden = true;
  document.getElementById ('modal-content-registro').hidden = false;
  document.getElementById ('modal-content-cambio').hidden = true;
  document.getElementById ('modal-content-eficacia-aceptacion').hidden = true;
}

let buttonNo = document.getElementById ('button-no');
buttonNo.addEventListener ('click', mostrarPantallaRegistro);

let botonARegistro = document.getElementById ('boton-ir-final3');
botonARegistro.addEventListener ('click', mostrarPantallaRegistro);

const mostrarPantallaEficaciaAceptacion = () => {
  document.getElementById ('modal-content-ejer-aceptacion2').hidden = true;
  document.getElementById ('modal-content-eficacia-aceptacion').hidden = false;
}

let buttonContinuar = document.getElementById ('continuar4');
buttonContinuar.addEventListener ('click', mostrarPantallaEficaciaAceptacion);


const mostrarPantallaEvidencia = () => {
  document.getElementById('modal-content-registro').hidden = false;
  document.getElementById('modal-content-evidencia').hidden = false;
  document.getElementById('modal-content-reevaluacion').hidden = true;
}

let botonEvidencia = document.getElementById('boton-ir-registro');
botonEvidencia.addEventListener('click', mostrarPantallaEvidencia)



const mostrarPantallaDialogo = () => {
  document.getElementById('modal-content-dialogo').hidden = false;
  document.getElementById('modal-content-evidencia').hidden = false;
}

let botonYes = document.getElementById('yes');
botonYes.addEventListener('click', mostrarPantallaDialogo);

const mostrarPantallaAlternativo = () => {
  document.getElementById('modal-content-dialogo').hidden = false;
  document.getElementById('modal-content-alternativo').hidden = false;
}

let botonCont = document.getElementById('boton-ir-alternativo');
botonCont.addEventListener('click', mostrarPantallaAlternativo);


const mostrarPantallaEficacia2 = () => {
  document.getElementById('modal-content-eficacia2').hidden = false;
  document.getElementById('modal-content-alternativo').hidden = true;
  document.getElementById('modal-content-dialogo').hidden = true;
  document.getElementById('modal-content-evidencia').hidden = true;
  document.getElementById('modal-content-registro').hidden = true;
}

let botonCont2 = document.getElementById('boton-ir-eficacia');
botonCont2.addEventListener('click', mostrarPantallaEficacia2);



let botonValidarEmocion = document.querySelector('#boton-validar');
botonValidarEmocion.addEventListener('click', function () {
  let valorEmocion = document.querySelector('#numero-emocion').value

  console.log(valorEmocion);

  if (valorEmocion <= 30) {
    mostrarPantallaFelicitaciones();
  } else {
    mostrarPantallaReevaluacion();
  }
})

function botonChange() {
  
  const cambio = document.getElementById("numero-emocion");
  const botonActivado = document.getElementById("boton-validar");
  
  
  if (cambio.value.trim() !== "") {
    console.log("Se muestra")
    botonActivado.removeAttribute('disabled')
  } else {
    botonActivado.setAttribute('disabled', "true");
  }
}

const mostrarPantallaFelicitaciones = () => {
  document.getElementById('modal-content-felicitaciones').hidden = false;
  document.getElementById('modal-content-eficacia2').hidden = true;

};

const mostrarPantallaReevaluacion = () => {
  document.getElementById('modal-content-reevaluacion').hidden = false;
  document.getElementById('modal-content-eficacia2').hidden = true;

}

let botonAfirmativo = document.getElementById('afirmativo');
botonAfirmativo.addEventListener('click', mostrarPantallaAceptacion);

let botonNegativo = document.getElementById('negativo');
botonNegativo.addEventListener('click', mostrarPantallaEvidencia)


const mostrarPantallaFinal = () => {
  document.getElementById('modal-content-felicitaciones').hidden = true;
  document.getElementById('modal-content-final').hidden = false;
  document.getElementById ('modal-content-eficacia').hidden = true;

};

let botonContinuarFin = document.getElementById('boton-ir-final');
botonContinuarFin.addEventListener('click', mostrarPantallaFinal);


let continuarFinal = document.getElementById ('continuar-final');
continuarFinal.addEventListener ('click', mostrarPantallaFinal);


const frases = ["Qué podés agradecer hoy? Escribe tres cosas", 
"Qué podés hacer hoy para ayudar a alguien? Escribe una acción concreta", 
"Qué actividad placentera puedo hacer hoy para mí? Escríbela y planifícala para algún momento del día", 
"Qué verbalización positiva (decir algo agradable) podrías decirte hoy para sentirte mejor? Escribe lo que te dirías y dítelo al menos dos veces en el día"];

const random = Math.floor(Math.random() * frases.length);
let fraseRandom = document.createElement ('p');
fraseRandom. innerHTML = frases[random];
document.getElementById ('final').appendChild (fraseRandom);
fraseRandom.classList.add ('frase-random');

console.log(random, frases[random]);


let botonListo = document.getElementById ('listo');

botonListo.addEventListener('click', _ => { 
  location.reload();
});