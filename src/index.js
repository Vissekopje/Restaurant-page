import './style.css';
import {home, apple} from './home'
console.log("Perfect")

const homeButton = document.querySelector(".tab-home")
const menu = document.querySelector(".tab-menu")
const contact = document.querySelector(".tab-contact")
apple()
apple()
 function removeContent(){
  const content = document.getElementById("content")
 while (content.firstChild){
   content.removeChild(content.lastChild)
  }
 }


homeButton.addEventListener('click', () => {
  removeContent()
  home()
  apple()
})

menu.addEventListener('click', () => {
  removeContent()
 
})


contact.addEventListener('click', () => {
  removeContent()
})

