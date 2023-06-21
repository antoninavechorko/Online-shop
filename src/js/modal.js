import {accountArea} from "./header.js";
import {calculateDiscountedPrice} from './cards.js'

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

export const showQuickView = ({ name, price, image, discount }) => {
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

export const showNotification = (message) => {
    const notification = document.createElement('div');
    notification.classList.add('notification');
    notification.innerText = message;
    document.body.append(notification);

    setTimeout(() => {
        notification.remove();
    }, 2000);
};