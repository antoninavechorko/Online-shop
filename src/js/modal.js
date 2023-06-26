import {accountArea} from "./header.js";
import {calculateDiscountedPrice} from './cards.js'

const showLoginModal = () => {
    const loginModalWrapper = document.createElement('div');
    loginModalWrapper.classList.add('login-modal-wrapper');

    const loginModalContent = document.createElement('div');
    loginModalContent.classList.add('login-modal-content');

    const loginCloseBtn = document.createElement('span');
    loginCloseBtn.classList.add('login-close-btn');
    loginCloseBtn.innerHTML = '&times;';

    const loginForm = document.createElement('form');
    loginForm.classList.add('login-form');

    const usernameInput = document.createElement('input');
    usernameInput.setAttribute('type', 'email');
    usernameInput.setAttribute('id', 'username');
    usernameInput.setAttribute('name', 'username');
    usernameInput.setAttribute('placeholder', 'Enter your email');
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
    loginModalContent.append(loginCloseBtn, loginForm);
    loginModalWrapper.append(loginModalContent);
    document.body.append(loginModalWrapper);

    loginCloseBtn.addEventListener('click', () => {
        loginModalWrapper.remove();
    });
};

accountArea.addEventListener('click', () => {
    showLoginModal();
});

export const showQuickView = ({ name, price, image, discount }) => {
    const quickViewModalWrapper = document.createElement('div');
    quickViewModalWrapper.classList.add('qv-modal-wrapper');

    const quickViewModalContent = document.createElement('div');
    quickViewModalContent.classList.add('qv-modal-content');

    const cardCloseBtn = document.createElement('span');
    cardCloseBtn.classList.add('qv-close-btn');
    cardCloseBtn.innerHTML = '&times;';

    const cardImage = document.createElement('assets');
    cardImage.classList.add('qv-card-image');
    cardImage.setAttribute('src', image);

    const cardDetails = document.createElement('div');
    cardDetails.classList.add('qv-card-details');

    const cardName = document.createElement('h2');
    cardName.innerText = name;

    const cardDiscounted = document.createElement('span');
    cardDiscounted.innerText = `Price with discount: ${calculateDiscountedPrice(price, discount)}€`;
    cardDiscounted.classList.add('qv-discounted-price');

    const cardPrice = document.createElement('span');
    cardPrice.innerText = `Price: ${price} €`;
    cardPrice.classList.add('qv-price');

    const cardDiscount = document.createElement('span');
    cardDiscount.innerText = `Discount: ${discount}%`;
    cardDiscount.classList.add('qv-discount');

    cardDetails.append(cardName, cardPrice, cardDiscount, cardDiscounted);
    quickViewModalContent.append(cardCloseBtn, cardImage, cardDetails);
    quickViewModalWrapper.append(quickViewModalContent);
    document.body.append(quickViewModalWrapper);

    cardCloseBtn.addEventListener('click', () => {
        quickViewModalWrapper.remove();
    });
};

export const showNotification = (message) => {
    const notification = document.createElement('div');
    notification.classList.add('notification');
    notification.innerText = message;
    document.body.append(notification);

    setTimeout(() => {
        notification.remove();
    }, 1000);
};