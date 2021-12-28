import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { State } from "../../redux/store";
import { CurrencyName } from "../../types";

export type CurrencyExchangeState = {
  soldCurrency: CurrencyName;
  boughtCurrency: CurrencyName;
  rate: number | null;
};

const initialState: CurrencyExchangeState = {
  soldCurrency: "USD",
  boughtCurrency: "EUR",
  rate: 1,
};

export const slice = createSlice({
  name: "currencyExchange",
  initialState,
  reducers: {
    setSoldCurrency: (state, action: PayloadAction<CurrencyName>) => {
      state.soldCurrency = action.payload;
    },
    setBoughtCurrency: (state, action: PayloadAction<CurrencyName>) => {
      state.boughtCurrency = action.payload;
    },
    exchangeCurrencies: (state) => {
      const soldCurrency = state.soldCurrency;
      state.soldCurrency = state.boughtCurrency;
      state.boughtCurrency = soldCurrency;
    },
    setRate: (state, action: PayloadAction<number | null>) => {
      state.rate = action.payload;
    },
  },
});

export const {
  setSoldCurrency,
  setBoughtCurrency,
  exchangeCurrencies,
  setRate,
} = slice.actions;

export const selectSoldCurrency = (state: State) =>
  state.currencyExchange.soldCurrency;
export const selectBoughtCurrency = (state: State) =>
  state.currencyExchange.boughtCurrency;
export const selectRate = (state: State) => state.currencyExchange.rate;

export default slice.reducer;
