import {searchInput} from './header.js'

const mainWrapper = document.getElementById('main');

const cardsURL = 'https://648ecbd875a96b66444447c2.mockapi.io/cards';

const cardsBlock = document.getElementById('cards');
mainWrapper.append(cardsBlock);

const getCards = () => {
    return new Promise((resolve, reject) => {
        fetch(cardsURL)
            .then(response => {
                if (response.ok) {
                    resolve(response.json());
                }
                reject(new Error('Some Error'));
            });
    });
};

const createCards = ({name, price, image, discount, id}) => {

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

    const addToBasketBtn = document.createElement('div');
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
    cardDetailsArea.append(priceDiscounted, priceNormal, cardProductName)
    cardItem.append(cardImageArea, cardDetailsArea);
    cardsBlock.append(cardItem);

    // addToBasketBtn.addEventListener('click', () => {
    //     setLocalStorage(id);
    // })
}

const renderCards = (cardsData) => {
    cardsData.forEach(card => {
        createCards(card);
    });
};

getCards().then(cards => {
    renderCards(cards);
});

const calculateDiscountedPrice = (price, discount) => {
    let discountedPrice = (price - (price * (discount / 100))).toFixed(2);
    return Number(discountedPrice);
}



const handleSearch = (event) => {
    const searchQuery = event.target.value.toLowerCase();
    const cards = Array.from(cardsBlock.querySelectorAll('.cards-item'));
    cards.forEach(card => {
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