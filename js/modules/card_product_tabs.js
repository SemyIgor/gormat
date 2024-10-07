const productDescriptionInputs = document.querySelectorAll('.product-description__tabs .real-radio');

const inputsLength = productDescriptionInputs.length;

if(productDescriptionInputs.length > 0){
    productDescriptionInputs.forEach((input) => {
        input.addEventListener('change', (event) => {
            switchTabs()
        })
    })
}

function switchTabs() {
    const productDescriptionInfoes = document.querySelectorAll('.product-description__info');

    if(productDescriptionInfoes.length == inputsLength) {
        // Get ID of the pressed TAB
        const chechedProductId = event.target.dataset.productId;
    
        // Make all INFOs hidden
        productDescriptionInfoes.forEach((info) => {
            info.classList.add('info--hidden');
        })
    
        // Make INFO with ID equal checked ID
        productDescriptionInfoes.forEach((info) => {
            if(info.dataset.productId == chechedProductId){
                info.classList.remove('info--hidden');
    
            }
        })
    }
}