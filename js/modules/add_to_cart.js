const addToCartBtn = document.getElementById("add-to-cart__btn");
let testVar = 0;
console.log("testVar: ", testVar);

if (addToCartBtn) {
    document.addEventListener("DOMContentLoaded", () => {
        document
            .getElementById("add-to-cart__btn")
            .addEventListener("click", function () {
                Fancybox.show([
                    {
                        src: "#add-to-cart",
                        type: "inline",
                        opts: {
                            Thumbs: {
                                autoStart: false,
                            },
                            Toolbar: {
                                display: {
                                    left: [],
                                    middle: [],
                                    right: [],
                                },
                            },
                            Carousel: {
                                Friction: 0.8,
                            },
                            autoFocus: false,
                            on: {
                                done: (fancybox, slide) => {
                                    console.log(`Всплывающее окно открыто!`);
                                    document.activeElement.blur();
                                },
                            },
                        },
                    },
                ]);

                testVar++;
                console.log("testVar: ", testVar);
                const plusBtns = document.querySelectorAll(
                    ".goods.pop-up .product__btn--plus"
                );
                const minusBtns = document.querySelectorAll(
                    ".goods.pop-up .product__btn--minus"
                );

                function minusCounter(event) {
                    let clickedMinusNumber =
                        event.target.parentElement.parentElement.querySelector(
                            ".product-number"
                        );
                    clickedMinusNumber.value = Math.max(
                        1,
                        parseInt(clickedMinusNumber.value) - 1
                    );
                }

                function plusCounter(event) {
                    let clickedPlusNumber =
                        event.target.parentElement.parentElement.querySelector(
                            ".product-number"
                        );
                    clickedPlusNumber.value =
                        parseInt(clickedPlusNumber.value) + 1;
                }
                /*
                // // Удаляем обработчики событий в блоках счётчиков
                // // Кнопки минус
                // minusBtns.forEach((minusBtn) => {
                //     minusBtn.removeEventListener("click", minusCounter);
                // });

                // // Кнопки плюс
                // plusBtns.forEach((plusBtn) => {
                //     plusBtn.removeEventListener("click", plusCounter);
                // });
                */

                if (testVar == 1) {
                    // Добавляем обработчики событий в блоках счётчиков
                    // Кнопки минус
                    minusBtns.forEach((minusBtn) => {
                        minusBtn.addEventListener("click", minusCounter);
                    });

                    // Кнопки плюс
                    plusBtns.forEach((plusBtn) => {
                        plusBtn.addEventListener("click", plusCounter);
                    });
                }
            });
    });
}

// document
//     .querySelector("#add-to-cart, pop-up")
//     .addEventListener("submit", function (event) {
//         event.preventDefault(); // Предотвращаем стандартное поведение формы

//         // Здесь можно добавить код для отправки данных на сервер
//         alert("Форма отправлена!");
//     });
