var characters = 
[
'http://shingeki.tv/final/character/img/eren2_thumb.png',
'http://shingeki.tv/final/character/img/mikasa_thumb.png',
'http://shingeki.tv/final/character/img/sasha_thumb.png',
'http://shingeki.tv/final/character/img/historia_thumb.png',
'http://shingeki.tv/final/character/img/reiner_thumb.png',
'http://shingeki.tv/final/character/img/hanji_thumb.png',
'http://shingeki.tv/final/character/img/levi_thumb.png',
'http://shingeki.tv/final/character/img/zeke_thumb.png',
'http://shingeki.tv/final/character/img/armin_thumb.png',
'http://shingeki.tv/final/character/img/connie_thumb.png',
'http://shingeki.tv/final/character/img/falco_thumb.png',
'http://shingeki.tv/final/character/img/pieck_thumb.png',
'http://shingeki.tv/final/character/img/porco_thumb.png',
'http://shingeki.tv/final/character/img/udo_thumb.png',
'http://shingeki.tv/final/character/img/colt_thumb.png',
'http://shingeki.tv/final/character/img/gabi_thumb.png'
]

    var appendNumber = 16;
    var prependNumber = 1;
    var swiper = new Swiper('.swiper-container', {
      slidesPerView: 3,
      centeredSlides: true,
      spaceBetween: 30,
      pagination: {
        el: '.swiper-pagination',
        type: 'fraction',
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      virtual: {
        slides: (function () {
          var slides = [];
          var names =  ['Eren Yeager', 'Mikasa Ackerman', 
          'Sasha Blouse', 'Historia Reiss','Reiner Braun', 'Hans Zoe', 'Levi',
          'Zeke Yeager', 'Armin Arlert','Connie Springer',    
          'Falco Grice',  'Pieck', 'Porco Galliard',  ' Udo' ,  'Colt Grice', 'Gabi Braun'
        
        ]
       
          for (var i = 0; i < characters.length; i += 1)
           {
            
            var elementosImg = "<img src=" + characters[i] + ">"
            slides.push(elementosImg + names[i]);
          
          }
           
          return slides;
        }()),
      },
    });
    

 /*window.onload =  function img1() {


for (let i = 0; i < characters.length; i++) {
                document.getElementById("img1").src=`${characters[i]}`;
        } 
}*/