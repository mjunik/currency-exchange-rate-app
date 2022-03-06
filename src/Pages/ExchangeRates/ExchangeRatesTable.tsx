import { Table } from "antd";
import Paragraph from "antd/lib/typography/Paragraph";
import { Currency } from "../../Services/currencies";
import {
  ExchangeRate,
  ExchangeRatesResponse,
} from "../../Services/getExchangeRate";

interface ExchangeRatesTableRow {
  currency: Currency;
  exchangeRate: number;
  key: string;
}

function ExchangeRatesTable({ data }: { data: ExchangeRatesResponse }) {
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
        ({ currency: key, exchangeRate: rates[key], key } as ExchangeRatesTableRow)
    );
  }

  return (
    <>
      <Paragraph style={{margin: '1.5rem 0'}}>
        <strong>Date:</strong> {data.date}
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
