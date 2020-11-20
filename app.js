const pictures = document.querySelectorAll('picture_container');

console.log(pictures)
for (const picture of pictures) {
    let img = this.getElementsByTagName('img');
    console.log(img);
    picture.addEventListener('click', displayPopup);
  }

function displayPopup(){
    console.log('Hello');
}

displayPopup();