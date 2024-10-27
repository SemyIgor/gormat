let testVar = 0;
console.log("testVar: ", testVar);
// Changes mark !!!
document.addEventListener("DOMContentLoaded", () => {
    // const addToCartBtn = document.getElementById("add-to-cart__btn");
    const addToCartBtns = document.querySelectorAll(".open-pop-up--btn");

    if (addToCartBtns.length > 0) {
        console.log("addToCartBtns.length: ", addToCartBtns.length);
        addToCartBtns.forEach((btn) => {
            btn.addEventListener("click", function () {
                const src = this.getAttribute("data-src");
                Fancybox.show([
                    {
                        src: src,
                        type: "inline",
                        opts: {
                            Thumbs: {
                                autoStart: false,
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

                console.log("testVar: ", testVar);
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
    } else {
        console.log("Not found !");
    }
});

// document
//     .querySelector("#add-to-cart, pop-up")
//     .addEventListener("submit", function (event) {
//         event.preventDefault(); // Предотвращаем стандартное поведение формы

//         // Здесь можно добавить код для отправки данных на сервер
//         alert("Форма отправлена!");
//     });
