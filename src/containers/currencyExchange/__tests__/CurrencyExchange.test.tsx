import React from "react";
import { Provider } from "react-redux";
import { QueryClient, QueryClientProvider } from "react-query";
import {
  render,
  RenderResult,
  screen,
  fireEvent,
} from "@testing-library/react";

import { CurrencyExchange } from "../CurrencyExchange";
import store from "../../../redux/store";
import { setRate, setSoldCurrencyAmount } from "../currencyExchangeSlice";

jest.mock("../components", () => ({
  BuyCurrency: () => "BuyCurrency",
  CurrencyRate: () => "CurrencyRate",
  SellCurrency: () => "SellCurrency",
}));
const queryClient = new QueryClient();

const renderCurrencyExchange = (): RenderResult =>
  render(
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <CurrencyExchange />
      </QueryClientProvider>
    </Provider>
  );
describe("<CurrencyExchange />", () => {
  test("should match snapshot", () => {
    const component = renderCurrencyExchange();

    expect(component).toMatchSnapshot();
  });

  test("should exchange currencies", () => {
    renderCurrencyExchange();

    const button = screen.getByTestId("CurrencyExchange-exchange-button");

    const currencyExchangeOld = store.getState().currencyExchange;
    fireEvent.click(button);
    const currencyExchangeNew = store.getState().currencyExchange;

    expect(currencyExchangeNew.boughtCurrency).toEqual(
      currencyExchangeOld.soldCurrency
    );
    expect(currencyExchangeNew.soldCurrency).toEqual(
      currencyExchangeOld.boughtCurrency
    );
  });

  test("should submit exchanging currencies", () => {
    renderCurrencyExchange();

    store.dispatch(setRate(2));
    store.dispatch(setSoldCurrencyAmount(10));

    const balancesOld = store.getState().balances;
    console.log(store.getState().balances);
    console.log(store.getState().currencyExchange);
    const button = screen.getByTestId("CurrencyExchange-submit-button");
    fireEvent.click(button);

    const currencyExchangeNew = store.getState().balances;
    expect(currencyExchangeNew.EUR).toEqual(balancesOld.EUR - 10);
    expect(currencyExchangeNew.USD).toEqual(balancesOld.USD + 20);
  });
});
