import React, { ChangeEvent, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SelectChangeEvent } from "@mui/material/Select";

import { CurrencyName } from "../../../types";
import {
  exchangeCurrencies,
  selectBoughtCurrency,
  selectSoldCurrency,
  setBoughtCurrency,
} from "../currencyExchangeSlice";
import { selectBalanceByCurrency } from "../../../redux/balancesSlice";
import { CurrencySelector } from "../../../components";

export const BuyCurrency = () => {
  const [amount, setAmount] = useState(0);
  const dispatch = useDispatch();
  const boughtCurrency = useSelector(selectBoughtCurrency);
  const soldCurrency = useSelector(selectSoldCurrency);
  const balance = useSelector(selectBalanceByCurrency(boughtCurrency));

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
    setAmount(value);
  };

  return (
    <CurrencySelector
      balance={balance}
      currency={boughtCurrency}
      amount={amount}
      handleSelectChange={handleSelectChange}
      handleInputChange={handleInputChange}
    />
  );
};
