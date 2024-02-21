console.log("Perfect")

import './style.css';

 function component() {
   const element = document.createElement('div');
    element.innerHTML = "Nana kom on"
  element.classList.add('hello');

   return element;
 }

 document.body.appendChild(component());