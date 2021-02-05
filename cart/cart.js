import { getCart, findById } from './cart-utils.js';
import places from '../data.js';

const cart = getCart();

const cartMessage = document.querySelector('div');
cartMessage.textContent = `Hello ${cart.name}, here are your places to visit:`;


const wantedLocation = cart.wantList;
for (let wanted of wantedLocation) {
    const location = findById(places, wanted);

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

    const imageTd = document.createElement('td');
    imageTd.classList.add('my-places-image-td');


    const myTownImage = document.createElement('img');
    myTownImage.classList.add('my-places-image');
    myTownImage.src = `../assets/${location.img}`;


    a.href = `../town-folder/?id=${location.id}`;

    const linkTd = document.createElement('td');
    linkTd.classList.add('my-places-linkTd');


    imageTd.append(myTownImage);
    a.append(nameTd, imageTd);
    table.append(tr);
    tr.append(a, linkTd);
}


const returnButton = document.querySelector('button');
returnButton.classList.add('return-button');
returnButton.addEventListener('click', () => {
    localStorage.clear();
    window.location = '../index.html';
});



