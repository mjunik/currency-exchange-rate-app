import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import currencies, { Currency } from "../Services/currencies";
import CurrencySelect from "./CurrencySelect";

test("renders currency select component", () => {
  render(<CurrencySelect currency={Currency.EUR} currencyChanged={() => {}} />);
  const selectElement = screen.getByTestId("currencySelect");
  expect(selectElement).toBeInTheDocument();
});

test("renders a list of currencies", async () => {
  render(<CurrencySelect currency={Currency.EUR} currencyChanged={() => {}} />);

  const selectElement = screen.getByText("EUR");
  userEvent.click(selectElement);

  await waitFor(() => {
    const selectOptionsElements = screen.getAllByTestId("currencyOption");
    expect(selectOptionsElements.length).toEqual(currencies.length);
  });
});

test("sends value on select change", async () => {
  const handleChange = jest.fn();

  render(
    <CurrencySelect currency={Currency.EUR} currencyChanged={handleChange} />
  );

  const selectElement = screen.getByText("EUR");
  userEvent.click(selectElement);

  await waitFor(() => {
    const selectOption = screen.getByText("AUD");
    userEvent.click(selectOption, undefined, { skipPointerEventsCheck: true });

    expect(handleChange).toHaveBeenCalledTimes(1);
  });
});
