import { Typography } from "antd";
import { RatesResponse } from "../../Services/getRates";

function HistoricalExchangeRatesCurrentRate({
  currentRate,
}: {
  currentRate: RatesResponse;
}) {
  const { Title, Text } = Typography;
  
  function getCurrentRate(): number {
    const currentRates = currentRate.rates;
    return currentRates[Object.keys(currentRates)[0]];
  }

  return (
    <div style={{ margin: "25px 0" }}>
      <Title level={5}>
        Current exchange rate:
        <span style={{ fontSize: "2rem" }}> {getCurrentRate()}</span>
      </Title>
      <Text>
        <strong>As of:</strong> {currentRate.date}
      </Text>
    </div>
  );
}

export default HistoricalExchangeRatesCurrentRate;
