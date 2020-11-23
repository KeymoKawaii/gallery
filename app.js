const pictures = document.querySelectorAll('picture_container');
let main_grid = document.getElementById('main_grid');


let filter_btn_value_filter  = 'Grayscale';;
let filter_btn_value_anim  = 'Zoom';;!

main_grid.classList.add(filter_btn_value_filter);
main_grid.classList.add(filter_btn_value_anim);

let filter = document.getElementById('filter');
const filter_btns = filter.querySelectorAll('input');
for (const filter_btn of filter_btns) {
  filter_btn.addEventListener('click', changeFilter);
}

let anim = document.getElementById('animation');
const anim_btns = anim.querySelectorAll('input');
for (const anim_btn of anim_btns) {
  anim_btn.addEventListener('click', changeAnim);
}

function changeFilter(){
  main_grid.classList.remove(filter_btn_value_filter);
  if(filter_btn_value_filter === this.value){
    filter_btn_value_filter = 'undefined';
  }else{
    filter_btn_value_filter = this.value;
    main_grid.classList.add(filter_btn_value_filter);
  }
  return filter_btn_value_filter;
}

function changeAnim(){
  main_grid.classList.remove(filter_btn_value_anim);
  if(filter_btn_value_anim === this.value){
    filter_btn_value_anim = 'undefined';
  }else{
    filter_btn_value_anim = this.value;
    main_grid.classList.add(filter_btn_value_anim);
  }
  return filter_btn_value_anim;
}