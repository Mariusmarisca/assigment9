const seeMenuButton = document.getElementById('MenuButton');
// ori incep toate cu litera mica, ori toate cu litera mare, nu mixte te rog. recomandarea este ca variabilele sa inceapa cu litera mica, dar eu promovez consistenta
const MobileMenu = document.getElementById('MobileMenu');
seeMenuButton.addEventListener('click', function(){
    console.log('click');
  MobileMenu.classList.remove('hidden');  
}
)
const seeCloseButton = document.getElementById('CloseButton');
 seeCloseButton.addEventListener('click', function() {
   console.log('click');
   MobileMenu.classList.add('hidden');
 }
 )