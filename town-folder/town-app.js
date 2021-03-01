import places from '../data.js';
import { findById, setCart, getCart } from '../cart/cart-utils.js';

const townList = document.querySelector('div');


const params = new URLSearchParams(window.location.search);
const townId = params.get('id');
const addButton = document.createElement('button');
addButton.textContent = 'Add To Wishlist';

const actualTown = findById(places, townId);
const townPhoto = document.createElement('img');
const townTitle = document.createElement('h3');
const townDescription = document.createElement('p');
const townStats = document.createElement('ul');
const li1 = document.createElement('li');
const li2 = document.createElement('li');
const li3 = document.createElement('li');

// might have been nice to move this work into a separate function, just to keep this main file tidy
townTitle.textContent = actualTown.town;
townDescription.textContent = actualTown.description;
li1.textContent = `Population: ${actualTown.population}`;
li2.textContent = `State: ${actualTown.state}`;
li3.textContent = `Attractions: ${actualTown.attractions}`;
townPhoto.src = `../assets/${actualTown.img}`;


townTitle.classList.add('town-title');
townPhoto.classList.add('town-photo');
townStats.classList.add('town-stats');
townDescription.classList.add('town-description');
addButton.classList.add('add-button');


townStats.append(li1, li2, li3);
townList.append(townTitle, townPhoto, townStats, townDescription, addButton);

addButton.addEventListener('click', () => {
    const cartData = getCart();
    cartData.wantList.push(actualTown.id);

    setCart(cartData);

    addButton.disabled = true;
    addButton.textContent = 'Added!';

    const hiddenButton = document.createElement('button');
    hiddenButton.classList.add('hidden-button');
    hiddenButton.textContent = 'My Places';
    townList.append(hiddenButton);

    hiddenButton.addEventListener('click', () => {
        window.location = '../cart/index.html';
    });

});
