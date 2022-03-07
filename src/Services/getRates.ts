import { Currency } from "./currencies";

export interface ExchangeRate {
    [key: string]: number;
}

export interface RatesResponse {
    success: boolean;
    timestamp: number;
    base: Currency;
    date: string;
    rates: ExchangeRate;
}

function getRates(endpoint: string, baseCurrency: Currency, targetCurrencies: Currency[] = []): Promise<RatesResponse | Error> {
    return fetch(
        process.env.REACT_APP_REST_URI + '/'
        + endpoint
        + '?access_key=' + process.env.REACT_APP_REST_KEY
        + '&base=' + baseCurrency
        + '&symbols=' + targetCurrencies.join())
        .then(res => res.ok ? res.json() : new Error('Something went wrong'))
}

export default getRates;
