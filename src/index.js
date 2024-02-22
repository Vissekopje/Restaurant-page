import './style.css';
import {home, apple} from './home'
import {menu} from './menu'
console.log("Perfect")

const homeButton = document.querySelector(".tab-home")
const menuButton = document.querySelector(".tab-menu")
const contact = document.querySelector(".tab-contact")

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

menuButton.addEventListener('click', () => {
  removeContent()
  menu()
})


contact.addEventListener('click', () => {
  removeContent()
})

