import React, { ChangeEvent, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SelectChangeEvent } from "@mui/material/Select";

import {
  selectSoldCurrency,
  selectBoughtCurrency,
  setSoldCurrency,
  exchangeCurrencies,
} from "../currencyExchangeSlice";
import { CurrencyName } from "../../../types";
import { selectBalanceByCurrency } from "../../../redux/balancesSlice";
import { CurrencySelector } from "../../../components";

export const SellCurrency = () => {
  const [amount, setAmount] = useState(0);
  const dispatch = useDispatch();
  const soldCurrency = useSelector(selectSoldCurrency);
  const boughtCurrency = useSelector(selectBoughtCurrency);
  const balance = useSelector(selectBalanceByCurrency(soldCurrency));

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
    setAmount(value);
  };

  return (
    <CurrencySelector
      balance={balance}
      currency={soldCurrency}
      amount={amount}
      handleSelectChange={handleSelectChange}
      handleInputChange={handleInputChange}
    />
  );
};
