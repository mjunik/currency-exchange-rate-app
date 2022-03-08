import Table from "antd/lib/table/Table";
import Paragraph from "antd/lib/typography/Paragraph";
import { Currency } from "../../Services/currencies";
import { ExchangeRate, RatesResponse } from "../../Services/getRates";

interface ExchangeRatesTableRow {
  currency: Currency;
  exchangeRate: number;
  key: string;
}

function ExchangeRatesTable({ data }: { data: RatesResponse }) {
  const columns = [
    { title: "Currency", dataIndex: "currency", key: "currency" },
    { title: "Exchange rate", dataIndex: "exchangeRate", key: "exchangeRate" },
  ];

  const tabularData = prepareDataForTableView(data.rates);

  function prepareDataForTableView(
    rates: ExchangeRate
  ): ExchangeRatesTableRow[] {
    return Object.keys(rates).map(
      (key) =>
        ({
          currency: key,
          exchangeRate: rates[key],
          key,
        } as ExchangeRatesTableRow)
    );
  }

  return (
    <>
      <Paragraph style={{ margin: "1.5rem 0" }}>
        <strong>As of:</strong> <span data-testid="date">{data.date}</span>
      </Paragraph>

      <Table
        dataSource={tabularData}
        columns={columns}
        style={{ maxWidth: 600 }}
      />
    </>
  );
}

export default ExchangeRatesTable;
