// Функция открытия / закрытия закладок с адресами
function addressTabs() {
    const additionalAddressTitles = document.querySelectorAll(
        ".profile .additional-address .profile-menu__title"
    );

    if (additionalAddressTitles.length > 0) {
        additionalAddressTitles.forEach((title) => {
            title.addEventListener("click", (event) => {
                const deleteBtn = title.querySelector(
                    ".additional-address--delete-btn"
                );
                if (!ifHaveThisParent(event, deleteBtn)) {
                    const toggleElements =
                        event.currentTarget.parentElement.querySelectorAll(
                            ".profile-menu__arrow-up-img, .profile-menu__arrow-down-img, .content-block"
                        );

                    toggleElements.forEach((element) => {
                        element.classList.toggle("display--none");
                    });
                }
            });
        });
    }
}

// Функция проверки наличия определённого родителя у элемента
function ifHaveThisParent(event, parent) {
    const element = event.target;

    let currentElement = element;
    while (currentElement) {
        if (currentElement == parent) {
            return true;
        }
        currentElement = currentElement.parentElement;
    }
    return false;
}

// Функция подавления ховера на галочке при наведении на корзину (delete)
function hoverCartCheckMarkHoverPrevent() {
    const additionalAddressDeleteBtns = document.querySelectorAll(
        ".additional-address--delete-btn"
    );

    if (additionalAddressDeleteBtns.length > 0) {
        additionalAddressDeleteBtns.forEach((btn) => {
            btn.addEventListener("click", (event) => {
                event.preventDefault();
            });

            btn.addEventListener("mouseenter", (event) => {
                const checkMarks =
                    event.currentTarget.parentElement.parentElement.querySelectorAll(
                        ".profile-menu__arrow-up-img svg, .profile-menu__arrow-down-img svg"
                    );
                checkMarks.forEach((mark) => {
                    mark.style.stroke = "white";
                });
            });

            btn.addEventListener("mouseleave", (event) => {
                const checkMarks =
                    event.currentTarget.parentElement.parentElement.querySelectorAll(
                        ".profile-menu__arrow-up-img svg, .profile-menu__arrow-down-img svg"
                    );
                checkMarks.forEach((mark) => {
                    mark.style.stroke = "";
                });
            });
        });
    }
}

// Функция управления редактированием адреса
function editAddress() {
    // Кнопка "Назначить по умолчанию"
    const setDefaultAddressBtns = document.querySelectorAll(
        ".set-default-address-btn"
    );
    // Кнопка "Редактировать данные"
    const editAddressBtns = document.querySelectorAll(".edit-address-btn");

    // Кнопка "Подтвердить изменения"
    const confirmAddressBtns = document.querySelectorAll(
        ".confirm-address-btn"
    );

    // Обработка нажатия кнопки "Редактировать данные"
    editAddressBtns.forEach((btn) => {
        btn.addEventListener("click", (event) => {
            // Для предотвращения скроллинга страницы
            event.preventDefault();

            startEditAddress(btn);
        });
    });

    // Обработка нажатия кнопки "Подтвердить изменения"
    confirmAddressBtns.forEach((btn) => {
        btn.addEventListener("click", (event) => {
            // Для предотвращения скроллинга страницы
            event.preventDefault();

            completeEditAddress(btn);
        });
    });
}

// Функция разрешения редактирования адреса
function startEditAddress(btn) {
    // Находим соседнюю кнопку подтверждения смены адреса
    const confirmAddressBtn = btn.parentElement.querySelector(
        ".confirm-address-btn"
    );
    // Находим элемент, отвечающий за стили полей input адреса
    const registrationRequisites =
        btn.parentElement.parentElement.querySelector(
            ".registration__requisites"
        );
    // Устанавливаем стили редактируемых полей
    registrationRequisites.classList.remove("no-edit");

    // Меняем видимость кнопок: вместо редактирования будет подтверждение
    btn.classList.add("display--none");
    confirmAddressBtn.classList.remove("display--none");

    // Находим все input выбранного адреса
    const toEditInputFields = btn.parentElement.parentElement.querySelectorAll(
        ".requisites-item input"
    );

    // Делаем найденные input редактируемыми
    toEditInputFields.forEach((field) => {
        field.disabled = false;
        field.required = true;
    });
}

// Функция завершения редактирования адреса
function completeEditAddress(btn) {
    // Находим соседнюю кнопку редактирования адреса
    const editAddressBtn = btn.parentElement.querySelector(".edit-address-btn");

    // Находим элемент, отвечающий за стили полей input адреса
    const registrationRequisites =
        btn.parentElement.parentElement.querySelector(
            ".registration__requisites"
        );
    // Устанавливаем стили редактируемых полей
    registrationRequisites.classList.add("no-edit");

    // Меняем видимость кнопок: вместо подтверждения будет редактирование
    btn.classList.add("display--none");
    editAddressBtn.classList.remove("display--none");

    // Находим все input выбранного адреса
    const toCompleteEditInputFields =
        btn.parentElement.parentElement.querySelectorAll(
            ".requisites-item input"
        );

    // Делаем найденные инпуты нередактируемыми
    toCompleteEditInputFields.forEach((field) => {
        field.disabled = true;
        field.required = false;
    });
}

// Функция обработки меню выбора модуля ЛК (Личного Кабинета)
function profileMenu() {
    // Находим все пункты меню
    const profileMenuList = document.querySelectorAll(
        ".profile-menu__list input"
    );

    profileMenuList.forEach((item) => {
        item.addEventListener("change", (event) => {
            const chosenDataSet = event.target.dataset.menu;

            changePageTitle(chosenDataSet);
            changeProfileModule(chosenDataSet);
        });
    });
}

// Функция смены заголовка страницы
function changePageTitle(chosenDataSet) {
    // Находим все варианты заголовков страницы
    const pageTitles = document.querySelectorAll(".page-title");
    pageTitles.forEach((title) => {
        title.classList.add("display--none");
        if (title.dataset.menu == chosenDataSet) {
            title.classList.remove("display--none");
        }
    });
}

// Функция смены блока ЛК
function changeProfileModule(chosenDataSet) {
    // Находим все модули профиля
    const profileModules = document.querySelectorAll(".profile-module");
    profileModules.forEach((module) => {
        module.classList.add("display--none");
        if (module.dataset.menu == chosenDataSet) {
            module.classList.remove("display--none");
        }
    });
}

addressTabs();

hoverCartCheckMarkHoverPrevent();

profileMenu();

editAddress();
