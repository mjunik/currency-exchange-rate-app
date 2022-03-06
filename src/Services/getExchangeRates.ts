import { Currency } from "./currencies";
import getRates, { RatesResponse } from "./getRates";

function getExchangeRates(currency: Currency): Promise<RatesResponse | Error> {
    return getRates('latest', currency);
}

export default getExchangeRates;