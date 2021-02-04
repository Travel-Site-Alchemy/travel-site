import places from '../data.js';

const regionList = document.querySelector('ul');

const params = new URLSearchParams(window.location.search);
const regionId = params.get('id');

const regionArea = places.filter(place => place.regionId === regionId);


for (let region of regionArea) {

    const placeItem = document.createElement('li');

    const placeTag = document.createElement('li');
    placeTag.classList.add('place-tag');
    placeTag.textContent = region.tagline;

    const placePhoto = document.createElement('img');
    placePhoto.src = `../assets/${region.img}`;
    placePhoto.classList.add('region-photo');

    const a = document.createElement('a');
    a.textContent = region.town;
    a.href = `../town-folder/?id=${region.id}`;

    placeItem.append(placePhoto, placeTag);
    regionList.append(a, placeItem);
} 