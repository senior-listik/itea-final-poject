// burger menu
const mainElement = document.querySelector('main');
const burgerIcon = document.querySelector('.header__icon');
const headerNav = document.querySelector('.header__nav');
const headerMenu = document.querySelector('.header__menu');

burgerIcon.addEventListener('click', showMenu);
headerMenu.addEventListener('click', hideMenu);

function showMenu() {
    headerNav.classList.toggle('visible');
    burgerIcon.classList.toggle('icon-close');
    burgerIcon.classList.toggle('icon-burger')
}
function hideMenu() {
    headerNav.classList.remove('visible');
    burgerIcon.classList.toggle('icon-close');
    burgerIcon.classList.toggle('icon-burger');
}


mainElement.addEventListener('click', function () {
    if (headerNav.classList.contains('visible')) {
        hideMenu();
    }
});



// show/hide accordion elements of account block (order section)

const accordion = document.querySelector('.order__account-accordion');
const loginAccordion = document.querySelector('.order__account-login');
const SignInAccordion = document.querySelector('.order__account-signin');
const accountLoginBtn = document.querySelector('.order__logBtn');
const accountSignInBtn = document.querySelector('.order__signBtn');
const accountLoginInp = document.getElementById('login');

mainElement.addEventListener('click', hideForm); // hide the form when clicking on the document
// prevent the form from closing when clicking on the form itself
accordion.addEventListener('click', (event) => { event.stopPropagation() });


accountLoginBtn.addEventListener('click', showHideLoginForm); // click on btn
accountSignInBtn.addEventListener('click', showHideSignInForm); // click on btn

// open/close forms with a delay to prevent both forms from opening at the same time
function showHideLoginForm() {
    if (SignInAccordion.classList.contains('hidden')) {
        loginAccordion.classList.toggle('hidden');
    } else {
        setTimeout(() => {loginAccordion.classList.toggle('hidden')}, 500);
        SignInAccordion.classList.add('hidden');
    }
};

function showHideSignInForm() {
     if (loginAccordion.classList.contains('hidden')) {
    SignInAccordion.classList.toggle('hidden');
     } else {
         setTimeout(() => {SignInAccordion.classList.toggle('hidden')}, 500);
     loginAccordion.classList.add('hidden');
     }
};


    // hide the form when clicking on the document
    function hideForm() {
    if (loginAccordion.classList.contains('hidden') === false) {
        loginAccordion.classList.add('hidden');
    } 
    if (SignInAccordion.classList.contains('hidden') === false) {
        SignInAccordion.classList.add('hidden');
    }
};

// Accordion
const accordionTitle = document.querySelectorAll('.accordion__item');

accordionTitle.forEach((el) => { el.addEventListener('click', showForm)});
function showForm(){
    this.nextElementSibling.classList.toggle('hidden');
    this.lastElementChild.classList.toggle('rotate');
}

// when click on the get promo code button, we generate a new promo code
const getPromocodeBtn = document.querySelector('.modal__getPromoBtn');
const applyPromocodeBtn = document.querySelector('.modal__applyPromoBtn');
const promocodeInfo = document.querySelector('.modal__promocode');
const appliedPromocode = document.getElementById('promocode');
let promocode;

getPromocodeBtn.addEventListener('click', generatePromoCode);

// when clicking on apply, transfer the promo code to the order, 
// change the apply button to get promo code and close the modal window

applyPromocodeBtn.addEventListener('click', applyPromoCode);
applyPromocodeBtn.addEventListener('click', toggleModalVisible);

function generatePromoCode() {
    if (appliedPromocode.outerText == '# xxxx xxxx') {
        
        applyPromocodeBtn.classList.remove('hide');
        getPromocodeBtn.classList.add('hide');

        promocode = ''
        for (i = 0; i < 8; i++){
            promocode += Math.round(Math.random() * 10);
        }
        promocodeInfo.innerText = promocode;
    } else {
        promocodeInfo.innerText = 'Your promo code already applied';
    }

}
function applyPromoCode() {
    appliedPromocode.innerText = ' #' + promocode;
    promocodeInfo.innerText = '';
    applyPromocodeBtn.classList.add('hide');
    getPromocodeBtn.classList.remove('hide');
    
}

