import { getCart, findById } from './cart-utils.js';
import places from '../data.js';


// Get item from localStorage
const cart = getCart();

const cartMessage = document.querySelector('div');
cartMessage.textContent = `Hello ${cart.name}, here are your places to visit.`;


const wantedLocation = cart.wantList;
for (let wanted of wantedLocation) {
    const location = findById(places, wanted);
    console.log(location);

    const table = document.querySelector('table');
    const tr = document.createElement('tr');
    const a = document.createElement('a');
    const nameTd = document.createElement('td');
    const linkTd = document.createElement('td');
    nameTd.textContent = location.town;

    a.href = `../town-folder/?id=${location.id}`;
    a.append(nameTd);
    table.append(tr);
    tr.append(a, linkTd);
}


// Render locations to page


