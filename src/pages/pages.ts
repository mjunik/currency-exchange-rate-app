import { FC } from "react";
import ExchangeCalculatorPage from "./exchangeCalculator/ExchangeCalculatorPage";
import ExchangeRatesPage from "./exchangeRates/ExchangeRatesPage";
import HistoricalExchangeRatesPage from "./historicalExchangeRates/HistoricalExchangeRatesPage";

export interface Page {
    title: string;
    path: string;
    component: FC;
}

const pages: Page[] = [
    { title: "Exchange calculator", path: "/", component: ExchangeCalculatorPage },
    { title: "Exchange rates", path: "/exchange-rates", component: ExchangeRatesPage },
    { title: "Historical exchange rates", path: "/historical-exchange-rates", component: HistoricalExchangeRatesPage },
];

export default pages;

