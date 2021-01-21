const seeMenuButton = document.getElementById('menuButton');
const mobileMenu = document.getElementById('mobileMenu');
const layerWrapper= document.getElementById('layer');
const containerWrapper=document.getElementById('container');
const seeCloseButton = document.getElementById('closeButton');

seeMenuButton.addEventListener('click', function(){
    console.log('click');
  mobileMenu.classList.remove('hidden'); 
  layerWrapper.classList.add('hidden'); 
  containerWrapper.classList.add('hidden');
}
)

 seeCloseButton.addEventListener('click', function() {
   console.log('click');
   mobileMenu.classList.add('hidden');
   layerWrapper.classList.remove('hidden');
   containerWrapper.classList.remove('hidden');
 }
 )