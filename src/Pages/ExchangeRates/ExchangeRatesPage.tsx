import Title from "antd/lib/typography/Title";
import { useEffect, useState } from "react";
import ErrorMsg from "../../Layouts/ErrorMsg";
import Spinner from "../../Layouts/Spinner";
import { Currency } from "../../Services/currencies";
import { RatesResponse } from "../../Services/getRates";
import ExchangeRatesTable from "./ExchangeRatesTable";
import CurrencySelect from "../../Components/CurrencySelect";
import getExchangeRates from "../../Services/getExchangeRates";

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

      {isLoading && <Spinner />}

      {!isLoading && exchangeRates && (
        <ExchangeRatesTable data={exchangeRates} />
      )}

      {!isLoading && !exchangeRates && <ErrorMsg />}
    </>
  );
}

export default ExchangeRatesPage;
