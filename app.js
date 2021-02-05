import { getCart, setCart } from './cart/cart-utils.js';

const form = document.getElementById('input-form');


form.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    const user = {
        name: formData.get('name'),
        age: formData.get('age'),
        email: formData.get('email'),
        wantList: [],
    };

    getCart();

    setCart(user);

    location.href = './main-page/index.html';

});