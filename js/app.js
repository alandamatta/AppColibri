$(document).ready(function(){
     $('.collapsible').collapsible();
});

$(document).ready(function(){
     $(window).load(function(){
          $('#preloader').fadeOut(1500);//1500 é a duração do efeito (1.5 seg)
     });
});

$(document).ready(function(){
     $('.carousel').carousel();
     $('.carousel.carousel-slider').carousel({full_width: true});
});
