import React, { ChangeEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SelectChangeEvent } from "@mui/material/Select";

import {
  selectSoldCurrency,
  selectBoughtCurrency,
  setSoldCurrency,
  exchangeCurrencies,
  selectSoldCurrencyAmount,
  setSoldCurrencyAmount,
} from "../currencyExchangeSlice";
import { CurrencyName } from "../../../types";
import { selectBalanceByCurrency } from "../../../redux/balancesSlice";
import { CurrencySelector } from "../../../components";

export const SellCurrency = () => {
  const dispatch = useDispatch();
  const soldCurrency = useSelector(selectSoldCurrency);
  const soldCurrencyAmount = useSelector(selectSoldCurrencyAmount);
  const boughtCurrency = useSelector(selectBoughtCurrency);
  const balance = useSelector(selectBalanceByCurrency(soldCurrency));
  const maximumInputValue = balance + "";

  const handleSelectChange = (event: SelectChangeEvent) => {
    const newCurrency: CurrencyName = event.target.value as CurrencyName;

    if (newCurrency === boughtCurrency) {
      dispatch(exchangeCurrencies());
    } else {
      dispatch(setSoldCurrency(newCurrency));
    }
  };

  const handleInputChange = (
    event: ChangeEvent<HTMLInputElement>,
    value: number
  ) => {
    dispatch(setSoldCurrencyAmount(value));
  };

  return (
    <CurrencySelector
      balance={balance}
      currency={soldCurrency}
      amount={soldCurrencyAmount}
      handleSelectChange={handleSelectChange}
      handleInputChange={handleInputChange}
      maximumInputValue={maximumInputValue}
    />
  );
};
