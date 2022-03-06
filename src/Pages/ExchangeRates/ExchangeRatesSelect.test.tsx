import { render, screen } from "@testing-library/react";
import { Currency } from "../../Services/currencies";
import ExchangeRatesSelect from "./ExchangeRatesSelect";

test("renders select", () => {
  render(
    <ExchangeRatesSelect currency={Currency.AUD} currencyChanged={() => {}} />
  );
  const titleElement = screen.getByText("Select currency");
  expect(titleElement).toBeInTheDocument();
});

test("sends value on select change", () => {});

test("displays a list of currencies", () => {});
