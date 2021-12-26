import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { State } from "./store";
import { CurrencyName } from "../types";

export type BalancesState = Record<CurrencyName, number>;

const initialState: BalancesState = {
  USD: 100,
  EUR: 100,
  GBP: 100,
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
  },
});

export const { setBalance } = slice.actions;

export const selectBalanceByCurrency = (currency: CurrencyName)=> (state: State, ) =>
  state.balances[currency];

export default slice.reducer;
