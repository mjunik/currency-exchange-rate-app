import { Select } from "antd";
import Title from "antd/lib/typography/Title";
import currencies, { Currency } from "../../Services/currencies";

interface ExchangeRatesSelectProps {
  currencyChanged: (currency: Currency) => void;
  currency: Currency;
}

function ExchangeRatesSelect({
  currency,
  currencyChanged,
}: ExchangeRatesSelectProps) {
  const { Option } = Select;

  return (
    <>
      <Title level={3}>Select currency</Title>
      <div>
        <Select
          defaultValue={currency}
          style={{ width: 120 }}
          onChange={currencyChanged}
        >
          {currencies.map((currency) => (
            <Option value={currency} key={currency}>
              {currency}
            </Option>
          ))}
        </Select>
      </div>
    </>
  );
}

export default ExchangeRatesSelect;
