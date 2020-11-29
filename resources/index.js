const seeMenuButton = document.getElementById('menuButton');
// ori incep toate cu litera mica, ori toate cu litera mare, nu mixte te rog. recomandarea este ca variabilele sa inceapa cu litera mica, dar eu promovez consistenta
const mobileMenu = document.getElementById('mobileMenu');
const layerWrapper= document.getElementById('layer');
const containerWrapper=document.getElementById('container')
seeMenuButton.addEventListener('click', function(){
    console.log('click');
  mobileMenu.classList.remove('hidden'); 
  layerWrapper.classList.add('hidden'); 
  containerWrapper.classList.add('hidden');
}
)
const seeCloseButton = document.getElementById('closeButton');
 seeCloseButton.addEventListener('click', function() {
   console.log('click');
   mobileMenu.classList.add('hidden');
   layerWrapper.classList.remove('hidden');
   containerWrapper.classList.remove('hidden');
 }
 )