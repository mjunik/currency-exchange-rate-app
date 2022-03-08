export enum Currency {
    "AUD" = "AUD",
    "CAD" = "CAD",
    "CHF" = "CHF",
    "CNY" = "CNY",
    "GBP" = "GBP",
    "JPY" = "JPY",
    "USD" = "USD",
    "EUR" = "EUR",
    "PLN" = "PLN"
}

const currencies = Object.values(Currency).sort();

export default currencies;