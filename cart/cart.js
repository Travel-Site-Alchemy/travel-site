import { getCart, findById } from './cart-utils.js';
import places from '../data.js';

const cart = getCart();

const cartMessage = document.querySelector('div');
cartMessage.textContent = `Hello ${cart.name}, here are your places to visit.`;


const wantedLocation = cart.wantList;
for (let wanted of wantedLocation) {
    const location = findById(places, wanted);

    const table = document.querySelector('table');
    const tr = document.createElement('tr');
    const a = document.createElement('a');
    const nameTd = document.createElement('td');
    const linkTd = document.createElement('td');
    nameTd.textContent = location.town;

    const removeTown = document.createElement('td');
    removeTown.textContent = 'remove';



    a.href = `../town-folder/?id=${location.id}`;
    a.append(nameTd);
    table.append(tr);
    tr.append(a, linkTd, removeTown);
}

const returnButton = document.querySelector('button');
returnButton.addEventListener('click', () => {
    localStorage.clear();
    window.location = '../index.html';
});
