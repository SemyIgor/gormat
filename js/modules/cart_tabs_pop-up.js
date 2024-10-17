const registrationTabsPopUp = document.querySelectorAll(
    ".registration__tab.pop-up"
);

const registrationTabsPopUpLength = registrationTabsPopUp.length;

if (registrationTabsPopUpLength > 0) {
    registrationTabsPopUp.forEach((tab) => {
        tab.addEventListener("change", (event) => {
            changeTabPopUp();
        });
    });
}

function changeTabPopUp() {
    const forms = document.querySelectorAll(".registration__form.pop-up");

    if (forms.length == registrationTabsPopUpLength) {
        console.log("Равны");
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
