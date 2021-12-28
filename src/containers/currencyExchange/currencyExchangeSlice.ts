import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { State } from "../../redux/store";
import { CurrencyName } from "../../types";

export type CurrencyExchangeState = {
  soldCurrency: CurrencyName;
  boughtCurrency: CurrencyName;
  rate: number | null;
  soldCurrencyAmount: number;
  boughtCurrencyAmount: number;
};

const initialState: CurrencyExchangeState = {
  soldCurrency: "USD",
  boughtCurrency: "EUR",
  rate: null,
  soldCurrencyAmount: 0,
  boughtCurrencyAmount: 0,
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
    setSoldCurrencyAmount: (state, action: PayloadAction<number>) => {
      const value = action.payload;
      const newBoughtCurrencyAmount = value * (state.rate || 1);

      state.soldCurrencyAmount = value;
      state.boughtCurrencyAmount = newBoughtCurrencyAmount;
    },
    setBoughtCurrencyAmount: (state, action: PayloadAction<number>) => {
      const value = action.payload;
      const newSoldCurrencyAmount = value / (state.rate || 1);

      state.boughtCurrencyAmount = value;
      state.soldCurrencyAmount = newSoldCurrencyAmount;
    },
    exchangeCurrencies: (state) => {
      const soldCurrencyTemp = state.soldCurrency;
      state.soldCurrency = state.boughtCurrency;
      state.boughtCurrency = soldCurrencyTemp;
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
  setSoldCurrencyAmount,
  setBoughtCurrencyAmount,
} = slice.actions;

export const selectSoldCurrency = (state: State) =>
  state.currencyExchange.soldCurrency;
export const selectBoughtCurrency = (state: State) =>
  state.currencyExchange.boughtCurrency;
export const selectSoldCurrencyAmount = (state: State) =>
  state.currencyExchange.soldCurrencyAmount;
export const selectBoughtCurrencyAmount = (state: State) =>
  state.currencyExchange.boughtCurrencyAmount;
export const selectRate = (state: State) => state.currencyExchange.rate;

export default slice.reducer;
