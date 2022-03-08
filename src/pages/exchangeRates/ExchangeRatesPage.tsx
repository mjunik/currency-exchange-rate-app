import Title from "antd/lib/typography/Title";
import { useEffect, useState } from "react";
import ErrorMsg from "../../layouts/ErrorMsg";
import Spinner from "../../layouts/Spinner";
import { Currency } from "../../api/currencies";
import { RatesResponse } from "../../api/callExchangeRatesApi";
import ExchangeRatesTable from "./ExchangeRatesTable";
import CurrencySelect from "../../components/CurrencySelect";
import getExchangeRates from "../../api/getExchangeRates";
import ApiLimitMsg from "../../components/ApiLimitMsg";

function ExchangeRatesPage() {
  const [exchangeRates, setExchangeRates] = useState<RatesResponse>();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const defaultCurrency = Currency.EUR;

  useEffect(() => {
    getData(defaultCurrency);
  }, []);

  async function getData(currency: Currency) {
    setIsLoading(true);

    await getExchangeRates(currency).then((data) => {
      data instanceof Error
        ? setExchangeRates(undefined)
        : setExchangeRates(data);
      setIsLoading(false);
    });
  }

  return (
    <>
      <Title>Exchange Rates</Title>

      <div>
        <CurrencySelect currencyChanged={getData} currency={defaultCurrency} />
      </div>

      <ApiLimitMsg />

      {isLoading && <Spinner />}

      {!isLoading && exchangeRates && (
        <ExchangeRatesTable data={exchangeRates} />
      )}

      {!isLoading && !exchangeRates && <ErrorMsg />}
    </>
  );
}

export default ExchangeRatesPage;
