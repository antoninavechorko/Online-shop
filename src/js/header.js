const header = document.getElementById('header');

const headerImg = document.createElement('img');
headerImg.setAttribute('src', './style/assets/img/logo.svg');
headerImg.setAttribute('alt', 'logo');
headerImg.classList.add('header_logo');

const locationArea = document.createElement('div');
const locationSvg = document.createElement('img');
locationSvg.setAttribute('src', './style/assets/img/map.svg');
const select = document.createElement('select');
select.setAttribute('id', 'location-dropdown')

const locations = [
    { value: 'Poland', label: 'Poland' },
    { value: 'Belarus', label: 'Belarus' },
    { value: 'Germany', label: 'Germany' },
];
locations.forEach(location => {
    const option = document.createElement('option');
    option.value = location.value;
    option.innerText = location.label;
    select.append(option);
});

const searchArea = document.createElement('div');
searchArea.classList.add('search_area');
const searchInputSvg = document.createElement('img');
searchInputSvg.setAttribute('src', './style/assets/img/search.svg');
searchInputSvg.classList.add('search_svg');
const searchInput = document.createElement('input');
searchInput.setAttribute('id', 'search');
searchInput.setAttribute('placeholder', 'Search your product...');
searchInput.classList.add('search_input');

const accountArea = document.createElement('div');
accountArea.classList.add('account_area');
const accountSvg = document.createElement('img');
accountSvg.setAttribute('src', './style/assets/img/account.svg');

const basketArea = document.createElement('div');
basketArea.classList.add('basket_area');
const basketSvg = document.createElement('img');
basketSvg.setAttribute('src', './style/assets/img/basket.svg');
const basketSpan = document.createElement('span');
basketSpan.classList.add('count_items');
basketSpan.setAttribute('id', 'count_items');

locationArea.append(locationSvg, select);
searchArea.append(searchInputSvg, searchInput);
accountArea.append(accountSvg);
basketArea.append(basketSvg, basketSpan);
header.append(headerImg, locationArea, searchArea, accountArea, basketArea);


