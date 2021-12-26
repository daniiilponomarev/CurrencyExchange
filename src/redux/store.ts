import { configureStore } from "@reduxjs/toolkit";
import currencyExchangeReducer, {
  CurrencyExchangeState,
} from "../containers/currencyExchange/currencyExchangeSlice";
import balancesReducer, { BalancesState } from "./balancesSlice";

export type State = {
  currencyExchange: CurrencyExchangeState;
  balances: BalancesState;
};

export default configureStore({
  reducer: {
    currencyExchange: currencyExchangeReducer,
    balances: balancesReducer,
  },
});
