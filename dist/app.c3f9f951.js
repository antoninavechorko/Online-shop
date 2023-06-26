// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"js/header.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.searchInput = exports.basketArea = exports.accountArea = void 0;
var header = document.getElementById('header');
var searchArea = document.createElement('div');
searchArea.classList.add('search_area');
var searchInput = document.createElement('input');
exports.searchInput = searchInput;
searchInput.setAttribute('id', 'search');
searchInput.setAttribute('placeholder', 'Search your product...');
searchInput.classList.add('search_input');
var btnWrapper = document.createElement('div');
btnWrapper.classList.add('btn_wrapper');
var accountArea = document.createElement('button');
exports.accountArea = accountArea;
accountArea.classList.add('account_area');
var svgAccount = document.createElementNS("http://www.w3.org/2000/svg", "svg");
var pathAccount = document.createElementNS("http://www.w3.org/2000/svg", "path");
svgAccount.setAttribute("xmlns", "http://www.w3.org/2000/svg");
svgAccount.setAttribute("width", "22");
svgAccount.setAttribute("height", "22");
svgAccount.setAttribute("fill", "currentColor");
svgAccount.setAttribute("class", "bi bi-person");
svgAccount.setAttribute("viewBox", "0 0 16 16");
pathAccount.setAttribute("d", "M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z");
svgAccount.append(pathAccount);
accountArea.append(svgAccount);
var basketArea = document.createElement('button');
exports.basketArea = basketArea;
basketArea.classList.add('basket_area');
basketArea.setAttribute('id', 'basket-area');
var basketSpan = document.createElement('span');
basketSpan.setAttribute('id', 'count-items');
var svgBasket = document.createElementNS("http://www.w3.org/2000/svg", "svg");
var pathBasket = document.createElementNS("http://www.w3.org/2000/svg", "path");
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
btnWrapper.append(accountArea, basketArea);
header.append(searchArea, btnWrapper);
},{}],"js/modal.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.showQuickView = exports.showNotification = void 0;
var _header = require("./header.js");
var _cards = require("./cards.js");
var showLoginModal = function showLoginModal() {
  var loginModalWrapper = document.createElement('div');
  loginModalWrapper.classList.add('login-modal-wrapper');
  var loginModalContent = document.createElement('div');
  loginModalContent.classList.add('login-modal-content');
  var loginCloseBtn = document.createElement('span');
  loginCloseBtn.classList.add('login-close-btn');
  loginCloseBtn.innerHTML = '&times;';
  var loginForm = document.createElement('form');
  loginForm.classList.add('login-form');
  var usernameInput = document.createElement('input');
  usernameInput.setAttribute('type', 'email');
  usernameInput.setAttribute('id', 'username');
  usernameInput.setAttribute('name', 'username');
  usernameInput.setAttribute('placeholder', 'Enter your email');
  usernameInput.classList.add('login-input');
  var passwordInput = document.createElement('input');
  passwordInput.setAttribute('type', 'password');
  passwordInput.setAttribute('id', 'password');
  passwordInput.setAttribute('name', 'password');
  passwordInput.setAttribute('placeholder', 'Enter your password');
  passwordInput.classList.add('login-input');
  var loginButton = document.createElement('button');
  loginButton.setAttribute('type', 'submit');
  loginButton.innerText = 'Log In';
  loginButton.classList.add('login-button');
  loginForm.append(usernameInput, passwordInput, loginButton);
  loginModalContent.append(loginCloseBtn, loginForm);
  loginModalWrapper.append(loginModalContent);
  document.body.append(loginModalWrapper);
  loginCloseBtn.addEventListener('click', function () {
    loginModalWrapper.remove();
  });
};
_header.accountArea.addEventListener('click', function () {
  showLoginModal();
});
var showQuickView = function showQuickView(_ref) {
  var name = _ref.name,
    price = _ref.price,
    image = _ref.image,
    discount = _ref.discount;
  var quickViewModalWrapper = document.createElement('div');
  quickViewModalWrapper.classList.add('qv-modal-wrapper');
  var quickViewModalContent = document.createElement('div');
  quickViewModalContent.classList.add('qv-modal-content');
  var cardCloseBtn = document.createElement('span');
  cardCloseBtn.classList.add('qv-close-btn');
  cardCloseBtn.innerHTML = '&times;';
  var cardImage = document.createElement('assets');
  cardImage.classList.add('qv-card-image');
  cardImage.setAttribute('src', image);
  var cardDetails = document.createElement('div');
  cardDetails.classList.add('qv-card-details');
  var cardName = document.createElement('h2');
  cardName.innerText = name;
  var cardDiscounted = document.createElement('span');
  cardDiscounted.innerText = "Price with discount: ".concat((0, _cards.calculateDiscountedPrice)(price, discount), "\u20AC");
  cardDiscounted.classList.add('qv-discounted-price');
  var cardPrice = document.createElement('span');
  cardPrice.innerText = "Price: ".concat(price, " \u20AC");
  cardPrice.classList.add('qv-price');
  var cardDiscount = document.createElement('span');
  cardDiscount.innerText = "Discount: ".concat(discount, "%");
  cardDiscount.classList.add('qv-discount');
  cardDetails.append(cardName, cardPrice, cardDiscount, cardDiscounted);
  quickViewModalContent.append(cardCloseBtn, cardImage, cardDetails);
  quickViewModalWrapper.append(quickViewModalContent);
  document.body.append(quickViewModalWrapper);
  cardCloseBtn.addEventListener('click', function () {
    quickViewModalWrapper.remove();
  });
};
exports.showQuickView = showQuickView;
var showNotification = function showNotification(message) {
  var notification = document.createElement('div');
  notification.classList.add('notification');
  notification.innerText = message;
  document.body.append(notification);
  setTimeout(function () {
    notification.remove();
  }, 1000);
};
exports.showNotification = showNotification;
},{"./header.js":"js/header.js","./cards.js":"js/cards.js"}],"js/basket.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addToBasket = void 0;
var _header = require("./header.js");
var _cards = require("./cards.js");
var basketItems = JSON.parse(localStorage.getItem('basketItems')) || [];
var updateBasketCount = function updateBasketCount() {
  var countItems = document.getElementById('count-items');
  var length = basketItems.length;
  countItems.innerText = "".concat(length);
  if (length === 0) {
    countItems.style.display = 'none';
  } else {
    countItems.style.display = 'inline-block';
  }
};
var updateLocalStorage = function updateLocalStorage() {
  localStorage.setItem('basketItems', JSON.stringify(basketItems));
  updateBasketCount();
};
var addToBasket = function addToBasket(_ref) {
  var name = _ref.name,
    price = _ref.price,
    image = _ref.image,
    discount = _ref.discount,
    id = _ref.id;
  var discountedPrice = (0, _cards.calculateDiscountedPrice)(price, discount);
  var newItem = {
    name: name,
    price: discountedPrice,
    image: image,
    discount: discount,
    id: id
  };
  basketItems.push(newItem);
  updateLocalStorage();
};
exports.addToBasket = addToBasket;
var renderBasketModal = function renderBasketModal() {
  var basketModalWrapper = document.createElement('div');
  basketModalWrapper.classList.add('basket-modal-wrapper');
  var basketModalContent = document.createElement('div');
  basketModalContent.classList.add('basket-modal-content');
  var basketTitle = document.createElement('h2');
  basketTitle.innerText = 'Cart';
  var basketClearBtn = document.createElement('button');
  basketClearBtn.classList.add('clear-basket-btn');
  basketClearBtn.innerText = 'Clear Cart';
  var basketCloseBtn = document.createElement('span');
  basketCloseBtn.classList.add('close-btn');
  basketCloseBtn.innerHTML = '&times;';
  var basketListWrapper = document.createElement('div');
  basketListWrapper.classList.add('basket-list-wrapper');
  var basketItemsList = document.createElement('ul');
  basketItemsList.classList.add('basket-items-list');
  var basketFooterWrapper = document.createElement('div');
  basketFooterWrapper.classList.add('basket-footer-wrapper');
  var proceedToPaymentBtn = document.createElement('button');
  proceedToPaymentBtn.innerText = 'Proceed to payment';
  var totalCost = 0;
  var totalPrice = document.createElement('div');
  totalPrice.classList.add('total-price');
  totalPrice.innerText = "Total Sum: ".concat(totalCost.toFixed(2), " \u20AC");
  basketListWrapper.append(basketItemsList, basketClearBtn);
  basketFooterWrapper.append(totalPrice, proceedToPaymentBtn);
  basketModalContent.append(basketTitle, basketCloseBtn, basketListWrapper, basketFooterWrapper);
  basketModalWrapper.append(basketModalContent);
  document.body.append(basketModalWrapper);
  if (basketItems.length === 0) {
    createEmptyBasketContent(basketModalContent, basketTitle, basketCloseBtn);
  }
  basketItems.forEach(function (item) {
    var listItem = document.createElement('li');
    listItem.classList.add('basket-item');
    var itemName = document.createElement('div');
    itemName.classList.add('basket-item-name');
    itemName.innerText = item.name;
    var itemPrice = document.createElement('div');
    itemPrice.classList.add('basket-item-price');
    itemPrice.innerText = "".concat(item.price, " \u20AC");
    var deleteButton = document.createElement('button');
    deleteButton.innerText = 'Delete';
    listItem.append(itemName, itemPrice, deleteButton);
    basketItemsList.append(listItem);
    totalCost += parseFloat(item.price);
    totalPrice.innerText = "Total Sum: ".concat(totalCost.toFixed(2), " \u20AC");
    deleteButton.addEventListener('click', function () {
      var itemIndex = basketItems.findIndex(function (deleteItem) {
        return deleteItem.id === item.id;
      });
      if (itemIndex > -1) {
        basketItems.splice(itemIndex, 1);
        updateLocalStorage();
        listItem.remove();
        totalCost -= parseFloat(item.price);
        totalPrice.innerText = "Total Sum: ".concat(totalCost.toFixed(2), " \u20AC");
      }
      if (basketItems.length === 0) {
        createEmptyBasketContent(basketModalContent, basketTitle, basketCloseBtn);
      }
    });
  });
  basketCloseBtn.addEventListener('click', function () {
    basketModalWrapper.remove();
  });
  basketClearBtn.addEventListener('click', function () {
    basketItems.length = 0;
    createEmptyBasketContent(basketModalContent, basketTitle, basketCloseBtn);
    updateLocalStorage();
  });
  proceedToPaymentBtn.addEventListener('click', function () {
    alert('You will be forwarded to another window');
  });
};
var createEmptyBasketContent = function createEmptyBasketContent(basketModalContent, basketTitle, basketCloseBtn) {
  basketModalContent.innerHTML = '';
  var emptyBasketText = document.createElement('p');
  emptyBasketText.classList.add('empty-basket-text');
  emptyBasketText.innerText = 'Your cart is empty';
  basketModalContent.append(basketTitle, emptyBasketText, basketCloseBtn);
};
_header.basketArea.addEventListener('click', function () {
  renderBasketModal();
});
window.addEventListener('load', function () {
  updateBasketCount();
});
},{"./header.js":"js/header.js","./cards.js":"js/cards.js"}],"js/cards.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cardsBlock = exports.calculateDiscountedPrice = void 0;
var _modal = require("./modal.js");
var _basket = require("./basket.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
var mainWrapper = document.getElementById('main');
var cardsBlock = document.getElementById('cards');
exports.cardsBlock = cardsBlock;
mainWrapper.append(cardsBlock);
var cardsURL = 'https://648ecbd875a96b66444447c2.mockapi.io/cards';
var getCards = function getCards() {
  return new Promise(function (resolve, reject) {
    fetch(cardsURL).then(function (response) {
      if (response.ok) {
        resolve(response.json());
      }
      reject(new Error('Some Error'));
    });
  });
};
getCards().then(function (cards) {
  return renderCards(cards);
});
var createCards = function createCards(_ref) {
  var name = _ref.name,
    price = _ref.price,
    image = _ref.image,
    discount = _ref.discount,
    id = _ref.id;
  var cardItem = document.createElement('div');
  cardItem.classList.add('cards-item');
  cardItem.setAttribute('id', id);
  var cardImageArea = document.createElement('div');
  cardImageArea.classList.add('cardImageArea');
  var cardImage = document.createElement('assets');
  cardImage.classList.add('card-image');
  cardImage.setAttribute('src', image);
  var discountSpan = document.createElement('span');
  discountSpan.innerText = "".concat(discount, "%");
  discountSpan.classList.add('discount_span');
  var quickViewBtn = document.createElement('button');
  quickViewBtn.innerText = 'Quick View';
  quickViewBtn.classList.add('qv-btn');
  var addToBasketBtn = document.createElement('button');
  addToBasketBtn.setAttribute('id', 'added-counter');
  addToBasketBtn.classList.add('add-to-basket-btn');
  var svgCardBasket = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  var pathCardBasket = document.createElementNS("http://www.w3.org/2000/svg", "path");
  svgCardBasket.setAttribute("xmlns", "http://www.w3.org/2000/svg");
  svgCardBasket.setAttribute("width", "16");
  svgCardBasket.setAttribute("height", "16");
  svgCardBasket.setAttribute("fill", "currentColor");
  svgCardBasket.setAttribute("class", "bi bi-basket3");
  svgCardBasket.setAttribute("viewBox", "0 0 16 16");
  pathCardBasket.setAttribute("d", "M5.757 1.071a.5.5 0 0 1 .172.686L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15.5a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H.5a.5.5 0 0 1-.5-.5v-1A.5.5 0 0 1 .5 6h1.717L5.07 1.243a.5.5 0 0 1 .686-.172zM3.394 15l-1.48-6h-.97l1.525 6.426a.75.75 0 0 0 .729.574h9.606a.75.75 0 0 0 .73-.574L15.056 9h-.972l-1.479 6h-9.21z");
  svgCardBasket.append(pathCardBasket);
  addToBasketBtn.append(svgCardBasket);
  var cardDetailsArea = document.createElement('div');
  cardDetailsArea.classList.add('cardDetailsArea');
  var priceWrapper = document.createElement('div');
  priceWrapper.classList.add('price-wrapper');
  var priceDiscounted = document.createElement('span');
  priceDiscounted.innerText = calculateDiscountedPrice(price, discount) + '€';
  priceDiscounted.classList.add('price-discounted');
  var priceNormal = document.createElement('span');
  priceNormal.innerText = "".concat(price, " \u20AC");
  priceNormal.classList.add('price-normal');
  var cardProductName = document.createElement('h4');
  cardProductName.innerText = name;
  cardProductName.classList.add('card-title');
  cardImageArea.append(cardImage, discountSpan, quickViewBtn, addToBasketBtn);
  priceWrapper.append(priceDiscounted, priceNormal);
  cardDetailsArea.append(priceWrapper, cardProductName);
  cardItem.append(cardImageArea, cardDetailsArea);
  cardsBlock.append(cardItem);
  quickViewBtn.addEventListener('click', function () {
    (0, _modal.showQuickView)({
      name: name,
      price: price,
      image: image,
      discount: discount
    });
  });
  addToBasketBtn.addEventListener('click', function () {
    (0, _basket.addToBasket)({
      name: name,
      price: price,
      image: image,
      discount: discount,
      id: id
    });
    (0, _modal.showNotification)('Item added to the basket');
  });
};
var calculateDiscountedPrice = function calculateDiscountedPrice(price, discount) {
  var discountedPrice = (price - price * (discount / 100)).toFixed(2);
  return discountedPrice;
};
exports.calculateDiscountedPrice = calculateDiscountedPrice;
var shuffleArray = function shuffleArray(array) {
  var newArray = _toConsumableArray(array);
  for (var i = 0; i < newArray.length; i++) {
    var randomIndex = Math.floor(Math.random() * (i + 1));
    var _ref2 = [newArray[randomIndex], newArray[i]];
    newArray[i] = _ref2[0];
    newArray[randomIndex] = _ref2[1];
  }
  return newArray;
};
var renderCards = function renderCards(cardsData) {
  var shuffledCards = shuffleArray(cardsData);
  for (var i = 0; i < 15; i++) {
    createCards(shuffledCards[i]);
  }
};
},{"./modal.js":"js/modal.js","./basket.js":"js/basket.js"}],"js/search.js":[function(require,module,exports) {
"use strict";

var _header = require("./header.js");
var _cards = require("./cards.js");
var handleSearch = function handleSearch(event) {
  var searchQuery = event.target.value.toLowerCase();
  var cards = Array.from(_cards.cardsBlock.querySelectorAll('.cards-item'));
  var slider = document.getElementsByClassName('swiper')[0];
  cards.forEach(function (card) {
    var name = card.querySelector('h4').innerText.toLowerCase();
    if (name.includes(searchQuery)) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
  if (searchQuery === '') {
    _header.searchInput.value = '';
    slider.style.display = 'block';
  } else {
    slider.style.display = 'none';
  }
};
_header.searchInput.addEventListener('input', handleSearch);
},{"./header.js":"js/header.js","./cards.js":"js/cards.js"}],"js/footer.js":[function(require,module,exports) {
var footer = document.getElementById('footer');
var footerArea = document.createElement('div');
footerArea.classList.add('footer_area');
var footerData = [{
  title: 'Company',
  items: [{
    text: 'About Us',
    link: '#'
  }, {
    text: 'Contact',
    link: '#'
  }, {
    text: 'Collaboration',
    link: '#'
  }, {
    text: 'Career',
    link: '#'
  }]
}, {
  title: 'To Customers',
  items: [{
    text: 'How to place order',
    link: '#'
  }, {
    text: 'Delivery terms',
    link: '#'
  }, {
    text: 'Product returns',
    link: '#'
  }]
}, {
  title: 'For Partners',
  items: [{
    text: 'Franchise',
    link: '#'
  }, {
    text: 'To Couriers',
    link: '#'
  }, {
    text: 'Partner Pickup Point',
    link: '#'
  }]
}, {
  title: 'Download our app',
  items: [{
    image: './style/assets/qr-code.png',
    link: '#'
  }]
}];
footerData.forEach(function (list) {
  var listContainer = document.createElement('div');
  listContainer.classList.add('footer-list');
  var listTitle = document.createElement('h4');
  listTitle.innerText = list.title;
  listContainer.append(listTitle);
  var ul = document.createElement('ul');
  list.items.forEach(function (item) {
    var li = document.createElement('li');
    li.classList.add('footer-li');
    var link = document.createElement('a');
    link.setAttribute('href', item.link);
    var qrImg = document.createElement('assets');
    qrImg.src = item.image;
    if (item.image) {
      link.append(qrImg);
    }
    if (item.text) {
      link.innerText = item.text;
    }
    li.append(link);
    ul.append(li);
  });
  listContainer.append(ul);
  footerArea.append(listContainer);
});
var copyRight = document.createElement('div');
var copyRightText = document.createTextNode('© Shop-Berry by Antonina Vechorko');
copyRight.classList.add('copyright');
copyRight.append(copyRightText);
footer.append(footerArea, copyRight);
},{}],"js/app.js":[function(require,module,exports) {
"use strict";

require("./header.js");
require("./cards.js");
require("./basket.js");
require("./modal.js");
require("./search.js");
require("./footer.js");
},{"./header.js":"js/header.js","./cards.js":"js/cards.js","./basket.js":"js/basket.js","./modal.js":"js/modal.js","./search.js":"js/search.js","./footer.js":"js/footer.js"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}
module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "58921" + '/');
  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);
    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);
          if (didAccept) {
            handled = true;
          }
        }
      });

      // Enable HMR for CSS by default.
      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });
      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }
    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        location.reload();
      };
    }
    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }
    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}
function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
  }
}
function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;

  // html encode message and stack trace
  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}
function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }
  var parents = [];
  var k, d, dep;
  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }
  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }
  return parents;
}
function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}
function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }
  if (checkedAssets[id]) {
    return;
  }
  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }
  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}
function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached) {
    cached.hot.data = bundle.hotData;
  }
  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }
  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });
    return true;
  }
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/app.js"], null)
//# sourceMappingURL=/app.c3f9f951.js.map