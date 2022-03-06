import { render, screen } from "@testing-library/react";
import { Currency } from "../Services/currencies";
import CurrencySelect from "./CurrencySelect";

test("renders currency select component", () => {
  render(
    <CurrencySelect currency={Currency.AUD} currencyChanged={() => {}} />
  );
  const titleElement = screen.getByText("Select currency");
  expect(titleElement).toBeInTheDocument();
});

test("sends value on select change", () => {});

test("displays a list of currencies", () => {});
