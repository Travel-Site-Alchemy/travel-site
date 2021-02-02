import { findById } from '../cart/cart-utils.js';
import places from '../data.js';





const params = new URLSearchParams(window.location.search);
const regionId = params.get('id');
const userRegionChoice = findById(places, regionId);

console.log(regionId);
console.log(userRegionChoice);