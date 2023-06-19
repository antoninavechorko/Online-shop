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

const createCards = ({name, price, image, discount, id, description}) => {

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

    const cardProductDescription = document.createElement('p');
    cardProductDescription.innerText = description;

    addToBasketBtn.append(basketSvg, basketSpan);
    cardImageArea.append(cardImage, discountSpan, quickViewBtn, addToBasketBtn);
    cardDetailsArea.append(priceDiscounted, priceNormal, cardProductName, cardProductDescription)
    cardItem.append(cardImageArea, cardDetailsArea);
    cardsBlock.append(cardItem);

    // addToBasketBtn.addEventListener('click', () => {
    //     setLocalStorage(id);
    // })
}

const calculateDiscountedPrice = (price, discount) => {
    let discountedPrice = (price - (price * (discount / 100))).toFixed(2);
    return Number(discountedPrice);
}

getCards().then(cards => cards.forEach(card => createCards(card)));

