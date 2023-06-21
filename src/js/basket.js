import {basketArea} from "./header.js";
import {calculateDiscountedPrice} from './cards.js'

const basketItems = JSON.parse(localStorage.getItem('basketItems')) || [];

export const addToBasket = ({ name, price, image, discount, id }) => {
    const discountedPrice = calculateDiscountedPrice(price, discount);
    const newItem = { name, price: discountedPrice, image, discount, id };
    basketItems.push(newItem);
    localStorage.setItem('basketItems', JSON.stringify(basketItems));
    updateBasketCount();
};

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
const showBasketModal = () => {
    const modalWrapper2 = document.createElement('div');
    modalWrapper2.classList.add('modal-wrapper');

    const modalContent = document.createElement('div');
    modalContent.classList.add('modal-content');

    const basketTitle = document.createElement('h2');
    basketTitle.innerText = 'Cart';

    const closeBtn = document.createElement('span');
    closeBtn.classList.add('close-btn');
    closeBtn.innerHTML = '&times;';
    closeBtn.addEventListener('click', () => {
        modalWrapper2.remove();
    });

    const clearBasketBtn = document.createElement('button');
    clearBasketBtn.innerText = 'Clear Cart';

    clearBasketBtn.addEventListener('click', () => {
        localStorage.removeItem('basketItems');
        modalWrapper2.remove();
        updateBasketCount();
    });

    const itemsList = document.createElement('ul');
    itemsList.classList.add('basket-items-list');

    let totalCost = 0;

    const proceedToPaymentBtn = document.createElement('button');
    proceedToPaymentBtn.innerText = 'Proceed to payment';

    if (basketItems.length === 0) {
        const emptyBasketText = document.createElement('p');
        emptyBasketText.innerText = 'Your cart is empty';
        proceedToPaymentBtn.style.display = 'none';
        clearBasketBtn.style.display = 'none';

        modalContent.append(basketTitle, closeBtn, clearBasketBtn, emptyBasketText);
    } else {
        basketItems.forEach((item) => {
            const listItem = document.createElement('li');
            listItem.classList.add('basket-item');

            const itemName = document.createElement('span');
            itemName.innerText = item.name;

            const itemPrice = document.createElement('span');
            itemPrice.innerText = `${item.price} €`;

            const deleteButton = document.createElement('button');
            deleteButton.innerText = 'Delete';

            deleteButton.addEventListener('click', () => {
                const itemIndex = basketItems.findIndex((item) => item.id === item.id);
                if (itemIndex > -1) {
                    basketItems.splice(itemIndex, 1);
                    localStorage.setItem('basketItems', JSON.stringify(basketItems));
                    listItem.remove();
                    // updateBasketCount();

                    totalCost -= parseFloat(item.price);
                    totalPrice.innerText = `Total Sum: ${totalCost.toFixed(2)} €`;

                    if (basketItems.length === 0) {
                        modalContent.innerHTML = '';
                        const emptyBasketText = document.createElement('p');
                        emptyBasketText.innerText = 'Your cart is empty';
                        proceedToPaymentBtn.style.display = 'none';
                        clearBasketBtn.style.display = 'none';

                        modalContent.append(basketTitle, closeBtn, emptyBasketText);
                    }
                }
                updateBasketCount();
            });

            listItem.append(itemName, itemPrice, deleteButton);
            itemsList.append(listItem);

            totalCost += parseFloat(item.price);
        });

        const totalPrice = document.createElement('div');
        totalPrice.classList.add('total-price');
        totalPrice.innerText = `Total Sum: ${totalCost.toFixed(2)} €`;

        modalContent.append(basketTitle, closeBtn, clearBasketBtn, itemsList, totalPrice, proceedToPaymentBtn);
    }

    modalWrapper2.appendChild(modalContent);
    document.body.appendChild(modalWrapper2);

    clearBasketBtn.addEventListener('click', () => {
        basketItems.length = 0;
        localStorage.removeItem('basketItems');
        updateBasketCount();
        showBasketModal();
    });

    proceedToPaymentBtn.addEventListener('click', () => {
        alert('You will be forwarded to another window');
    });
};

basketArea.addEventListener('click', () => {
    showBasketModal();
});

window.addEventListener('load', () => {
    updateBasketCount();
});