import Text from "antd/lib/typography/Text";
import Title from "antd/lib/typography/Title";
import { useState } from "react";
import ApiLimitMsg from "../../Components/ApiLimitMsg";
import ErrorMsg from "../../Layouts/ErrorMsg";
import Spinner from "../../Layouts/Spinner";
import { Currency } from "../../Services/currencies";
import getHistoricalExchangeRates from "../../Services/getHistoricalExchangeRates";
import { RatesResponse } from "../../Services/getRates";
import HistoricalExchangeRatesCurrentRate from "./HistoricalExchangeRatesCurrentRate";

import HistoricalExchangeRatesSelect from "./HistoricalExchangeRatesSelect";
import HistoricalExchangeRatesTable from "./HistoricalExchangeRatesTable";

function HistoricalExchangeRatesPage() {
  const [historicalRates, setHistoricalRates] = useState<RatesResponse[]>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [showError, setShowError] = useState<boolean>(false);

  async function getData(baseCurrency: Currency, secondCurrency: Currency) {
    setIsLoading(true);

    await getHistoricalExchangeRates(baseCurrency, [secondCurrency]).then(
      (data) => {
        const successfulData = data.filter(
          (response): response is RatesResponse => !(response instanceof Error)
        );

        if (successfulData.length) {
          setHistoricalRates(successfulData);
          setShowError(false);
        } else {
          setHistoricalRates(undefined);
          setShowError(true);
        }

        setIsLoading(false);
      }
    );
  }

  return (
    <>
      <Title>Historical Exchange Rates</Title>

      <HistoricalExchangeRatesSelect getHistoricalExchangeRates={getData} />

      <ApiLimitMsg />

      {isLoading && <Spinner />}

      {!isLoading && historicalRates && (
        <>
          <HistoricalExchangeRatesCurrentRate currentRate={historicalRates[0]}/>
          <HistoricalExchangeRatesTable data={historicalRates.slice(1)} />
        </>
      )}

      {!isLoading && showError && <ErrorMsg />}
    </>
  );
}

export default HistoricalExchangeRatesPage;