// choice of pizza type and quantity + cost calculation
const select = document.querySelector('#customize');
const nameOfPizza = document.querySelector('.name-pizza');
const option = document.querySelectorAll('#customize option');
const numberOfPizza = document.getElementById('number-pizza');
const addNumber = document.getElementById('add-number');
const subrtactNumber = document.getElementById('sub-number');
const sumCost = document.getElementById('sum');
const discountPrice = document.getElementById('discount-price');
const billTotalPrice = document.querySelector('.bill__totalPrice');
const billToPay = document.querySelector('.bill__toPayPrice');
const billTax = document.querySelector('.bill__taxPrice');
const billDiscount = document.querySelector('.bill__discountPrice');

let counter = 1;
let optionText;
let pizzaCost;
let sum;
let discount = 1;
let tax = 0.2;




// put data about pizzas in local storage
localStorage.setItem('Picantina', 4.8);
localStorage.setItem('Margarita', 4.5);
localStorage.setItem('Hawaiian', 5.0);
localStorage.setItem('Veggie', 4.3);
localStorage.setItem('Cheese Pizza', 3.5);
localStorage.setItem('Meat Pizza', 5.2);

// when changing the type of pizza, we write its name in the title, and leave the select value the same
select.addEventListener('change', function () {
    optionText = option[select.value].text;
    
    for (let i = 0; i < optionText.length; ++i){
 
        if (optionText[i] == ' ' ) {
           nameOfPizza.innerHTML = optionText.slice(0, -(optionText.length - i));
        }

}
    select.value = 0;
    pizzaCost = Number(localStorage.getItem(nameOfPizza.outerText));
    
});

addNumber.addEventListener('click', function () {
    if (counter >= 1 && counter < 7) {
        counter += 1;
    numberOfPizza.innerText = counter;
    }
    
});
subrtactNumber.addEventListener('click', function () {
    if (counter > 1) {
       counter -= 1;
    numberOfPizza.innerText = counter; 
    }
    
});
select.addEventListener('change', calcSum);
subrtactNumber.addEventListener('click', calcSum);
addNumber.addEventListener('click', calcSum);
applyPromocodeBtn.addEventListener('click', calcSum);

// order cost calculation and bill generation
function calcSum() {
    if (pizzaCost !== undefined && appliedPromocode.outerText == '# xxxx xxxx') {
        sum = (pizzaCost * counter).toFixed(1);
        billDiscount.innerText = '0';
        billTax.innerText = '%' + tax * 100;
        billTotalPrice.innerText = '$' + sum;
        billToPay.innerText = '$' + (sum - (sum * tax)).toFixed(1);
    } else if (pizzaCost !== undefined && appliedPromocode.outerText != '# xxxx xxxx') {
        discount = 0.3;
        sum = (pizzaCost * counter).toFixed(1);
        sumCost.innerText = sum + '$';
        billDiscount.innerText = '- %' + discount * 100;
        billTax.innerText = '%' + tax * 100;
        discountPrice.innerText = (sum - (sum * discount)).toFixed(1) + '$';
        billTotalPrice.innerText = '$' + (sum - (sum * discount)).toFixed(1);
        billToPay.innerText = '$' + ((sum - (sum * discount)) + (sum * tax)).toFixed(1);
    }
};

// open the modal coupon by clicking the link in the navigation menu
const couponLink = document.getElementById('coupon');
const couponModal = document.querySelector('.modal');
const modalBody = document.querySelector('.modal__body');
const modalCloseBtn = document.querySelector('#close_modal_btn');

couponLink.addEventListener('click', toggleModalVisible);

modalCloseBtn.addEventListener('click', toggleModalVisible);
couponModal.addEventListener('click', toggleModalVisible);
modalBody.addEventListener('click', (event)=>{event.stopPropagation()})

function toggleModalVisible(event) {

    event.preventDefault();
    couponModal.classList.toggle('hide');
}


