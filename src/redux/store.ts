import { configureStore } from '@reduxjs/toolkit';
import currencyExchangeReducer from '../containers/currencyExchange/currencyExchangeSlice';

export default configureStore({
    reducer: {
        currencyExchange: currencyExchangeReducer,
    },
});
