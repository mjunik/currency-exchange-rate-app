import { Select } from "antd";
import Title from "antd/lib/typography/Title";
import currencies, { Currency } from "../Services/currencies";

interface CurrencySelectProps {
  currencyChanged: (currency: Currency) => void;
  currency?: Currency;
  title?: string;
}

function CurrencySelect({
  currency,
  currencyChanged,
  title,
}: CurrencySelectProps) {
  const { Option } = Select;

  return (
    <>
      <Title level={4}>{title || "Select currency"}</Title>

      <Select
        defaultValue={currency}
        style={{ width: 220 }}
        onChange={currencyChanged}
      >
        {currencies.map((currency) => (
          <Option value={currency} key={currency}>
            {currency}
          </Option>
        ))}
      </Select>
    </>
  );
}

export default CurrencySelect;
