import { getCart, findById } from './cart-utils.js';
import places from '../data.js';


// Get item from localStorage
const cart = getCart();
const placesButton = document.querySelector('button');
const cartMessage = document.querySelector('div');
cartMessage.textContent = `Hello ${cart.name}, here are your places to visit.`;


const wantedLocation = cart.wantList;
for (let wanted of wantedLocation) {
    const location = findById(places, wanted);
    console.log(location);

    const table = document.querySelector('table');
    table.classList.add('my-places-table');

    const tr = document.createElement('tr');
    tr.classList.add('my-places-tr');

    const a = document.createElement('a');
    a.classList.add('my-places-anchor');
    a.href = `../town-folder/?id=${location.id}`;

    const nameTd = document.createElement('td');
    nameTd.classList.add('my-places-nameTd');
    nameTd.textContent = location.town;

    const linkTd = document.createElement('td');
    linkTd.classList.add('my-places-linkTd');


    a.append(nameTd);
    table.append(tr);
    tr.append(a, linkTd);
}

// placesButton.addEventListener('click', () => {
//     localStorage.removeItem('CART');
//     window.location = '../main-page/index.html';
// });

// Render locations to page


