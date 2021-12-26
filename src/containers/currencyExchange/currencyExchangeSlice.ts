import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { State } from "../../redux/store";

type CurrencyName = "USD" | "EUR" | "GBP" | "RUB";

export type CurrencyExchangeState = {
  soldCurrency: CurrencyName;
  boughtCurrency: CurrencyName;
};

const initialState: CurrencyExchangeState = {
  soldCurrency: "USD",
  boughtCurrency: "RUB",
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
  },
});

export const { setSoldCurrency, setBoughtCurrency } = slice.actions;

export const selectSoldCurrency = (state: State) =>
  state.currencyExchange.soldCurrency;
export const selectBoughtCurrency = (state: State) =>
  state.currencyExchange.boughtCurrency;

export default slice.reducer;
