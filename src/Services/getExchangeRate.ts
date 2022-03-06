import { Currency } from "./currencies";

export interface ExchangeRate {
    [key: string]: number;
}

export interface ExchangeRatesResponse {
    success: boolean;
    timestamp: number;
    base: Currency;
    date: string;
    rates: ExchangeRate;
}

export function getExchangeRate(currency: Currency): Promise<ExchangeRatesResponse> | Promise<Error> {
    return fetch(process.env.REACT_APP_REST_URI
        + '/latest?access_key=' + process.env.REACT_APP_REST_KEY
        + '&base=' + currency)
        .then(res => res.ok ? res.json() : new Error('Something went wrong'))
}