function home(){
    const content = document.getElementById("content")

    function logo(){
        const logo = document.createElement('img')
        logo.src = '../dist/0f1a3458a0ca6fbf22c7.svg'
        logo.classList.add('logo')
        return logo
    }
    function introduction() {
        const element = document.createElement('div');
        element.innerHTML = "Welcome to Vegan Valhalla – a plant-based paradise in London. Indulge in our compassionate cuisine crafted with fresh, locally-sourced ingredients. From savory classics to innovative dishes, each bite nourishes body and soul. Join us and discover a world where food is art and compassion reigns supreme."
        element.classList.add('introduction');

        return  element;
    }

    function introductionMessage(){
        const introMessage = document.createElement('div')
        introMessage.innerHTML = `"Chef Jameson's Vegan Valhalla is a culinary oasis in London, where compassion and flavor unite. With locally-sourced ingredients, each dish is a masterpiece, showcasing the artistry of plant-based cuisine. Whether you're a vegan enthusiast or a curious diner, this is a must-visit for a taste of ethical excellence."` + `    --Vegan Daily`
        introMessage.classList.add('main-message')
        return introMessage
    }
    const contentContainer = document.createElement('div');
    contentContainer.classList.add('container');

    const quoteContainer = document.createElement('div')
    quoteContainer.classList.add('quotecontainer')
    quoteContainer.appendChild(introductionMessage());
    
    contentContainer.appendChild(logo());
    contentContainer.appendChild(introduction());
    contentContainer.appendChild(quoteContainer)
    content.appendChild(contentContainer)
}

export{
    home
}

