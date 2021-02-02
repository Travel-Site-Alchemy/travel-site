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


    // const formData = new FormData(regionForm);
    // console.log(formData);
    // const regionId = formData.get(userSelection);

    for (let place of places) {
        const userSelection = regionInput.value;
        // const regionChoice = findById(place, userSelection);

        console.log(userSelection);
        console.log(regionChoice);
    }




});




// for (let place of places) {

// }


// if (places.region === 'south') {

// }