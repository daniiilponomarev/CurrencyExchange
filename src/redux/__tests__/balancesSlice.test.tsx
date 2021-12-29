import React from "react";
import reducer, { BalancesState, buyCurrency } from "../balancesSlice";
import store from "../store";

describe("balancesSlice", () => {
  test("should return the initial state", () => {
    expect(store.getState().balances).toEqual({
      USD: 111,
      EUR: 222,
      GBP: 333,
    });
  });

  test("should handle buying currency with predefined rate", () => {
    const previousState: BalancesState = { EUR: 100, GBP: 100, USD: 100 };

    expect(
      reducer(
        previousState,
        buyCurrency({
          soldCurrency: "USD",
          boughtCurrency: "EUR",
          amount: 10,
          rate: 5,
        })
      )
    ).toEqual({ EUR: 150, GBP: 100, USD: 90 });
  });
});
