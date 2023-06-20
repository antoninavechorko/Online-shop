import {searchInput} from './header.js'
import {basketArea} from './header.js'

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
    cardDetailsArea.append(priceDiscounted, priceNormal, cardProductName)
    cardItem.append(cardImageArea, cardDetailsArea);
    cardsBlock.append(cardItem);

    // addToBasketBtn.addEventListener('click', () => {
    //     setLocalStorage(id);
    // })

    quickViewBtn.addEventListener('click', () => {
        showQuickView({ name, price, image, discount });
    });

    addToBasketBtn.addEventListener('click', () => {
        addToBasket({ name, price, image, discount, id });
        showNotification('Item added to the basket');
    });
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

const showQuickView = ({ name, price, image, discount }) => {
    // Create DOM elements for the modal window
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
    cardDiscounted.innerText = `Price with discount:` + calculateDiscountedPrice(price, discount) + `€` ;

    const cardPrice = document.createElement('span');
    cardPrice.innerText = `Price: ${price} €`;

    const cardDiscount = document.createElement('span');
    cardDiscount.innerText = `Discount: ${discount}%`;

    cardDetails.append(cardName, cardPrice, cardDiscount, cardDiscounted);
    modalContent.append(closeBtn, cardImage, cardDetails);
    modalWrapper.appendChild(modalContent);

    // Append the modal to the document body
    document.body.appendChild(modalWrapper);

    // Close the modal when clicking the close button
    closeBtn.addEventListener('click', () => {
        modalWrapper.remove();
    });
};

const addToBasket = ({ name, price, image, discount, id }) => {
    const basketItems = JSON.parse(localStorage.getItem('basketItems')) || [];
    const newItem = { name, price, image, discount, id };
    basketItems.push(newItem);
    localStorage.setItem('basketItems', JSON.stringify(basketItems));
    updateBasketCount();

    showNotification('Item added to the basket')

};

const updateBasketCount = () => {
    const basketItems = JSON.parse(localStorage.getItem('basketItems')) || [];
    const countItems = document.getElementById('count-items');
    countItems.innerText = basketItems.length;
};

const showNotification = (message) => {
    const notification = document.createElement('div');
    notification.classList.add('notification');
    notification.innerText = message;
    document.body.append(notification);

    // Удалить уведомление через некоторое время
    setTimeout(() => {
        notification.remove();
    }, 2000); // Удалить уведомление через 3 секунды (3000 миллисекунд)
};


const deleteBasketItem = (itemId) => {
    let basketItems = JSON.parse(localStorage.getItem('basketItems')) || [];
    basketItems = basketItems.filter(item => item.id !== itemId);
    localStorage.setItem('basketItems', JSON.stringify(basketItems));
    updateBasketCount();

    if (basketItems.length === 0) {
        const modalWrapper2 = document.querySelector('.modal-wrapper');
        if (modalWrapper2) {
            modalWrapper2.remove();
        }
    } else {
        showBasketModal(); // Обновляем модальное окно корзины после удаления позиции
    }
};
const showBasketModal = () => {
    const basketItems = JSON.parse(localStorage.getItem('basketItems')) || [];

    const modalWrapper2 = document.createElement('div');
    modalWrapper2.classList.add('modal-wrapper');

    const modalContent = document.createElement('div');
    modalContent.classList.add('modal-content');

    const closeBtn = document.createElement('span');
    closeBtn.classList.add('close-btn');
    closeBtn.innerHTML = '&times;';

    const basketItemsList = document.createElement('ul');
    basketItemsList.classList.add('basket-items-list');

    let totalCost = 0;

    const proceedToPaymentBtn = document.createElement('button');
    proceedToPaymentBtn.innerText = 'Pay';



    basketItems.forEach(item => {
        const listItem = document.createElement('li');
        const itemName = document.createElement('span');
        itemName.innerText = item.name;

        const itemPrice = document.createElement('span');
        itemPrice.innerText = `€${item.price}`;

        const deleteButton = document.createElement('button');
        deleteButton.innerText = 'Delete';

        listItem.append(itemName, itemPrice, deleteButton);
        basketItemsList.appendChild(listItem);

        totalCost += parseFloat(item.price);

        deleteButton.addEventListener('click', () => {
            // Обработчик события для удаления позиции
            deleteBasketItem(item.id);
        });

        closeBtn.addEventListener('click', () => {
            // Обработчик события для удаления позиции
            modalWrapper2.remove();
        });

    });



    const totalPrice = document.createElement('div');
    totalPrice.classList.add('total-price');
    totalPrice.innerText = `Total: €${totalCost.toFixed(2)}`;

    modalContent.append(closeBtn, basketItemsList, totalPrice, proceedToPaymentBtn);
    modalWrapper2.appendChild(modalContent);
    document.body.appendChild(modalWrapper2);

    closeBtn.addEventListener('click', () => {
        modalWrapper2.remove();
    });
};

basketArea.addEventListener('click', () => {
    showBasketModal();
});

window.addEventListener('load', () => {
    updateBasketCount();
});



