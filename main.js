//AGREGAMOS LAS VARIABLES//
let btnMenu = document.querySelector(".btn-menu");
let menu = document.querySelector(".list-container");
let containerMenu = document.querySelector(".menu");
let activador = true;
//FIN VARIABLES//

//EFECTO SCROLL//
let prevScrollPos = window.pageYOffset;
let goTop = document.querySelector('.go-top');

window.onscroll = () =>{
    let currentScrollPos = window.pageYOffset;
    
    //MOSTRAR Y OCULTAR MENU
    if (prevScrollPos > currentScrollPos) {
        containerMenu.style.top = '0px';
        containerMenu.style.transition = '0.5s';
    }else{
        containerMenu.style.top = '-60px';
        containerMenu.style.transition = '0.5s';
    }
    prevScrollPos = currentScrollPos;
    //FIN MOSTRAR Y OCULTAR MENU

    //MOSTRAR Y OCULTAR SCROLL ESTILOS
    let arriba = window.pageYOffset;

    if(arriba <= 600) {
        containerMenu.style.borderBottom = 'none';
        goTop.style.right = '-100px';

    }else{
        containerMenu.style.borderBottom = '3px solid #1dd1a1';
        goTop.style.right = '0px';
        goTop.style.transition = '0.5s';

    }
    //FIN MOSTRAR Y OCULTAR SCROLL ESTILOS
}
//BOTONES IR ARRIBA Y MOSTRAR ABAJO//
goTop.addEventListener('click', () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
})
let verAbajo = document.querySelector('#abajo')
  
verAbajo.addEventListener('click' , () => {
    document.body.scrollTop = 600;
    document.documentElement.scrollTop = 600;
})
//FIN BOTONES IR ARRIBA Y MOSTRAR ABAJO//
//FIN EFECTO SCROLL//

//PARA AGREGAR O QUITAR LA BARS
function listo(){
    jQuery(".bars").click(function(e){
      e.preventDefault();
      //AGREGA O QUITA EL OPEN
      jQuery("header .container nav").toggleClass("open");
      //AGREGA O QUITA LA X
      jQuery(".bars i").toggleClass("fa-times");
    });
    //ELEMENTOS a DEL NAV
    jQuery("header .container nav a").click(function(){
      //PARA REMOVER EL MENU X
      jQuery("header .container nav").removeClass("open");
      jQuery(".bars i").removeClass("fa-times");
      //FIN REMOVER MENU X
  
      var col = jQuery(this).attr("href");
      //PARA QUE SE MUEVA HASTA LA POSICION "a"
      jQuery("html,body").animate({
        "scrollTop": jQuery(col).offset().top -99
      })
    });
  }