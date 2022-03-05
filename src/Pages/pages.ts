import { FC } from "react";
import ExchangeCalculatorPage from "./ExchangeCalculator/ExchangeCalculatorPage";
import ExchangeRatesPage from "./ExchangeRates/ExchangeRatesPage";
import HistoricalRatesPage from "./HistoricalRates/HistoricalRatesPage";

export interface Page {
    title: string;
    path: string;
    component: FC;
}

const pages: Page[] = [
    { title: "Exchange calculator", path: "/", component: ExchangeCalculatorPage },
    { title: "Exchange rates", path: "/exchange-rates", component: ExchangeRatesPage },
    { title: "Historical rates", path: "/historical-rates", component: HistoricalRatesPage },
];

export default pages;

