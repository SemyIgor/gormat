// Получаем кнопки и инпут в блоке product-buttons
const productMinusBtn = document.querySelector(
    ".product-buttons .product__btn--minus"
);
const productPlusBtn = document.querySelector(
    ".product-buttons .product__btn--plus"
);
const productInput = document.querySelector(".product-buttons .product-number");

// Получаем кнопки и инпут в блоке price-and-counter
const priceMinusBtn = document.querySelector(
    ".product-counter .product__btn--minus"
);
const pricePlusBtn = document.querySelector(
    ".product-counter .product__btn--plus"
);
const priceInput = document.querySelector(".product-counter .product-number");

// Добавляем обработчики событий в блоке product-buttons:
// Кнопка минус
productMinusBtn.addEventListener("click", function () {
    productInput.value = Math.max(1, parseInt(productInput.value) - 1);
    priceInput.value = productInput.value;
    // if(productInput.value == 1){
    //     productMinusBtn.style.backgroundColor = "#E6E6E7"
    //     priceMinusBtn.style.backgroundColor = "#E6E6E7"
    // }
});

// Кнопка плюс
productPlusBtn.addEventListener("click", function () {
    // if(productInput.value == 1){
    //     productMinusBtn.style.backgroundColor = "#ffffff"
    //     priceMinusBtn.style.backgroundColor = "#ffffff"
    // }
    productInput.value = parseInt(productInput.value) + 1;
    priceInput.value = productInput.value;
});

// Добавляем обработчики событий в блоке price-and-counter
// Кнопка минус
priceMinusBtn.addEventListener("click", function () {
    priceInput.value = Math.max(1, parseInt(priceInput.value) - 1);
    productInput.value = priceInput.value;
    // if (priceInput.value == 1) {
    //     priceMinusBtn.style.backgroundColor = "#E6E6E7";
    //     productMinusBtn.style.backgroundColor = "#E6E6E7";
    // }
});

// Кнопка плюс
pricePlusBtn.addEventListener("click", function () {
    // if (priceInput.value == 1) {
    //     priceMinusBtn.style.backgroundColor = "#ffffff";
    //     productMinusBtn.style.backgroundColor = "#ffffff";
    // }
    priceInput.value = parseInt(priceInput.value) + 1;
    productInput.value = priceInput.value;
});
