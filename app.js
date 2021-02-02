import { getCart, setCart } from './cart/cart-utils.js';

// import functions and grab DOM elements
// const submitButton = document.getElementById('submit-button');
const form = document.getElementById('input-form');
// initialize state

// set event listeners to update state and DOM

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    const user = {
        name: formData.get('name'),
        age: formData.get('age'),
        email: formData.get('email')
    };

    getCart();

    setCart(user);

    location.href = './main-page/index.html';

});