import Text from "antd/lib/typography/Text";
import Title from "antd/lib/typography/Title";
import { useState } from "react";
import ApiLimitMsg from "../../components/ApiLimitMsg";
import ErrorMsg from "../../layouts/ErrorMsg";
import Spinner from "../../layouts/Spinner";
import { Currency } from "../../api/currencies";
import getHistoricalExchangeRates from "../../api/getHistoricalExchangeRates";
import { RatesResponse } from "../../api/callExchangeRatesApi";
import HistoricalExchangeRatesCurrentRate from "./HistoricalExchangeRatesCurrentRate";

import HistoricalExchangeRatesSelect from "./HistoricalExchangeRatesSelect";
import HistoricalExchangeRatesTable from "./HistoricalExchangeRatesTable";

function HistoricalExchangeRatesPage() {
  const [historicalRates, setHistoricalRates] = useState<RatesResponse[]>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [showError, setShowError] = useState<boolean>(false);

  async function getData(baseCurrency: Currency, secondCurrency: Currency) {
    setIsLoading(true);

    const data = await getHistoricalExchangeRates(baseCurrency, [
      secondCurrency,
    ]);

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

  return (
    <>
      <Title>Historical Exchange Rates</Title>

      <HistoricalExchangeRatesSelect getHistoricalExchangeRates={getData} />

      <ApiLimitMsg />

      {isLoading && <Spinner />}

      {!isLoading && historicalRates && (
        <>
          <HistoricalExchangeRatesCurrentRate
            currentRate={historicalRates[0]}
          />
          <HistoricalExchangeRatesTable data={historicalRates.slice(1)} />
        </>
      )}

      {!isLoading && showError && <ErrorMsg />}
    </>
  );
}

export default HistoricalExchangeRatesPage;
