import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders currency exchange header", () => {
  render(<App />);
  const currencyExchangeHeader = screen.getByText(/Currency Exchange/i);

  expect(currencyExchangeHeader).toBeInTheDocument();
});
