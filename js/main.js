
const navEl = document.querySelector('.mobile-nav');
const navBtn = document.querySelector('.builcon_menu_bar');
let activeExistence = false;
navBtn.addEventListener('click', function() {
  if(activeExistence){
    navEl.classList.remove('active');
    navBtn.classList.remove('active');
  }else{
    navEl.classList.add('active');
    navBtn.classList.add('active');
  }

  activeExistence = !activeExistence;
})