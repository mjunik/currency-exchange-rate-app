import { render, screen } from "@testing-library/react";
import { Currency } from "../../Services/currencies";
import { RatesResponse } from "../../Services/getRates";
import ExchangeRatesTable from "./ExchangeRatesTable";

const mockTableComponent = jest.fn();
jest.mock("antd/lib/table/Table", () => (props: any) => {
  mockTableComponent(props);
  return <div>Table</div>;
});

const mockedData: RatesResponse = {
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

test("renders date", () => {
  render(<ExchangeRatesTable data={mockedData} />);
  const dateElement = screen.getByTestId("date");
  expect(dateElement.textContent).toEqual("2022-03-06");
});

test("prepares table data", () => {
  render(<ExchangeRatesTable data={mockedData} />);
  expect(mockTableComponent).toHaveBeenCalledWith(
    expect.objectContaining({
      dataSource: [{ currency: "AUD", exchangeRate: 1.23, key: "AUD" }],
    })
  );
});
