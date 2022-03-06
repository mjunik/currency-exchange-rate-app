import { render, screen } from "@testing-library/react";
import ExchangeRatesPage from "./ExchangeRatesPage";

test("renders Exchange Rates page", () => {
  render(<ExchangeRatesPage />);
  const titleElement = screen.getByText("Exchange Rates");
  expect(titleElement).toBeInTheDocument();
});

test("renders table with data", () => {});

test("renders loading spinner", () => {});

test("renders error message", () => {});
