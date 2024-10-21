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

// Получаем кнопки и инпуты в блоках счётчиков, не имеющих дубляжа на странице
// Дубляж - это когда счётчик при изменении ширины экрана исчезает в одной
// точке DOM и возникает в другой точке DOM (как на стр. card_product.html)

const priceMinusBtns = document.querySelectorAll(
    ".product-counter .product__btn--minus"
);

const pricePlusBtns = document.querySelectorAll(
    ".product-counter .product__btn--plus"
);

const priceInputs = document.querySelectorAll(
    ".product-counter .product-number"
);

// Если счётчик имеет дубль в другой точке страницы:
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
} else if (priceMinusBtn && pricePlusBtn) {
    // Добавляем обработчики событий в блоках счётчиков
    // Кнопки минус
    priceMinusBtns.forEach((priceMinusBtn) => {
        priceMinusBtn.addEventListener("click", (event) => {
            console.log("Минус");
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
    pricePlusBtns.forEach((pricePlusBtn) => {
        pricePlusBtn.addEventListener("click", (event) => {
            let clickedPlusNumber =
                event.target.parentElement.parentElement.querySelector(
                    ".product-number"
                );
            clickedPlusNumber.value = parseInt(clickedPlusNumber.value) + 1;
        });
    });
}

// Находим общий блок
const productButtonsPopUp = document.querySelector(".product-buttons.pop-up");
console.log("productButtonsPopUp: ", productButtonsPopUp);

// Навешиваем на него слушатель
// productButtonsPopUp.addEventListener("click", () => {
//     console.log("Кликнули");
//     const addToCartPopUp = productButtonsPopUp.querySelector(
//         ".add-to-cart.pop-up"
//     );
//     console.log("addToCartPopUp: ", addToCartPopUp);

//     // const minusBtns = addToCartPopUp.querySelectorAll(
//     //     ".goods-items.pop-up .product__btn--minus"
//     // );
//     // console.log("minusBtns: ", minusBtns.length);
// });
