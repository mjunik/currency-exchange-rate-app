import { Typography } from "antd";
import { Currency } from "../../api/currencies";
import "./ExchangeCalculatorConvertResult.css";

interface ExchangeCalculatorConvertResultProps {
  targetCurrency: Currency;
  amount: number;
  date: string;
  rate: number;
}

function ExchangeCalculatorConvertResult({
  targetCurrency,
  amount,
  date,
  rate,
}: ExchangeCalculatorConvertResultProps) {
  const { Text, Title } = Typography;

  return (
    <>
      <div className="results-wrapper">
        <div>
          <Title level={5}>
            Total amount in {targetCurrency}:{" "}
            <span className="result">{rate * amount}</span>
          </Title>
        </div>
        <div>
          <Title level={5}>
            Current exchange rate: <span className="result">{rate}</span>
          </Title>
        </div>
      </div>

      <Text>
        <strong>As of:</strong> {date}
      </Text>
    </>
  );
}

export default ExchangeCalculatorConvertResult;
