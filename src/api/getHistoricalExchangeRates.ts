import { Currency } from "./currencies";
import getExchangeRates from "./getExchangeRates";
import callExchangeRatesApi, { RatesResponse } from "./callExchangeRatesApi";

/**
 * Generates a list of dates in YYYY-MM-DD format from 1 year back to the given number of years back
 * The past dates have the same day and month as today's date, only a year changes
 * @param {number} yearsBack - How many years back do you want to generate dates
 */
function generateDatesInThePast(yearsBack: number): string[] {
    const today = new Date();
    const historicalDates: string[] = [];

    for (let i = 1; i <= yearsBack; i++) {
        const newDate = new Date(today.getTime())
        newDate.setMonth(newDate.getMonth() - i * 12)
        historicalDates.push(newDate.toISOString().slice(0, 10))
    }

    return historicalDates;
}

function getHistoricalExchangeRates(baseCurrency: Currency, targetCurrencies: Currency[] = []): Promise<Array<RatesResponse | Error>> {
    // Free API has request limitation, display only 4 years back 
    const historicalDates = generateDatesInThePast(4);

    return Promise.all([
        getExchangeRates(baseCurrency, targetCurrencies),
        ...historicalDates.map(date => {
            const params = {
                base: baseCurrency,
                symbols: targetCurrencies.toString()
            }
            return callExchangeRatesApi(date, new URLSearchParams(params))
        })]
    )
}

export default getHistoricalExchangeRates;