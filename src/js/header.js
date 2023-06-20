const header = document.getElementById('header');

const headerImg = document.createElement('img');
headerImg.setAttribute('src', './style/assets/img/logo.svg');
headerImg.setAttribute('alt', 'logo');
headerImg.classList.add('header_logo');

const searchArea = document.createElement('div');
searchArea.classList.add('search_area');
const searchInputSvg = document.createElement('img');
searchInputSvg.setAttribute('src', './style/assets/img/search.svg');
searchInputSvg.classList.add('search_svg');
export const searchInput = document.createElement('input');
searchInput.setAttribute('id', 'search');
searchInput.setAttribute('placeholder', 'Search your product...');
searchInput.classList.add('search_input');

export const accountArea = document.createElement('button');
accountArea.classList.add('account_area');
const accountSvg = document.createElement('img');
accountSvg.setAttribute('src', './style/assets/img/account.svg');

export const basketArea = document.createElement('button');
basketArea.classList.add('basket_area');
basketArea.setAttribute('id','basket-area');
const basketSpan = document.createElement('span');
basketSpan.setAttribute('id','count-items');
const basketSvg = document.createElement('img');
basketSvg.setAttribute('src', './style/assets/img/basket.svg');


searchArea.append(searchInputSvg, searchInput);
accountArea.append(accountSvg);
basketArea.append(basketSvg, basketSpan);
header.append(headerImg, searchArea, accountArea, basketArea);


