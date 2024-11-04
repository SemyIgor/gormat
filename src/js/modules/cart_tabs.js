function registrationTabs() {
    const registrationTabs = document.querySelectorAll(
        ".cart .registration__tab"
    );

    const registrationTabsLength = registrationTabs.length;

    if (registrationTabsLength > 0) {
        registrationTabs.forEach((tab) => {
            tab.addEventListener("change", (event) => {
                changeTab();
            });
        });
    }

    function changeTab() {
        const forms = document.querySelectorAll(
            ".cart .registration__form, .cart.authorization__form"
        );

        if (forms.length == registrationTabsLength * 2) {
            // Get data-client value of the checked box
            const chechedBox =
                event.target.parentElement.parentElement.dataset.client;

            // Make all forms hidden
            forms.forEach((form) => {
                form.classList.add("info--hidden");
            });

            // Make form with data-client equal checked data-client
            forms.forEach((form) => {
                if (form.dataset.client == chechedBox) {
                    form.classList.remove("info--hidden");
                }
            });
        }
    }
}

registrationTabs();
