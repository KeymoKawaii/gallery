const pictures = document.querySelectorAll('picture_container');
let main_grid = document.getElementById('main_grid');

// console.log(pictures)
// for (const picture of pictures) {
//     let img = this.getElementsByTagName('img');
//     console.log(img);
//     picture.addEventListener('click', displayPopup);
//   }

// function displayPopup(){
//     console.log('Hello');
// }

// displayPopup();

let filter = document.getElementById('filter');
const filter_btns = filter.querySelectorAll('input');
for (const filter_btn of filter_btns) {
  filter_btn.addEventListener('click', changeFilter);
}

function changeFilter(){
  let filter_btn_value = this.value;
  main_grid.className = "";
  main_grid.classList.add(filter_btn_value);
}

let anim = document.getElementById('animation');
const anim_btns = anim.querySelectorAll('input');
for (const anim_btn of anim_btns) {
  anim_btn.addEventListener('click', changeAnim);
}

function changeAnim(){
  let anim_btn_value = this.value;
  main_grid.className = "";
  main_grid.classList.add(anim_btn_value);
}