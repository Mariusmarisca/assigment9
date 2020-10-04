const seeMenuButton = document.getElementById("seeMenuButton");
const seeCloseButton = document.getElementById("seeCloseButton");
const MobileMenu = document.getElementById("MobileMenu");
seeMenuButton.addEventListener('click', function(){
    console.log('click');
  MobileMenu.classList.remove('hidden'); 
}
)