import { Currency } from "./currencies";
import getRates, { RatesResponse } from "./getRates";

function getExchangeRates(baseCurrency: Currency, targetCurrencies: Currency[] = []): Promise<RatesResponse | Error> {
    const params = {
        base: baseCurrency,
        symbols: targetCurrencies.toString()
    }

    return getRates('latest', new URLSearchParams(params));
}

export default getExchangeRates;