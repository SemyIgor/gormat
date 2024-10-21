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
    });

// document
//     .querySelector("#add-to-cart, pop-up")
//     .addEventListener("submit", function (event) {
//         event.preventDefault(); // Предотвращаем стандартное поведение формы

//         // Здесь можно добавить код для отправки данных на сервер
//         alert("Форма отправлена!");
//     });
