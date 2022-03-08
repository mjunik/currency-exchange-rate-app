import Table from "antd/lib/table/Table";
import Title from "antd/lib/typography/Title";
import { Currency } from "../../api/currencies";

interface ExchangeCalculatorTableProps {
  amount: number;
  rates: ExchangeRatesTableRate[];
}

export interface ExchangeRatesTableRate {
  currency: Currency;
  rate: number;
}

interface ExchangeRatesTableRow extends ExchangeRatesTableRate {
  amount: number;
  key: string;
}

function ExchangeCalculatorTable({
  rates,
  amount,
}: ExchangeCalculatorTableProps) {
  const columns = [
    { title: "Currency", dataIndex: "currency", key: "currency" },
    { title: "Exchange rate", dataIndex: "rate", key: "rate" },
    { title: "Amount", dataIndex: "amount", key: "amount" },
  ];

  const tabularData = prepareDataForTableView();

  function prepareDataForTableView(): ExchangeRatesTableRow[] {
    return rates.map((rate) => ({
      currency: rate.currency,
      rate: rate.rate,
      amount: rate.rate * amount,
      key: rate.currency,
    }));
  }

  return (
    <>
      <Title level={5}>Other currencies</Title>

      <Table
        dataSource={tabularData}
        columns={columns}
        style={{ maxWidth: 600 }}
        pagination={false}
      />
    </>
  );
}

export default ExchangeCalculatorTable;
