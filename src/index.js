import './style.css';
import {home} from './home'
import {menu} from './menu'
import {contact} from './contact'
console.log("Perfect")

const homeButton = document.querySelector(".tab-home")
const menuButton = document.querySelector(".tab-menu")
const contactButton = document.querySelector(".tab-contact")

 function removeContent(){
  const content = document.getElementById("content")
 while (content.firstChild){
   content.removeChild(content.lastChild)
  }
 }

 
homeButton.addEventListener('click', () => {
  removeContent()
  home()
})

menuButton.addEventListener('click', () => {
  removeContent()
  menu()
})


contactButton.addEventListener('click', () => {
  removeContent()
  contact()
})

home()