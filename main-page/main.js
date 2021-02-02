import { getCart } from '../cart/cart-utils.js';
import places from '../data.js';
const regionDiv = document.getElementById('region-div');


const regionDisplay = document.querySelector('ul');

const cartData = getCart();
regionDiv.textContent = `Welcome ${cartData.name}, please select a region`;






for (let place of places) {

}


// if (places.region === 'south') {

// }