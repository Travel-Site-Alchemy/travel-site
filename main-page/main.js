import { getCart, findById } from '../cart/cart-utils.js';
import places from '../data.js';
const regionDiv = document.getElementById('region-div');


const regionDisplay = document.querySelector('ul');

const cartData = getCart();
regionDiv.textContent = `Welcome ${cartData.name}, please select a region`;

const regionForm = document.querySelector('#region-form');
const regionInput = document.querySelector('input');

regionForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const userClickChoice = document.querySelector('input:checked');
    const userRegion = userClickChoice.value;

    window.location = `../region-folder/?id=${userRegion}`;

});


//?id=
// need eventhandler to show all the towns in the region to show up



