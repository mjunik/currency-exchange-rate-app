import { Currency } from "./currencies";
import callExchangeRatesApi, { RatesResponse } from "./callExchangeRatesApi";

function getExchangeRates(baseCurrency: Currency, targetCurrencies: Currency[] = []): Promise<RatesResponse | Error> {
    const params = {
        base: baseCurrency,
        symbols: targetCurrencies.toString()
    }

    return callExchangeRatesApi('latest', new URLSearchParams(params));
}

export default getExchangeRates;