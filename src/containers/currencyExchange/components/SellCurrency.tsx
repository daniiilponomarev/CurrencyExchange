import React from "react";
import {useSelector} from "react-redux";
import {selectBoughtCurrency, selectSoldCurrency} from "../currencyExchangeSlice";

export const SellCurrency = () => {
  const soldCurrency = useSelector(selectSoldCurrency);

  return <div>{soldCurrency}</div>;
};
