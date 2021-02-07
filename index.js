'use strict';

const openedArrow=(event, i)=>{
  event.target.classList.toggle('opened');
}
const arrowElm = document.querySelectorAll('.arrow');
for (let i =0;i<arrowElm.length; i++){
  arrowElm[i].addEventListener('click', openedArrow)
}
