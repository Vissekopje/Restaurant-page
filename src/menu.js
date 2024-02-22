
class Item {
    constructor(name, description, price, type) {
        this.name = name;
        this.description = description;
        this.price = price;
        this.type = type;
    }
}

const menuItems = [
    new Item(
        "Green Curry Bites",
        "Vegan chicken with green chili, cilantro, and spices",
        "10.50€",
        "starter"
    ),
    new Item(
        "Stuffed Mushrooms",
        "Portobello mushrooms filled with herbed quinoa and roasted vegetables",
        "9.00€",
        "starter"
    ),
    new Item(
        "Avocado Spring Rolls",
        "Fresh avocado, mixed vegetables, and rice noodles wrapped in rice paper served with peanut sauce",
        "8.50€",
        "starter"
    ),
    new Item(
        "Sweet Potato Fritters",
        "Crispy sweet potato and black bean fritters served with chipotle aioli",
        "11.00€",
        "starter"
    ), 

    new Item(
        "Mushroom Risotto",
        "Creamy risotto made with wild mushrooms, arborio rice, and vegetable broth",
        "14.00€",
        "main course"
    ),
    new Item(
        "Vegan Pad Thai",
        "Stir-fried rice noodles with tofu, bean sprouts, peanuts, and tangy tamarind sauce",
        "15.50€",
        "main course"
    ),
    new Item(
        "Chickpea Tagine",
        "Moroccan-inspired stew with chickpeas, apricots, and aromatic spices served over couscous",
        "16.50€",
        "main course"
    ),
    new Item(
        "Eggplant Parmesan",
        "Breaded eggplant slices topped with marinara sauce and vegan cheese served with spaghetti",
        "17.00€",
        "main course"
    ),

    new Item(
        "Chocolate Avocado Mousse",
        "Rich and creamy chocolate mousse made with ripe avocados and sweetened with maple syrup",
        "8.00€",
        "dessert"
    ),
    new Item(
        "Coconut Mango Sorbet",
        "Refreshing sorbet made with ripe mangoes and coconut milk",
        "7.50€",
        "dessert"
    ),
    new Item(
        "Berry Chia Pudding",
        "Chia seed pudding layered with mixed berries and topped with toasted coconut flakes",
        "9.50€",
        "dessert"
    ),
    new Item(
        "Apple Crisp",
        "Warm apple slices baked with cinnamon and oats, served with a scoop of vanilla cashew cream",
        "10.00€",
        "dessert"
    )
];


function menu(){ 
    const contentContainer = document.createElement('div');
    contentContainer.classList.add('container');

    const starterContainer = document.createElement('div');
    starterContainer.classList.add('starter');

    const mainsContainer = document.createElement('div');
    mainsContainer.classList.add('mains');

    const dessertContainer = document.createElement('div');
    dessertContainer.classList.add('desserts');

    contentContainer.appendChild(starterContainer);
    contentContainer.appendChild(mainsContainer);
    contentContainer.appendChild(dessertContainer);

    menuItems.forEach(item => {
        const menuItem = document.createElement('div');
        menuItem.classList.add("menuitem");

        const itemName = document.createElement('div');
        itemName.classList.add("itemName")
        itemName.textContent = `${item.name}`

        const itemDescription = document.createElement('div');
        itemDescription.classList.add("itemdescription")
        itemDescription.textContent = `${item.description}`

        const itemPrice = document.createElement('div');
        itemPrice.classList.add("itemprice")
        itemPrice.textContent = `${item.price}`


        menuItem.appendChild(itemName);
        menuItem.appendChild(itemDescription)
        menuItem.appendChild(itemPrice)

        if(item.type === "starter"){
            starterContainer.appendChild(menuItem)
        }
        else if(item.type=== "main course"){
            mainsContainer.appendChild(menuItem)
        }
        else if(item.type === "dessert"){
            dessertContainer.appendChild(menuItem)
        }
     
    }
    );

    const content = document.getElementById("content")
    content.appendChild(contentContainer)

}
    export{
        menu
    }
    
    