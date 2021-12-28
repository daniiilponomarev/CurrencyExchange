import React, { ChangeEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SelectChangeEvent } from "@mui/material/Select";

import { CurrencyName } from "../../../types";
import {
  exchangeCurrencies,
  selectBoughtCurrency,
  selectBoughtCurrencyAmount,
  selectRate,
  selectSoldCurrency,
  setBoughtCurrency,
  setBoughtCurrencyAmount,
} from "../currencyExchangeSlice";
import { selectBalanceByCurrency } from "../../../redux/balancesSlice";
import { CurrencySelector } from "../../../components";

export const BuyCurrency = () => {
  const dispatch = useDispatch();
  const boughtCurrency = useSelector(selectBoughtCurrency);
  const boughtCurrencyAmount = useSelector(selectBoughtCurrencyAmount);
  const soldCurrency = useSelector(selectSoldCurrency);
  const balance = useSelector(selectBalanceByCurrency(boughtCurrency));
  const soldCurrencyBalance = useSelector(
    selectBalanceByCurrency(soldCurrency)
  );
  const rate = useSelector(selectRate);
  const maximumInputValue = soldCurrencyBalance / (rate || 1) + "";

  const handleSelectChange = (event: SelectChangeEvent) => {
    const newCurrency: CurrencyName = event.target.value as CurrencyName;

    if (newCurrency === soldCurrency) {
      dispatch(exchangeCurrencies());
    } else {
      dispatch(setBoughtCurrency(newCurrency));
    }
  };

  const handleInputChange = (
    event: ChangeEvent<HTMLInputElement>,
    value: number
  ) => {
    dispatch(setBoughtCurrencyAmount(value));
  };

  return (
    <CurrencySelector
      balance={balance}
      currency={boughtCurrency}
      amount={boughtCurrencyAmount}
      handleSelectChange={handleSelectChange}
      handleInputChange={handleInputChange}
      maximumInputValue={maximumInputValue}
    />
  );
};
