import React from "react";
import {useSelector} from "react-redux";
import {selectBoughtCurrency, selectSoldCurrency} from "../currencyExchangeSlice";

export const BuyCurrency = () => {
  const boughtCurrency = useSelector(selectBoughtCurrency);

  return <div>{boughtCurrency}</div>;
};
