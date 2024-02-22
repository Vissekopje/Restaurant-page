function apple(){

console.log("apple-juice")
}
function home(){
    const content = document.getElementById("content")
    function introduction() {
        const element = document.createElement('div');
        element.innerHTML = "Welcome to Vegan Valhalla – a plant-based paradise in London. Indulge in our compassionate cuisine crafted with fresh, locally-sourced ingredients. From savory classics to innovative dishes, each bite nourishes body and soul. Join us and discover a world where food is art and compassion reigns supreme."
        element.classList.add('introduction');

        return  element;
    }

    function introductionMessage(){
        const introMessage = document.createElement('div')
        introMessage.innerHTML = 'Savor plant-powered perfection at Vegan Valhalla, where every bite fuels our mission for compassionate dining.'
        introMessage.classList.add('main-message')

        return introMessage
    }
    const contentContainer = document.createElement('div');
    contentContainer.classList.add('container');
    contentContainer.appendChild(introductionMessage());
    contentContainer.appendChild(introduction());
    content.appendChild(contentContainer)
}

export{
    home,
    apple
}

