import { getCart } from '../cart/cart-utils.js';

const regionDiv = document.getElementById('region-div');

const cartData = getCart();
regionDiv.textContent = `Welcome ${cartData.name}, find your destination by region.`;

const regionForm = document.querySelector('#region-form');

regionForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const userClickChoice = document.querySelector('input:checked');
    const userRegion = userClickChoice.value;

    window.location = `../region-folder/?id=${userRegion}`;

});
