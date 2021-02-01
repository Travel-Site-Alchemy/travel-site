const CART = 'CART';
const defaultCart = [];

export function findById(someArray, id) {
    for (let item of someArray) {
        if (item.id === id) {
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
        localStorage.setItem(CART, stringyDefaultCart);
        return defaultCart;
    }
}

export function setCart(CART) {
    const stringyCart = JSON.stringify(CART);
    localStorage.setItem(CART, stringyCart);
}

export
