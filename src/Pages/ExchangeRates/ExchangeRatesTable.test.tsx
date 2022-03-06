import { render, screen } from "@testing-library/react";
import { Currency } from "../../Services/currencies";
import { ExchangeRatesResponse } from "../../Services/getExchangeRate";
import ExchangeRatesTable from "./ExchangeRatesTable";

jest.mock("antd", () => ({ Table: () => "Table" }));

const mockedData: ExchangeRatesResponse = {
  success: true,
  timestamp: 123,
  base: Currency.EUR,
  date: "2022-03-06",
  rates: { AUD: 1.23 },
};

test("renders table", () => {
  render(<ExchangeRatesTable data={mockedData} />);
  const tableElement = screen.getByText("Table");
  expect(tableElement).toBeInTheDocument();
});

test("renders date", () => {});
