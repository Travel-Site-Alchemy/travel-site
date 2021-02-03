import { getCart, findById } from './cart-utils.js';
import places from '../data.js';


// Get item from localStorage
const cart = getCart();


const wantedLocation = cart.wantList[0];
// Render locations to page
const locationDetails = findById(places, wantedLocation);
console.log(wantedLocation);
const tr = document.createElement('tr');
const cartMessage = document.createElement('th');
const nameTd = document.createElement('td');
const linkTd = document.createElement('td');

cartMessage.textContent = `Hello ${cart.name}, here are your places to visit.`;