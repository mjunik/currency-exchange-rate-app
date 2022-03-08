import { render, screen, waitFor } from "@testing-library/react";
import { RatesResponse } from "../../api/callExchangeRatesApi";
import ExchangeRatesPage from "./ExchangeRatesPage";
import { Currency } from "../../api/currencies";

jest.mock("../../layouts/Spinner", () => () => <div>Spinner</div>);
jest.mock("./ExchangeRatesTable", () => () => <div>Table</div>);

test("renders Exchange Rates page", () => {
  render(<ExchangeRatesPage />);
  const titleElement = screen.getByText("Exchange Rates");
  expect(titleElement).toBeInTheDocument();
});

test("renders table", async () => {
  const mockResponse: RatesResponse = {
    success: true,
    timestamp: 123,
    base: Currency.EUR,
    date: "2022",
    rates: { AUD: 1.1 },
  };

  jest.mock("../../api/getExchangeRates", () => ({
    default: jest.fn(
      () => new Promise((resolve, reject) => resolve(mockResponse))
    ),
  }));

  render(<ExchangeRatesPage />);

  await waitFor(() => {
    expect(screen.getByText("Table")).toBeInTheDocument();
  });
});

test("renders loading spinner", () => {
  render(<ExchangeRatesPage />);
  const titleElement = screen.getByText("Spinner");
  expect(titleElement).toBeInTheDocument();
});

test("renders error message", () => {});

test("gets data on currency selection", () => {});
