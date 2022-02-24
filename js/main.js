// const navEl = document.querySelector(".builcon_menu_bar");
// const navEl2 = document.querySelector(".mobile-nav");


// function mother(){
//   navEl.addEventListener('click',function () {
//     navEl2.classList.add('active')
//   })
// }

const navEl = document.querySelector('.mobile-nav')
const navBtn = document.querySelector('.builcon_menu_bar')
let activeExistence = false;
navBtn.addEventListener('click',function(){
  activeExistence = !activeExistence
  if(activeExistence){
    navEl.classList.add('active');
  }else{
    navEl.classList.remove('active');
  }

})





