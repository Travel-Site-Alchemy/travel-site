import { findById } from '../cart/cart-utils.js';
import places from '../data.js';

const regionList = document.querySelector('ul');

const params = new URLSearchParams(window.location.search);
const regionId = params.get('id');



const regionArea = places.filter(place => place.regionId === regionId);

console.log(regionArea);


for (let region of regionArea) {


    const placeItem = document.createElement('li');

    const placePhoto = document.createElement('img');
    const placeTitle = document.createElement('h3');
    placeTitle.textContent = region.town;



    placeItem.append(placePhoto, placeTitle);
    regionList.append(placeItem);


}; 