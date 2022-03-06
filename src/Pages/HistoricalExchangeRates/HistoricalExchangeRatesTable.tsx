import { Table } from "antd";
import { RatesResponse } from "../../Services/getRates";

interface HistoricalRatesTableRow {
  date: string;
  exchangeRate: number;
  key: string;
}

function HistoricalExchangeRatesTable({ data }: { data: RatesResponse[] }) {
  const columns = [
    { title: "Date", dataIndex: "date", key: "date" },
    { title: "Rate", dataIndex: "exchangeRate", key: "rate" },
  ];

  const tabularData = prepareDataForTableView(data);

  function prepareDataForTableView(
    data: RatesResponse[]
  ): HistoricalRatesTableRow[] {
    return data.map((row) => {
      const { date, rates } = row;
      return { date, exchangeRate: rates[Object.keys(rates)[0]], key: date };
    });
  }

  return (
    <Table
      dataSource={tabularData}
      columns={columns}
      style={{ maxWidth: 600 }}
    />
  );
}

export default HistoricalExchangeRatesTable;
