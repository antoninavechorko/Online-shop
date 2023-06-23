const header = document.getElementById('header');

const logo = document.getElementsByClassName('logo');

const searchArea = document.createElement('div');
searchArea.classList.add('search_area');

export const searchInput = document.createElement('input');
searchInput.setAttribute('id', 'search');
searchInput.setAttribute('placeholder', 'Search your product...');
searchInput.classList.add('search_input');

export const accountArea = document.createElement('button');
accountArea.classList.add('account_area');

const svgAccount = document.createElementNS("http://www.w3.org/2000/svg", "svg");
const pathAccount1 = document.createElementNS("http://www.w3.org/2000/svg", "path");
const pathAccount2 = document.createElementNS("http://www.w3.org/2000/svg", "path");

svgAccount.setAttribute("xmlns", "http://www.w3.org/2000/svg");
svgAccount.setAttribute("width", "16");
svgAccount.setAttribute("height", "16");
svgAccount.setAttribute("fill", "currentColor");
svgAccount.setAttribute("class", "bi bi-person-circle");
svgAccount.setAttribute("viewBox", "0 0 16 16");
pathAccount1.setAttribute("d", "M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0");
pathAccount2.setAttribute("fill-rule", "evenodd");
pathAccount2.setAttribute("d", "M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1");

svgAccount.append(pathAccount1, pathAccount2);
accountArea.append(svgAccount);

export const basketArea = document.createElement('button');
basketArea.classList.add('basket_area');
basketArea.setAttribute('id','basket-area');
const basketSpan = document.createElement('span');
basketSpan.setAttribute('id','count-items');

const svgBasket = document.createElementNS("http://www.w3.org/2000/svg", "svg");
const pathBasket = document.createElementNS("http://www.w3.org/2000/svg", "path");
svgBasket.setAttribute("xmlns", "http://www.w3.org/2000/svg");
svgBasket.setAttribute("width", "16");
svgBasket.setAttribute("height", "16");
svgBasket.setAttribute("fill", "currentColor");
svgBasket.setAttribute("class", "bi bi-basket3");
svgBasket.setAttribute("viewBox", "0 0 16 16");
pathBasket.setAttribute("d", "M5.757 1.071a.5.5 0 0 1 .172.686L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15.5a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H.5a.5.5 0 0 1-.5-.5v-1A.5.5 0 0 1 .5 6h1.717L5.07 1.243a.5.5 0 0 1 .686-.172zM3.394 15l-1.48-6h-.97l1.525 6.426a.75.75 0 0 0 .729.574h9.606a.75.75 0 0 0 .73-.574L15.056 9h-.972l-1.479 6h-9.21z");

svgBasket.append(pathBasket);

searchArea.append(searchInput);
basketArea.append(svgBasket, basketSpan);
header.append(searchArea, accountArea, basketArea);


