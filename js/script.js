// Form Elements
const nameInput = document.querySelector(".i-form__name .i-form__input");
const cardNumberInput = document.querySelector(".i-form__card-number .i-form__input");
const expMonthInput = document.querySelector(".i-form__exp-date .i-form__input:nth-child(1)");
const expYearInput = document.querySelector(".i-form__exp-date .i-form__input:nth-child(2)");
const cvcInput = document.querySelector(".i-form__cvc .i-form__input");

const nameErrorBox = document.querySelector(".i-form__name .i-form__error-box");
const cardNumberErrorBox = document.querySelector(".i-form__card-number .i-form__error-box");
const expErrorBox = document.querySelector(".i-form__exp-date .i-form__error-box");
const cvcErrorBox = document.querySelector(".i-form__cvc .i-form__error-box");

const submitBtn = document.querySelector(".i-form__submit");

// Card Details Elements
const cardNumber = document.querySelector(".i-cards__front-details__card-number");
const cardName = document.querySelector(".i-cards__front-details__name");
const expMonth = document.querySelector(".i-cards__front-details__exp-month");
const expYear = document.querySelector(".i-cards__front-details__exp-year");
const cardCvc = document.querySelector(".i-cards__back-details__cvc");

// Div Elements
const formPre = document.querySelector(".i-form-pre");
const formPost = document.querySelector(".i-form-post");

// Card Number Dynamic Formatting
function updateCardNumber(number) {
    if (number === "") {
        cardNumber.textContent = "0000 0000 0000 0000";
    } else {
        cardNumber.textContent = number;
    };
};

cardNumberInput.addEventListener('keyup', (e) => {
    var noSpaceValue = cardNumberInput.value.replace(/\s/g, "");
    if ((noSpaceValue.length > 0) && (noSpaceValue.length < 16) && (cardNumberInput.value.charAt(cardNumberInput.value.length - 1) !== " ") && (e.key !== "Backspace")) {
        cardNumberInput.value = noSpaceValue.replace(/(.{4})/g,"$1 ")
    };
    updateCardNumber(cardNumberInput.value);
});

// Name Dynamic Formatting
function updateName(name) {
    if (name === "") {
        cardName.textContent = "Jane Appleseed";
    } else {
        cardName.textContent = name;
    };
};

nameInput.addEventListener('keyup', () => {
    updateName(nameInput.value);
});

// Expiration Date Dynamic Formatting
function updateExp(month, year) {
    if (month === "") {
        expMonth.textContent = "00";
    } else {
        expMonth.textContent = month;
    };
    if (year === "") {
        expYear.textContent = "00";
    } else {
        expYear.textContent = year;
    };
};

expMonthInput.addEventListener('keyup', () => {
    updateExp(expMonthInput.value, expYearInput.value);
});
expYearInput.addEventListener('keyup', () => {
    updateExp(expMonthInput.value, expYearInput.value);
});

// CVC Dynamic Formatting
function updateCvc(cvc) {
    if (cvc === "") {
        cardCvc.textContent = "000";
    } else {
        cardCvc.textContent = cvc;
    };
};

cvcInput.addEventListener('keyup', () => {
    updateCvc(cvcInput.value);
});

// Error Handling
submitBtn.addEventListener('click', () => {
    var submit = true;

    // Name
    if (nameInput.value === "") {
        nameInput.classList.add("i-form__input--error");
        nameErrorBox.textContent = "Can't be blank";
        submit = false;
    } else {
        nameInput.classList.remove("i-form__input--error");
        nameErrorBox.textContent = "";
    };

    // Card Number
    if (cardNumberInput.value === "") {
        cardNumberInput.classList.add("i-form__input--error");
        cardNumberErrorBox.textContent = "Can't be blank";
        submit = false;
    } else if (!/^\d{4} \d{4} \d{4} \d{4}$/.test(cardNumberInput.value)) {
        cardNumberInput.classList.add("i-form__input--error");
        cardNumberErrorBox.textContent = "Wrong format, numbers only";
        submit = false;
    } else {
        cardNumberInput.classList.remove("i-form__input--error");
        cardNumberErrorBox.textContent = "";
    };

    // Expiration Date
    expMonthInput.classList.remove("i-form__input--error");
    expYearInput.classList.remove("i-form__input--error");
    expErrorBox.textContent = "";

    if (expMonthInput.value === "") {
        expMonthInput.classList.add("i-form__input--error");
        expErrorBox.textContent = "Can't be blank";
        submit = false;
    } else if (!/^\d{2}$/.test(expMonthInput.value)) {
        expMonthInput.classList.add("i-form__input--error");
        expErrorBox.textContent = "Wrong format, numbers only";
        submit = false;
    };
    if (expYearInput.value === "") {
        expYearInput.classList.add("i-form__input--error");
        expErrorBox.textContent = "Can't be blank";
        submit = false;
    } else if (!/^\d{2}$/.test(expYearInput.value)) {
        expYearInput.classList.add("i-form__input--error");
        expErrorBox.textContent = "Wrong format, numbers only";
        submit = false;
    };

    // CVC
    if (cvcInput.value === "") {
        cvcInput.classList.add("i-form__input--error");
        cvcErrorBox.textContent = "Can't be blank";
        submit = false;
    } else if (!/^\d{3}$/.test(cvcInput.value)) {
        cvcInput.classList.add("i-form__input--error");
        cvcErrorBox.textContent = "Wrong format, numbers only";
        submit = false;
    } else {
        cvcInput.classList.remove("i-form__input--error");
        cvcErrorBox.textContent = "";
    };

    // Next
    if (submit) {
        formPre.classList.add("hidden");
        formPost.classList.remove("hidden");

        // In case
        updateName(nameInput.value);
        updateCardNumber(cardNumberInput.value);
        updateExp(expMonthInput.value, expYearInput.value);
        updateCvc(cvcInput.value);
    };
});

// Init
updateName(nameInput.value);
updateCardNumber(cardNumberInput.value);
updateExp(expMonthInput.value, expYearInput.value);
updateCvc(cvcInput.value);