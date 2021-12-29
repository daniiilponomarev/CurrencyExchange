import React from "react";

import reducer, {
  CurrencyExchangeState,
  setSoldCurrency,
  setBoughtCurrency,
  exchangeCurrencies,
  setRate,
  setSoldCurrencyAmount,
  setBoughtCurrencyAmount,
} from "../currencyExchangeSlice";
import store from "../../../redux/store";

const initialState: CurrencyExchangeState = {
  soldCurrency: "USD",
  boughtCurrency: "EUR",
  rate: null,
  soldCurrencyAmount: 0,
  boughtCurrencyAmount: 0,
};

describe("currencyExchangeSlice", () => {
  test("should return the initial state", () => {
    expect(store.getState().currencyExchange).toEqual(initialState);
  });

  test("should set sold currency", () => {
    expect(reducer(initialState, setSoldCurrency("GBP"))).toEqual({
      ...initialState,
      soldCurrency: "GBP",
    });
  });

  test("should set bought currency", () => {
    expect(reducer(initialState, setBoughtCurrency("GBP"))).toEqual({
      ...initialState,
      boughtCurrency: "GBP",
    });
  });

  test("should set sold currency amount", () => {
    expect(
      reducer({ ...initialState, rate: 2 }, setSoldCurrencyAmount(1000))
    ).toEqual({
      ...initialState,
      rate: 2,
      soldCurrencyAmount: 1000,
      boughtCurrencyAmount: 2000,
    });
  });

  test("should set bought currency amount", () => {
    expect(reducer({ ...initialState, rate: 2 }, setBoughtCurrencyAmount(1000))).toEqual({
      ...initialState,
      rate: 2,
      soldCurrencyAmount: 500,
      boughtCurrencyAmount: 1000,
    });
  });

  test("should exchange currencies", () => {
    expect(reducer(initialState, exchangeCurrencies())).toEqual({
      ...initialState,
      soldCurrency: "EUR",
      boughtCurrency: "USD",
    });
  });

  test("should set rate", () => {
    expect(reducer(initialState, setRate(1000))).toEqual({
      ...initialState,
      rate: 1000,
    });
  });
});
