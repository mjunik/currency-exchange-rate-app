import { RatesResponse } from "../../api/callExchangeRatesApi";
import { Currency } from "../../api/currencies";

const mockResponse: RatesResponse = {
  success: true,
  timestamp: 123,
  base: Currency.EUR,
  date: "2022",
  rates: { AUD: 1.1 },
};

jest.mock("../../layouts/Spinner", () => () => <div>Spinner</div>);
jest.mock("./ExchangeRatesTable", () => () => <div>Table</div>);
jest.mock("../../layouts/ErrorMsg", () => () => <div>Error</div>);
jest.mock("../../api/getExchangerates");

test("renders Exchange Rates page", () => {});

// test("renders error message", async () => {
//   (getExchangeRates as jest.Mock).mockResolvedValue(new Error("bla"));

//   render(<ExchangeRatesPage />);

//   expect(screen.getByText("Error")).toBeInTheDocument();
// });

test("renders table", () => {});

test("renders loading spinner", () => {});

test("gets data on currency selection", () => {});
