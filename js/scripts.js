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

let emocion1 = document.getElementById('frustracion');
emocion1.addEventListener('click', function mostrarTermometros() {
  document.getElementById('portfolioModal1').hidden = false;
  document.getElementById('modal-content-nuevo').hidden = true;
  document.getElementById('img1').hidden = false;
});


let emocion2 = document.getElementById('miedo');
emocion2.addEventListener('click', function mostrarTermometros() {

  document.getElementById('portfolioModal1').hidden = false;
  document.getElementById('modal-content-nuevo').hidden = true;
  document.getElementById('img2').hidden = false;
});

let emocion3 = document.getElementById('ansiedad');
emocion3.addEventListener('click', function mostrarTermometros() {
  document.getElementById('portfolioModal1').hidden = false;
  document.getElementById('modal-content-nuevo').hidden = true;
  document.getElementById('img3').hidden = false;
});

let emocion4 = document.getElementById('culpa');
emocion4.addEventListener('click', function mostrarTermometros() {
  document.getElementById('portfolioModal1').hidden = false;
  document.getElementById('modal-content-nuevo').hidden = true;
  document.getElementById('img4').hidden = false;
});

let emocion5 = document.getElementById('enojo');
emocion5.addEventListener('click', function mostrarTermometros() {
  document.getElementById('portfolioModal1').hidden = false;
  document.getElementById('modal-content-nuevo').hidden = true;
  document.getElementById('img5').hidden = false;
});

let emocion6 = document.getElementById('angustia');
emocion6.addEventListener('click', function mostrarTermometros() {
  document.getElementById('portfolioModal1').hidden = false;
  document.getElementById('modal-content-nuevo').hidden = true;
  document.getElementById('img6').hidden = false;
});

let emocion7 = document.getElementById('verguenza');
emocion7.addEventListener('click', function mostrarTermometros() {
  document.getElementById('portfolioModal1').hidden = false;
  document.getElementById('modal-content-nuevo').hidden = true;
  document.getElementById('img7').hidden = false;
});

let emocion8 = document.getElementById('tristeza');
emocion8.addEventListener('click', function mostrarTermometros() {
  document.getElementById('portfolioModal1').hidden = false;
  document.getElementById('modal-content-nuevo').hidden = true;
  document.getElementById('img8').hidden = false;
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

const mostrarPantallaCambio = () => {
  document.getElementById('modal-content-cambio').hidden = false;
  document.getElementById('modal-content-nuevo').hidden = true;
}

let botonContinuar = document.getElementById('continuar');
botonContinuar.addEventListener('click', mostrarPantallaCambio);



const mostrarPantallaCambios = () => {
  document.getElementById('modal-content-cambio').hidden = false;
  document.getElementById('modal-body').hidden = true;
}


const mostrarPantallaResolucion = () => {
  document.getElementById('modal-content-resolucion').hidden = false;
  document.getElementById('modal-content-cambio').hidden = true;
}

let botonSi = document.getElementById('si');
botonSi.addEventListener('click', mostrarPantallaResolucion);


const mostrarPantallaEficacia = () => {
  document.getElementById('modal-content-eficacia').hidden = false;
  document.getElementById('modal-content-resolucion').hidden = true;
}

let botonEficacia = document.getElementById('eficacia');
botonEficacia.addEventListener('click', mostrarPantallaEficacia);


const mostrarPantallaAceptacion = () => {
  document.getElementById('modal-content-cambio').hidden = true;
  document.getElementById('modal-content-aceptacion').hidden = false;
}

let botonNo = document.getElementById('no');
botonNo.addEventListener('click', mostrarPantallaAceptacion);



const mostrarPantallaRegistro = () => {
  document.getElementById('modal-content-aceptacion').hidden = true;
  document.getElementById('modal-content-registro').hidden = false;
}

let botonRegistro = document.getElementById('registro');
botonRegistro.addEventListener('click', mostrarPantallaRegistro);



const mostrarPantallaEvidencia = () => {
  document.getElementById('modal-content-registro').hidden = true;
  document.getElementById('modal-content-evidencia').hidden = false;
  document.getElementById('modal-content-reevaluacion').hidden = true;
}

let botonEvidencia = document.getElementById('boton-ir-registro');
botonEvidencia.addEventListener('click', mostrarPantallaEvidencia)


const mostrarPantallaEvaluacion = () => {
  document.getElementById('modal-content-evidencia').hidden = true;
  document.getElementById('modal-content-evaluacion').hidden = false;
}

let botonEvaluar = document.getElementById('boton-ir-evaluacion');
botonEvaluar.addEventListener('click', mostrarPantallaEvaluacion);

const mostrarPantallaDialogo = () => {
  document.getElementById('modal-content-dialogo').hidden = false;
  document.getElementById('modal-content-evaluacion').hidden = true;
}

let botonYes = document.getElementById('yes');
botonYes.addEventListener('click', mostrarPantallaDialogo);

const mostrarPantallaAlternativo = () => {
  document.getElementById('modal-content-dialogo').hidden = true;
  document.getElementById('modal-content-alternativo').hidden = false;
}

let botonCont = document.getElementById('boton-ir-alternativo');
botonCont.addEventListener('click', mostrarPantallaAlternativo);


const mostrarPantallaEficacia2 = () => {
  document.getElementById('modal-content-eficacia2').hidden = false;
  document.getElementById('modal-content-alternativo').hidden = true;
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



const mostrarPantallaFelicitaciones = () => {
  document.getElementById('modal-content-felicitaciones').hidden = false;
  document.getElementById('modal-content-eficacia2').hidden = true;

};

const mostrarPantallaReevaluacion = () => {
  document.getElementById('modal-content-reevaluacion').hidden = false;
  document.getElementById('modal-content-eficacia2').hidden = true;

}

const mostrarPantallaResolucion2 = () => {
  document.getElementById('modal-content-resolucion2').hidden = false;
  document.getElementById('modal-content-reevaluacion').hidden = true;
}

let botonAfirmativo = document.getElementById('afirmativo');
botonAfirmativo.addEventListener('click', mostrarPantallaResolucion2);

let botonNegativo = document.getElementById('negativo');
botonNegativo.addEventListener('click', mostrarPantallaEvidencia)



const mostrarPantallaTransformacion = () => {
  document.getElementById('modal-content-evaluacion').hidden = true;
  document.getElementById('modal-content-transformacion').hidden = false;
}

let botonNop = document.getElementById('nop');
botonNop.addEventListener('click', mostrarPantallaTransformacion);


const mostrarPantallaFinal = () => {
  document.getElementById('modal-content-felicitaciones').hidden = true;
  document.getElementById('modal-content-final').hidden = false;
  document.getElementById('modal-content-resolucion2').hidden = true;

};

let botonContinuarFin = document.getElementById('boton-ir-final');
botonContinuarFin.addEventListener('click', mostrarPantallaFinal);


let botonIrFinal = document.getElementById('boton-ir-final2');
botonIrFinal.addEventListener('click', mostrarPantallaFinal);
