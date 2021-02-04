
import places from '../data.js';

const regionList = document.querySelector('ul');

const params = new URLSearchParams(window.location.search);
const regionId = params.get('id');

const regionArea = places.filter(place => place.regionId === regionId);


for (let region of regionArea) {

    const placeItem = document.createElement('li');
    const a = document.createElement('a');
    const placePhoto = document.createElement('img');
    const placeTitle = document.createElement('h3');
    a.textContent = region.town;
    a.href = `../town-folder/?id=${region.id}`;


    placeItem.append(placePhoto, placeTitle);
    regionList.append(placeItem, a);

} 