// Получаем кнопки и инпуты в блоках счётчиков, имеющих дубляж на странице
// Дубляж - это когда счётчик при изменении ширины экрана исчезает в одной
// точке DOM и возникает в другой точке DOM (как на стр. card_product.html)

// === Для страницы card_product.html ==============
const productMinusBtn = document.querySelector(
    ".product-buttons .product__btn--minus"
);
const productPlusBtn = document.querySelector(
    ".product-buttons .product__btn--plus"
);
const productInput = document.querySelector(".product-buttons .product-number");
// Получаем кнопки и инпут в блоке price-and-counter
const priceMinusBtn = document.querySelector(
    ".product-card .product-counter .product__btn--minus"
);
const pricePlusBtn = document.querySelector(
    ".product-card .product-counter .product__btn--plus"
);
const priceInput = document.querySelector(".product-counter .product-number");
// --- / Для страницы card_product.html ----------------

// Получаем кнопки и инпуты в блоках счётчиков, не имеющих дубляжа на странице
// === Для КОРЗИНЫ ==============================
const cartMinusBtns = document.querySelectorAll(
    ".cart .product-counter .product__btn--minus"
);
const cartPlusBtns = document.querySelectorAll(
    ".cart .product-counter .product__btn--plus"
);
// --- / Для КОРЗИНЫ ----------------------------

// === Для блока ИЗБРАННОЕ ===========================================
const uMinusBtns = document.querySelectorAll(".u-product__btn--minus");
const uPlusBtns = document.querySelectorAll(".u-product__btn--plus");
// --- / Для блока ИЗБРАННОЕ -----------------------------------------

// Если счётчик имеет дубль в другой точке страницы для card_product.html:
if (productMinusBtn && productPlusBtn && priceMinusBtn && pricePlusBtn) {
    // Добавляем обработчики событий в блоке product-buttons:
    // Кнопка минус
    productMinusBtn.addEventListener("click", function () {
        productInput.value = Math.max(1, parseInt(productInput.value) - 1);
        priceInput.value = productInput.value;
    });

    // Кнопка плюс
    productPlusBtn.addEventListener("click", function () {
        productInput.value = parseInt(productInput.value) + 1;
        priceInput.value = productInput.value;
    });

    // Добавляем обработчики событий в блоке price-and-counter
    // Кнопка минус
    priceMinusBtn.addEventListener("click", function () {
        priceInput.value = Math.max(1, parseInt(priceInput.value) - 1);
        productInput.value = priceInput.value;
    });

    // Кнопка плюс
    pricePlusBtn.addEventListener("click", function () {
        priceInput.value = parseInt(priceInput.value) + 1;
        productInput.value = priceInput.value;
    });
}
// === Для корзины (cart_person.html) ============================
if (cartMinusBtns.length > 0 && cartPlusBtns.length > 0) {
    // Добавляем обработчики событий в блоках счётчиков
    // Кнопки минус
    cartMinusBtns.forEach((cartMinusBtn) => {
        cartMinusBtn.addEventListener("click", (event) => {
            let clickedMinusNumber =
                event.target.parentElement.parentElement.querySelector(
                    ".product-number"
                );
            clickedMinusNumber.value = Math.max(
                1,
                parseInt(clickedMinusNumber.value) - 1
            );
        });
    });

    // Кнопки плюс
    cartPlusBtns.forEach((cartPlusBtn) => {
        cartPlusBtn.addEventListener("click", (event) => {
            let clickedPlusNumber =
                event.target.parentElement.parentElement.querySelector(
                    ".product-number"
                );
            clickedPlusNumber.value = parseInt(clickedPlusNumber.value) + 1;
        });
    });
}
// --- / Для корзины (cart_person.html) ----------------------------

// === Для favorites.html =======================================
if (uMinusBtns.length > 0 && uPlusBtns.length > 0) {
    // Для страницы favorites.html
    // Добавляем обработчики событий в блоках счётчиков
    // Кнопки минус
    uMinusBtns.forEach((uMinusBtn) => {
        uMinusBtn.addEventListener("click", (event) => {
            let counterNumber =
                event.target.parentElement.parentElement.querySelector(
                    ".u-product-number"
                );
            counterNumber.value = Math.max(
                1,
                parseInt(counterNumber.value) - 1
            );
        });
    });

    // Кнопки плюс
    uPlusBtns.forEach((uPlusBtn) => {
        uPlusBtn.addEventListener("click", (event) => {
            let counterNumber =
                event.target.parentElement.parentElement.querySelector(
                    ".u-product-number"
                );
            counterNumber.value = parseInt(counterNumber.value) + 1;
        });
    });
}
// --- / Для favorites.html -------------------------------------------
