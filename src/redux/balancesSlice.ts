import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { State } from "./store";
import { CurrencyName } from "../types";

export type BalancesState = Record<CurrencyName, number>;

const initialState: BalancesState = {
  USD: 111,
  EUR: 222,
  GBP: 333,
};

export const slice = createSlice({
  name: "currencyExchange",
  initialState,
  reducers: {
    setBalance: (
      state,
      action: PayloadAction<{ currency: CurrencyName; value: number }>
    ) => {
      const { currency, value } = action.payload;
      state[currency] = value;
    },
    buyCurrency: (
      state,
      action: PayloadAction<{
        soldCurrency: CurrencyName;
        boughtCurrency: CurrencyName;
        amount: number;
        rate: number | null;
      }>
    ) => {
      const { soldCurrency, boughtCurrency, amount, rate } = action.payload;
      state[soldCurrency] = state[soldCurrency] - amount;
      state[boughtCurrency] = state[boughtCurrency] + amount * (rate || 1);
    },
  },
});

export const { setBalance, buyCurrency } = slice.actions;

export const selectBalanceByCurrency =
  (currency: CurrencyName) => (state: State) =>
    state.balances[currency];

export default slice.reducer;
