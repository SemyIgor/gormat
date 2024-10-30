const additionalAddress = document.querySelectorAll(
    ".profile .additional-address"
);

if (additionalAddress.length > 0) {
    // console.log("additionalAddress: ", additionalAddress);
    additionalAddress.forEach((address) => {
        address.addEventListener("click", (event) => {
            const toggleElements = event.currentTarget.querySelectorAll(
                ".profile-menu__arrow-up-img, .profile-menu__arrow-down-img, .content-block"
            );
            console.log("toggleElements: ", toggleElements);
            toggleElements.forEach((element) => {
                element.classList.toggle("display--none");
            });
        });
    });
}
