document
    .getElementById("open-authorization__pop-up-form")
    .addEventListener("click", function () {
        Fancybox.show([
            {
                src: "#authorization__pop-up-form",
                type: "inline",
                opts: {
                    Thumbs: {
                        autoStart: false,
                    },
                    Toolbar: {
                        display: {
                            left: [],
                            middle: [],
                            right: ["close"],
                        },
                    },
                    Carousel: {
                        Friction: 0.8,
                    },
                    on: {
                        done: (fancybox, slide) => {
                            console.log(`Всплывающее окно открыто!`);
                        },
                    },
                },
            },
        ]);
    });

document
    .querySelector("#authorization__pop-up-form form")
    .addEventListener("submit", function (event) {
        event.preventDefault(); // Предотвращаем стандартное поведение формы

        // Здесь можно добавить код для отправки данных на сервер
        alert("Форма отправлена!");
    });
