let body = document.querySelector(".js-body");
let button = document.querySelector(".js-body__button");
let text = document.querySelector(".js-button__text");

button.addEventListener("click", () => {
    body.classList.toggle("bodyDark");
    if (body.classList.contains("bodyDark")) {
        text.innerText = "jasne";
    } else {
        text.innerText = "ciemne";
    }

    //    text.innerText = body.classList.contains("bodyDark") ? "jasne" : "ciemne";
})


let formElement = document.querySelector(".js-form");
let amountElement = document.querySelector(".js-amount");
let currencyElement = document.querySelector(".js-currency");
let resultElement = document.querySelector(".js-result")

let rateEUR = 4.4278;
let rateGBP = 4.9384;
let rateUSD = 3.9058;

formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    let amount = +amountElement.value;
    let currency = currencyElement.value;

    let result;

    switch (currency) {
        case "EUR":
            result = amount / rateEUR;
            break;
        case "GBP":
            result = amount / rateGBP;
            break;
        case "USD":
            result = amount / rateUSD;
            break;
    }
    resultElement.innerHTML = `${amount.toFixed(2)} PLN = <strong> ${result.toFixed(2)} ${currency} </strong>`;
});


let day = document.querySelector(".day").innerText;
let howMuch = document.querySelector(".howMuch");

// if(day === "poniedziałek" || day === "wtorek") {
//     howMuch.innerText = "dużo";
// } else if (day === "środa" || day === "czwartek") {
//     howMuch.innerText = "trochę";
// } else {
//     howMuch.innerText = "mało";
// }
switch (day) {
    case "poniedziałek" :
    case "wtorek":
        howMuch.innerText = "dużo";
        break;
    case "środa":
    case "czwartek":
        howMuch.innerText = "trochę";
        break;
    default:
        howMuch.innerText = "mało";
}


