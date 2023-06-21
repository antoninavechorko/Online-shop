import {searchInput} from "./header.js";
import {cardsBlock} from "./cards.js";

const handleSearch = (event) => {
    const searchQuery = event.target.value.toLowerCase();
    const cards = Array.from(cardsBlock.querySelectorAll('.cards-item'));

    let slider = document.getElementsByClassName('swiper')[0];

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
        slider.style.display = 'block';
    } else {
        slider.style.display = 'none';
    }
};

searchInput.addEventListener('input', handleSearch);