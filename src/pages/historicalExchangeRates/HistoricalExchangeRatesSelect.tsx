import { Button } from "antd";
import { useState } from "react";
import CurrencySelect from "../../components/CurrencySelect";
import { Currency } from "../../api/currencies";

interface HistoricalRatesSelectProps {
  getHistoricalExchangeRates: (base: Currency, second: Currency) => void;
}

function HistoricalExchangeRatesSelect({
  getHistoricalExchangeRates,
}: HistoricalRatesSelectProps) {
  const [baseCurrency, setBaseCurrency] = useState<Currency>();
  const [secondCurrency, setSecondCurrency] = useState<Currency>();

  function handleButtonClick() {
    getHistoricalExchangeRates(baseCurrency!, secondCurrency!);
  }

  return (
    <div style={{ display: "flex", alignItems: "flex-end", gap: 30 }}>
      <div>
        <CurrencySelect currencyChanged={setBaseCurrency} title="From" />
      </div>

      <div>
        <CurrencySelect currencyChanged={setSecondCurrency} title="To" />
      </div>

      <Button
        type="primary"
        onClick={handleButtonClick}
        disabled={!baseCurrency || !secondCurrency}
      >
        Get rates
      </Button>
    </div>
  );
}

export default HistoricalExchangeRatesSelect;
