const header = document.getElementById('header');

const searchArea = document.createElement('div');
searchArea.classList.add('search_area');

export const searchInput = document.createElement('input');
searchInput.setAttribute('id', 'search');
searchInput.setAttribute('placeholder', 'Search your product...');
searchInput.classList.add('search_input');

const btnWrapper = document.createElement('div');
btnWrapper.classList.add('btn_wrapper');

export const accountArea = document.createElement('button');
accountArea.classList.add('account_area');

const svgAccount = document.createElementNS("http://www.w3.org/2000/svg", "svg");
const pathAccount = document.createElementNS("http://www.w3.org/2000/svg", "path");

svgAccount.setAttribute("xmlns", "http://www.w3.org/2000/svg");
svgAccount.setAttribute("width", "22");
svgAccount.setAttribute("height", "22");
svgAccount.setAttribute("fill", "currentColor");
svgAccount.setAttribute("class", "bi bi-person");
svgAccount.setAttribute("viewBox", "0 0 16 16");
pathAccount.setAttribute("d", "M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z");

svgAccount.append(pathAccount);
accountArea.append(svgAccount);

export const basketArea = document.createElement('button');
basketArea.classList.add('basket_area');
basketArea.setAttribute('id','basket-area');
const basketSpan = document.createElement('span');
basketSpan.setAttribute('id','count-items');

const svgBasket = document.createElementNS("http://www.w3.org/2000/svg", "svg");
const pathBasket = document.createElementNS("http://www.w3.org/2000/svg", "path");
svgBasket.setAttribute("xmlns", "http://www.w3.org/2000/svg");
svgBasket.setAttribute("width", "18");
svgBasket.setAttribute("height", "18");
svgBasket.setAttribute("fill", "currentColor");
svgBasket.setAttribute("class", "bi bi-basket3");
svgBasket.setAttribute("viewBox", "0 0 16 16");
pathBasket.setAttribute("d", "M5.757 1.071a.5.5 0 0 1 .172.686L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15.5a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H.5a.5.5 0 0 1-.5-.5v-1A.5.5 0 0 1 .5 6h1.717L5.07 1.243a.5.5 0 0 1 .686-.172zM3.394 15l-1.48-6h-.97l1.525 6.426a.75.75 0 0 0 .729.574h9.606a.75.75 0 0 0 .73-.574L15.056 9h-.972l-1.479 6h-9.21z");

svgBasket.append(pathBasket);
basketArea.append(svgBasket, basketSpan);

searchArea.append(searchInput);
btnWrapper.append(accountArea, basketArea)
header.append(searchArea, btnWrapper);


