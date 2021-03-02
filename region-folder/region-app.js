import places from '../data.js';

const regionList = document.querySelector('ul');

const params = new URLSearchParams(window.location.search);
const regionId = params.get('id');

// nice filter function!
const regionArea = places.filter(place => place.regionId === regionId);


for (let region of regionArea) {

    // would have liked to see this DOM work refactored into a tested redner function
    const placeItem = document.createElement('li');

    const placeTag = document.createElement('li');
    placeTag.classList.add('place-tag');
    placeTag.textContent = region.tagline;

    const placeTitle = document.createElement('li');
    placeTitle.textContent = region.town;
    placeTitle.classList.add('place-title');

    const placePhoto = document.createElement('img');
    placePhoto.src = `../assets/${region.img}`;
    placePhoto.classList.add('region-photo');

    const a = document.createElement('a');
    a.classList.add('place-thumbnail');
    a.href = `../town-folder/?id=${region.id}`;


    placeItem.append(placeTitle, placePhoto, placeTag);
    regionList.append(a);
    a.append(placeItem);
} 