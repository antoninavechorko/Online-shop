import {basketArea} from "./header.js";
import {calculateDiscountedPrice} from './cards.js'

const basketItems = JSON.parse(localStorage.getItem('basketItems')) || [];

const updateBasketCount = () => {
    const countItems = document.getElementById('count-items');
    const length = basketItems.length;
    countItems.innerText = `${length}`;

    if (length === 0) {
        countItems.style.display = 'none';
    } else {
        countItems.style.display = 'inline-block';
    }
};

export const addToBasket = ({ name, price, image, discount, id }) => {
    const discountedPrice = calculateDiscountedPrice(price, discount);
    const newItem = { name, price: discountedPrice, image, discount, id };
    basketItems.push(newItem);
    localStorage.setItem('basketItems', JSON.stringify(basketItems));
    updateBasketCount();
};

const showBasketModal = () => {
    const basketModalWrapper = document.createElement('div');
    basketModalWrapper.classList.add('basket-modal-wrapper');

    const basketModalContent = document.createElement('div');
    basketModalContent.classList.add('basket-modal-content');

    const basketTitle = document.createElement('h2');
    basketTitle.innerText = 'Cart';

    const basketCloseBtn = document.createElement('span');
    basketCloseBtn.classList.add('close-btn');
    basketCloseBtn.innerHTML = '&times;';

    const basketClearBtn = document.createElement('button');
    basketClearBtn.innerText = 'Clear Cart';

    const basketItemsList = document.createElement('ul');
    basketItemsList.classList.add('basket-items-list');

    const proceedToPaymentBtn = document.createElement('button');
    proceedToPaymentBtn.innerText = 'Proceed to payment';

    let totalCost = 0;

    const totalPrice = document.createElement('div');
    totalPrice.classList.add('total-price');

    if (basketItems.length === 0) {
        createEmptyBasketContent(basketModalContent, basketTitle, basketCloseBtn);
    }

    basketItems.forEach((item) => {
        const listItem = document.createElement('li');
        listItem.classList.add('basket-item');

        const itemName = document.createElement('span');
        itemName.innerText = item.name;

        const itemPrice = document.createElement('span');
        itemPrice.innerText = `${item.price} €`;

        const deleteButton = document.createElement('button');
        deleteButton.innerText = 'Delete';

        listItem.append(itemName, itemPrice, deleteButton);
        basketItemsList.append(listItem);

        totalCost += parseFloat(item.price);

        deleteButton.addEventListener('click', () => {
            const itemIndex = basketItems.findIndex((deleteItem) => deleteItem.id === item.id);
            if (itemIndex > -1) {
                basketItems.splice(itemIndex, 1);
                localStorage.setItem('basketItems', JSON.stringify(basketItems));
                listItem.remove();

                totalCost -= parseFloat(item.price);
                totalPrice.innerText = `Total Sum: ${totalCost.toFixed(2)} €`;
            }

            if (basketItems.length === 0) {
                createEmptyBasketContent(basketModalContent, basketTitle, basketCloseBtn);
            }

            updateBasketCount();
        });
    });

    totalPrice.innerText = `Total Sum: ${totalCost.toFixed(2)} €`;
    basketModalContent.append(basketTitle, basketCloseBtn, basketClearBtn, basketItemsList, totalPrice, proceedToPaymentBtn);
    basketModalWrapper.append(basketModalContent);
    document.body.append(basketModalWrapper);

    basketCloseBtn.addEventListener('click', () => {
        basketModalWrapper.remove();
    });

    basketClearBtn.addEventListener('click', () => {
        basketItems.length = 0;
        localStorage.removeItem('basketItems');
        updateBasketCount();
        createEmptyBasketContent(basketModalContent, basketTitle, basketCloseBtn);
    });

    proceedToPaymentBtn.addEventListener('click', () => {
        alert('You will be forwarded to another window');
    });
};

const createEmptyBasketContent = (basketModalContent, basketTitle, basketCloseBtn) => {
    basketModalContent.innerHTML = '';

    const emptyBasketText = document.createElement('p');
    emptyBasketText.innerText = 'Your cart is empty';
    basketModalContent.append(basketTitle, emptyBasketText, basketCloseBtn);
};

basketArea.addEventListener('click', () => {
    showBasketModal();
})

window.addEventListener('load', () => {
    updateBasketCount();
})