const CART = 'CART';
const defaultCart = [];

export function findById(someArray, id) {
    for (let item of someArray) {
        if (item.regionId === id) {
            return item;
        }
    }
}

export function getCart() {
    const stringyCart = localStorage.getItem(CART);
    if (stringyCart) {
        const parsedCart = JSON.parse(stringyCart);
        return parsedCart;
    }
    else {
        const stringyDefaultCart = JSON.stringify(defaultCart);
        localStorage.setItem('CART', stringyDefaultCart);
        return defaultCart;
    }
}

export function setCart(BOOGER) {
    const stringyCart = JSON.stringify(BOOGER);
    localStorage.setItem('CART', stringyCart);
}

export function addToCart(id) {
    const cart = getCart();
    const cartItem = findById(cart, id);
    if (cartItem) {
        const newItem = {
            id: id,

        };
        cart.push(newItem);
    }
    setCart(cart);
}
