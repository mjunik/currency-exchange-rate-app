import Title from "antd/lib/typography/Title";
import { useEffect, useState } from "react";
import ApiLimitMsg from "../../Components/ApiLimitMsg";
import ErrorMsg from "../../Layouts/ErrorMsg";
import Spinner from "../../Layouts/Spinner";
import currencies, { Currency } from "../../Services/currencies";
import ExchangeCalculatorForm from "./ExchangeCalculatorForm";
import getExchangeRates from "../../Services/getExchangeRates";
import { RatesResponse } from "../../Services/getRates";
import ExchangeCalculatorConvertResult from "./ExchangeCalculatorConvertResult";
import ExchangeCalculatorTable, {
  ExchangeRatesTableRate,
} from "./ExchangeCalculatorTable";

export interface ConvertCalculationData {
  amount: number;
  baseCurrency: Currency;
  targetCurrency: Currency;
}

function ExchangeCalculatorPage() {
  const [exchangeRates, setExchangeRates] = useState<RatesResponse>();
  const [calculationData, setCalculationData] =
    useState<ConvertCalculationData>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [showError, setShowError] = useState<boolean>(false);

  function saveCalculationData(data: ConvertCalculationData) {
    setCalculationData(data as ConvertCalculationData);
  }

  useEffect(() => {
    if (calculationData) {
      getExchangeRatesForConvert(calculationData.baseCurrency);
    }
  }, [calculationData]);

  async function getExchangeRatesForConvert(baseCurrency: Currency) {
    setIsLoading(true);

    await getExchangeRates(baseCurrency, currencies).then((data) => {
      if (data instanceof Error) {
        setExchangeRates(undefined);
        setShowError(true);
      } else {
        setExchangeRates(data);
        setShowError(false);
      }

      setIsLoading(false);
    });
  }

  function getRatesForTable(): ExchangeRatesTableRate[] {
    if (!exchangeRates || !calculationData) {
      return [];
    }

    const { rates } = exchangeRates;

    return Object.keys(rates)
      .filter(
        (key) =>
          key !== calculationData.targetCurrency &&
          key !== calculationData.baseCurrency
      )
      .map((key) => ({ currency: key as Currency, rate: rates[key] }));
  }

  return (
    <>
      <Title>Exchange Calculator</Title>

      <ExchangeCalculatorForm handleFormSubmit={saveCalculationData} />

      <ApiLimitMsg />

      {isLoading && <Spinner />}

      {!isLoading && calculationData && exchangeRates && (
        <>
          <ExchangeCalculatorConvertResult
            targetCurrency={calculationData.targetCurrency}
            amount={calculationData.amount}
            date={exchangeRates.date}
            rate={exchangeRates.rates[calculationData?.targetCurrency]}
          />

          <ExchangeCalculatorTable
            amount={calculationData.amount}
            rates={getRatesForTable()}
          />
        </>
      )}

      {!isLoading && showError && <ErrorMsg />}
    </>
  );
}

export default ExchangeCalculatorPage;
