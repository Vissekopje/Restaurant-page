function contact(){
      class Day{
         constructor(name, hours) {
            this.name = name;
            this.description = hours;
        }
      }
      const openingDays = [
         new Day(
            "Monday",
            "17:00-22:00",
         ),
        new Day(
         "Tuesday",
         "17:00-22:00",
         ),
         new Day(
            "Wednesday",
            "11:00-22:00",
         ),
        new Day(
         "Thursday",
         "11:00-22:00",
         ),
         new Day(
            "Friday",
            "11:00-23:00",
         ),
        new Day(
         "Saturday",
         "10:00-22:00",
         ),
         new Day(
            "Sunday",
            "Closed",
         )   
         ]
   
 
      const openingcontainer = document.createElement('div');
       openingcontainer.innerHTML = "Opening Hours"
       openingcontainer.classList.add('openingcontainer');
  
      openingDays.forEach(day => {
          const dayOpening = document.createElement('div');
          dayOpening.classList.add("dayopening");
  
          const dayName = document.createElement('div');
          dayName.classList.add("dayname")
          dayName.textContent = `${day.name}`
  
          const dayHours = document.createElement('div');
          dayHours.classList.add("dayhours")
          dayHours.textContent = `${day.description}`

          dayOpening.appendChild(dayName);
          dayOpening.appendChild(dayHours)

          openingcontainer.appendChild(dayOpening)
  
      })
  

   function contactInfo(){
      const contactContainer = document.createElement('div')
      contactContainer.innerHTML = "Contact"
      contactContainer.classList.add('contact')

       const adress = document.createElement('div')
       adress.innerHTML = '123 Green Street, London E7 8JF'
       adress.classList.add('adress')

       const number = document.createElement('div')
       number.innerHTML = '+44 20 1234 5678'
       number.classList.add('number')

       const email = document.createElement('div')
       email.innerHTML = 'example@email.co.uk'
       email.classList.add('email')

       contactContainer.appendChild(adress)
       contactContainer.appendChild(number)
       contactContainer.appendChild(email)

       return contactContainer
   }

   const content = document.getElementById("content")
   const contentContainer = document.createElement('div');
   contentContainer.classList.add('contactcontainer');

   contentContainer.appendChild(contactInfo());
   contentContainer.appendChild(openingcontainer);
   content.appendChild(contentContainer)

}
export{
   contact
}
