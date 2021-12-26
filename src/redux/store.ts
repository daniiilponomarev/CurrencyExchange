import { configureStore } from "@reduxjs/toolkit";
import currencyExchangeReducer, {
  CurrencyExchangeState,
} from "../containers/currencyExchange/currencyExchangeSlice";

export type State = { currencyExchange: CurrencyExchangeState };

export default configureStore({
  reducer: {
    currencyExchange: currencyExchangeReducer,
  },
});
