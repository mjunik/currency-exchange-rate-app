import { Currency } from "./currencies";
import getRates, { RatesResponse } from "./getRates";

/**
 * Generates a list of dates in YYYY-MM-DD format from today's date to the given number of years back
 * The past dates have the same day and month as today's date, only a year changes
 * @param {number} yearsBack - How many years back do you want to generate dates
 */
function generateDatesInThePast(yearsBack: number): string[] {
    const today = new Date();
    const historicalDates: string[] = [];

    for (let i = 0; i <= yearsBack; i++) {
        const newDate = new Date(today.getTime())
        newDate.setMonth(newDate.getMonth() - i * 12)
        historicalDates.push(newDate.toISOString().slice(0, 10))
    }

    return historicalDates;
}

function getHistoricalExchangeRates(baseCurrency: Currency, secondCurrency: Currency): Promise<Array<RatesResponse | Error>> {
    // Free API has request limitation, display only 5 
    const historicalDates = generateDatesInThePast(4);

    return Promise.all(historicalDates.map(date => getRates(date, baseCurrency, [secondCurrency])))
}

export default getHistoricalExchangeRates;