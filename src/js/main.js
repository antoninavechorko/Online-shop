import { searchInput } from './header.js';
import { basketArea } from './header.js';
import { accountArea } from './header.js';

const mainWrapper = document.getElementById('main');

const cardsURL = 'https://648ecbd875a96b66444447c2.mockapi.io/cards';

const cardsBlock = document.getElementById('cards');
mainWrapper.append(cardsBlock);

const getCards = () => {
    return new Promise((resolve, reject) => {
        fetch(cardsURL)
            .then((response) => {
                if (response.ok) {
                    resolve(response.json());
                }
                reject(new Error('Some Error'));
            })
            .catch((error) => {
                reject(error);
            });
    });
};

const shuffleArray = (array) => {
    const newArray = array.slice();
    for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
};
const renderCards = (cardsData) => {
    const shuffledCards = shuffleArray(cardsData);

    shuffledCards.forEach((card) => {
        createCards(card);
    });
};

const createCards = ({ name, price, image, discount, id }) => {
    const cardItem = document.createElement('div');
    cardItem.classList.add('cards-item');
    cardItem.setAttribute('id', id);

    const cardImageArea = document.createElement('div');
    cardImageArea.classList.add('cardImageArea');

    const cardImage = document.createElement('img');
    cardImage.classList.add('card-image');
    cardImage.setAttribute('src', image);

    const discountSpan = document.createElement('span');
    discountSpan.innerText = `${discount}%`;

    const quickViewBtn = document.createElement('button');
    quickViewBtn.innerText = 'Quick View';

    const addToBasketBtn = document.createElement('button');
    const basketSvg = document.createElement('img');
    basketSvg.setAttribute('src', './style/assets/img/basket.svg');
    const basketSpan = document.createElement('span');
    basketSpan.classList.add('count_items');
    basketSpan.setAttribute('id', 'count_items');

    const cardDetailsArea = document.createElement('div');
    cardDetailsArea.classList.add('cardDetailsArea');

    const priceDiscounted = document.createElement('span');
    priceDiscounted.innerText = calculateDiscountedPrice(price, discount) + '€';

    const priceNormal = document.createElement('span');
    priceNormal.innerText = `${price} €`;

    const cardProductName = document.createElement('h4');
    cardProductName.innerText = name;

    addToBasketBtn.append(basketSvg, basketSpan);
    cardImageArea.append(cardImage, discountSpan, quickViewBtn, addToBasketBtn);
    cardDetailsArea.append(priceDiscounted, priceNormal, cardProductName);
    cardItem.append(cardImageArea, cardDetailsArea);
    cardsBlock.append(cardItem);

    quickViewBtn.addEventListener('click', () => {
        showQuickView({ name, price, image, discount });
    });

    addToBasketBtn.addEventListener('click', () => {
        addToBasket({ name, price, image, discount, id });
        showNotification('Item added to the basket');
    });
};


getCards()
    .then((cards) => {
        renderCards(cards);
    })
    .catch((error) => {
        console.error(error);
    });

const calculateDiscountedPrice = (price, discount) => {
    let discountedPrice = (price - (price * (discount / 100))).toFixed(2);
    return Number(discountedPrice);
};

const handleSearch = (event) => {
    const searchQuery = event.target.value.toLowerCase();
    const cards = Array.from(cardsBlock.querySelectorAll('.cards-item'));
    cards.forEach((card) => {
        const name = card.querySelector('h4').innerText.toLowerCase();
        if (name.includes(searchQuery)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });

    if (searchQuery === '') {
        searchInput.value = '';
    }
};

searchInput.addEventListener('input', handleSearch);

const showLoginModal = () => {
    const modalWrapper3 = document.createElement('div');
    modalWrapper3.classList.add('modal-wrapper3');

    const modalContent3 = document.createElement('div');
    modalContent3.classList.add('modal-content3');

    const closeBtn = document.createElement('span');
    closeBtn.classList.add('close-btn');
    closeBtn.innerHTML = '&times;';

    const loginForm = document.createElement('form');
    loginForm.classList.add('login-form');

    const usernameInput = document.createElement('input');
    usernameInput.setAttribute('type', 'text');
    usernameInput.setAttribute('id', 'username');
    usernameInput.setAttribute('name', 'username');
    usernameInput.setAttribute('placeholder', 'Enter your username');
    usernameInput.classList.add('login-input');

    const passwordInput = document.createElement('input');
    passwordInput.setAttribute('type', 'password');
    passwordInput.setAttribute('id', 'password');
    passwordInput.setAttribute('name', 'password');
    passwordInput.setAttribute('placeholder', 'Enter your password');
    passwordInput.classList.add('login-input');

    const loginButton = document.createElement('button');
    loginButton.setAttribute('type', 'submit');
    loginButton.innerText = 'Log In';
    loginButton.classList.add('login-button');

    loginForm.append(usernameInput, passwordInput, loginButton);

    modalContent3.append(closeBtn, loginForm);
    modalWrapper3.appendChild(modalContent3);

    document.body.appendChild(modalWrapper3);

    closeBtn.addEventListener('click', () => {
        modalWrapper3.remove();
    });
};

accountArea.addEventListener('click', () => {
    showLoginModal();
});

const showQuickView = ({ name, price, image, discount }) => {
    const modalWrapper = document.createElement('div');
    modalWrapper.classList.add('modal-wrapper');

    const modalContent = document.createElement('div');
    modalContent.classList.add('modal-content');

    const closeBtn = document.createElement('span');
    closeBtn.classList.add('close-btn');
    closeBtn.innerHTML = '&times;';

    const cardImage = document.createElement('img');
    cardImage.classList.add('card-image');
    cardImage.setAttribute('src', image);

    const cardDetails = document.createElement('div');
    cardDetails.classList.add('card-details');

    const cardName = document.createElement('h2');
    cardName.innerText = name;

    const cardDiscounted = document.createElement('span');
    cardDiscounted.innerText = `Price with discount: ${calculateDiscountedPrice(price, discount)}€`;

    const cardPrice = document.createElement('span');
    cardPrice.innerText = `Price: ${price} €`;

    const cardDiscount = document.createElement('span');
    cardDiscount.innerText = `Discount: ${discount}%`;

    cardDetails.append(cardName, cardPrice, cardDiscount, cardDiscounted);
    modalContent.append(closeBtn, cardImage, cardDetails);
    modalWrapper.appendChild(modalContent);

    document.body.appendChild(modalWrapper);

    closeBtn.addEventListener('click', () => {
        modalWrapper.remove();
    });
};

const basketItems = JSON.parse(localStorage.getItem('basketItems')) || [];

const addToBasket = ({ name, price, image, discount, id }) => {
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

const showNotification = (message) => {
    const notification = document.createElement('div');
    notification.classList.add('notification');
    notification.innerText = message;
    document.body.append(notification);

    setTimeout(() => {
        notification.remove();
    }, 2000);
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