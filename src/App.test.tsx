import { render, screen } from "@testing-library/react";
import App from "./App";

jest.mock("./Layouts/Header", () => () => <div>Header</div>);

test("renders header", () => {
  render(<App />);
  const headerElement = screen.getByText("Header");
  expect(headerElement).toBeInTheDocument();
});

test("renders proper page for a given path", () => {})