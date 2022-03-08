import { Button, Input } from "antd";
import Title from "antd/lib/typography/Title";
import { ChangeEvent, useState } from "react";
import CurrencySelect from "../../components/CurrencySelect";
import { Currency } from "../../api/currencies";
import { ConvertCalculationData } from "./ExchangeCalculatorPage";

interface ExchangeCalculatorFormProps {
  handleFormSubmit: (data: ConvertCalculationData) => void;
}

function ExchangeCalculatorForm({
  handleFormSubmit,
}: ExchangeCalculatorFormProps) {
  const [amount, setAmount] = useState<number>();
  const [baseCurrency, setBaseCurrency] = useState<Currency>();
  const [targetCurrency, setTargetCurrency] = useState<Currency>();

  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    setAmount(parseFloat(event.target.value));
  }

  function handleButtonClick() {
    handleFormSubmit({
      amount: amount!,
      baseCurrency: baseCurrency!,
      targetCurrency: targetCurrency!
    });
  }

  return (
    <div style={{ display: "flex", alignItems: "flex-end", gap: 30 }}>
      <div>
        <Title level={4}>Amount</Title>
        <Input
          placeholder="1000"
          style={{ width: 200 }}
          type="number"
          onChange={handleInputChange}
        />
      </div>

      <div>
        <CurrencySelect currencyChanged={setBaseCurrency} title="From" />
      </div>

      <div>
        <CurrencySelect currencyChanged={setTargetCurrency} title="To" />
      </div>

      <Button
        type="primary"
        onClick={handleButtonClick}
        disabled={!baseCurrency || !targetCurrency || !amount}
      >
        Calculate
      </Button>
    </div>
  );
}

export default ExchangeCalculatorForm;
