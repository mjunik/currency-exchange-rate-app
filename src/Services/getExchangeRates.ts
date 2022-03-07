import { Currency } from "./currencies";
import getRates, { RatesResponse } from "./getRates";

function getExchangeRates(baseCurrency: Currency, targetCurrencies: Currency[] = []): Promise<RatesResponse | Error> {
    return getRates('latest', baseCurrency, targetCurrencies);
}

export default getExchangeRates;