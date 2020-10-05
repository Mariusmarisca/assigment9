const seeMenuButton = document.getElementById('MenuButton');
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