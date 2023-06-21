import {showQuickView, showNotification} from './modal.js';
import {addToBasket} from './basket.js';

const mainWrapper = document.getElementById('main');
export const cardsBlock = document.getElementById('cards');
mainWrapper.append(cardsBlock);

const cardsURL = 'https://648ecbd875a96b66444447c2.mockapi.io/cards';

const getCards = () => {
    return new Promise((resolve, reject) => {
        fetch(cardsURL)
            .then((response) => {
                if (response.ok) {
                    resolve(response.json());
                }
                reject(new Error('Some Error'));
            })
    });
};

getCards().then(cards => renderCards(cards));

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
    addToBasketBtn.setAttribute('id', 'count_items');
    const basketSvg = document.createElement('img');
    basketSvg.setAttribute('src', './style/assets/img/basket.svg');

    const cardDetailsArea = document.createElement('div');
    cardDetailsArea.classList.add('cardDetailsArea');

    const priceDiscounted = document.createElement('span');
    priceDiscounted.innerText = calculateDiscountedPrice(price, discount) + '€';

    const priceNormal = document.createElement('span');
    priceNormal.innerText = `${price} €`;

    const cardProductName = document.createElement('h4');
    cardProductName.innerText = name;

    addToBasketBtn.append(basketSvg);
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

export const calculateDiscountedPrice = (price, discount) => {
    let discountedPrice = (price - (price * (discount / 100))).toFixed(2);
    return discountedPrice;
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
