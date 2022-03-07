import Text from "antd/lib/typography/Text";
import Title from "antd/lib/typography/Title";
import { useState } from "react";
import ApiLimitMsg from "../../Components/ApiLimitMsg";
import ErrorMsg from "../../Layouts/ErrorMsg";
import Spinner from "../../Layouts/Spinner";
import { Currency } from "../../Services/currencies";
import getHistoricalExchangeRates from "../../Services/getHistoricalExchangeRates";
import { RatesResponse } from "../../Services/getRates";

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

  function getCurrentRate(): number {
    const currentRates = historicalRates![0].rates;
    return currentRates[Object.keys(currentRates)[0]];
  }

  return (
    <>
      <Title>Historical Exchange Rates</Title>

      <HistoricalExchangeRatesSelect getHistoricalExchangeRates={getData} />

      <ApiLimitMsg />

      {isLoading && <Spinner />}

      {!isLoading && historicalRates && (
        <>
          <div style={{ margin: "25px 0" }}>
            <Title level={5}>
              Current exchange rate:
              <span style={{ fontSize: "2rem" }}> {getCurrentRate()}</span>
            </Title>
          </div>
          <HistoricalExchangeRatesTable data={historicalRates.slice(1)} />
        </>
      )}

      {!isLoading && showError && <ErrorMsg />}
    </>
  );
}

export default HistoricalExchangeRatesPage;
