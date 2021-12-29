import React from "react";
import { useQuery } from "react-query";
import { useDispatch, useSelector } from "react-redux";
import Typography from "@mui/material/Typography";

import {
  selectBoughtCurrency,
  selectRate,
  selectSoldCurrency,
  setRate,
} from "../currencyExchangeSlice";
import { REFETCH_RATES_INTERVAL, getRatesData } from "../../../api";

export const CurrencyRate = () => {
  const soldCurrency = useSelector(selectSoldCurrency);
  const boughtCurrency = useSelector(selectBoughtCurrency);
  const rate = useSelector(selectRate);
  const dispatch = useDispatch();

  const ratesData = useQuery(
    `rates ${soldCurrency}`,
    getRatesData(soldCurrency),
    {
      refetchInterval: REFETCH_RATES_INTERVAL,
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      refetchOnReconnect: false,
    }
  );
  const { data, isError } = ratesData;

  if (!isError && data?.data && data.data[boughtCurrency]) {
    const newRate = data.data[boughtCurrency];
    if (rate !== newRate) dispatch(setRate(newRate));
  } else {
    if (rate !== null) dispatch(setRate(null));
  }

  return (
    <Typography variant="subtitle1" align="center">
      {rate ? (
        <>
          1 {soldCurrency} = {rate} {boughtCurrency}
        </>
      ) : (
        <>CurrencyRate Error</>
      )}
    </Typography>
  );
};
