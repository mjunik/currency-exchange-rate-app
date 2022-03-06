import Title from "antd/lib/typography/Title";
import { useEffect, useState } from "react";
import ErrorMsg from "../../Layouts/ErrorMsg";
import Spinner from "../../Layouts/Spinner";
import { Currency } from "../../Services/currencies";
import {
  ExchangeRatesResponse,
  getExchangeRate,
} from "../../Services/getExchangeRate";
import ExchangeRatesSelect from "./ExchangeRatesSelect";
import ExchangeRatesTable from "./ExchangeRatesTable";

function ExchangeRatesPage() {
  const [exchangeRates, setExchangeRates] = useState<ExchangeRatesResponse>();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const defaultCurrency = Currency.EUR;

  useEffect(() => {
    getData(defaultCurrency);
  }, []);

  async function getData(currency: Currency) {
    setIsLoading(true);

    await getExchangeRate(currency).then((data) => {
      data instanceof Error
        ? setExchangeRates(undefined)
        : setExchangeRates(data);
      setIsLoading(false);
    });
  }

  return (
    <>
      <Title>Exchange Rates</Title>

      <ExchangeRatesSelect
        currencyChanged={getData}
        currency={defaultCurrency}
      />

      {isLoading && <Spinner />}

      {!isLoading && exchangeRates && (
        <ExchangeRatesTable data={exchangeRates} />
      )}

      {!isLoading && !exchangeRates && <ErrorMsg />}
    </>
  );
}

export default ExchangeRatesPage;
