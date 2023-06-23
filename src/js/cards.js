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
    discountSpan.classList.add('discount_span');

    const quickViewBtn = document.createElement('button');
    quickViewBtn.innerText = 'Quick View';

    const addToBasketBtn = document.createElement('button');
    addToBasketBtn.setAttribute('id', 'added-counter');

    const svgCardBasket = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    const pathCardBasket = document.createElementNS("http://www.w3.org/2000/svg", "path");
    svgCardBasket.setAttribute("xmlns", "http://www.w3.org/2000/svg");
    svgCardBasket.setAttribute("width", "16");
    svgCardBasket.setAttribute("height", "16");
    svgCardBasket.setAttribute("fill", "currentColor");
    svgCardBasket.setAttribute("class", "bi bi-basket3");
    svgCardBasket.setAttribute("viewBox", "0 0 16 16");
    pathCardBasket.setAttribute("d", "M5.757 1.071a.5.5 0 0 1 .172.686L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15.5a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H.5a.5.5 0 0 1-.5-.5v-1A.5.5 0 0 1 .5 6h1.717L5.07 1.243a.5.5 0 0 1 .686-.172zM3.394 15l-1.48-6h-.97l1.525 6.426a.75.75 0 0 0 .729.574h9.606a.75.75 0 0 0 .73-.574L15.056 9h-.972l-1.479 6h-9.21z");

    svgCardBasket.append(pathCardBasket);
    addToBasketBtn.append(svgCardBasket);

    const cardDetailsArea = document.createElement('div');
    cardDetailsArea.classList.add('cardDetailsArea');

    const priceDiscounted = document.createElement('span');
    priceDiscounted.innerText = calculateDiscountedPrice(price, discount) + '€';

    const priceNormal = document.createElement('span');
    priceNormal.innerText = `${price} €`;

    const cardProductName = document.createElement('h4');
    cardProductName.innerText = name;

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
    const newArray = [...array];
    for (let i = 0; i < newArray.length; i++) {
        const randomIndex = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[randomIndex]] = [newArray[randomIndex], newArray[i]];
    }
    return newArray;
};

const renderCards = (cardsData) => {
    const shuffledCards = shuffleArray(cardsData);

    for (let i = 0; i < 15; i++) {
        createCards(shuffledCards[i]);
    }
};