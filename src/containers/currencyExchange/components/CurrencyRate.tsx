import React from "react";
import { useQuery } from "react-query";
import axios from "axios";
import { useSelector } from "react-redux";
import {
  selectBoughtCurrency,
  selectSoldCurrency,
} from "../currencyExchangeSlice";
import { accessKey, ratesUrl, REFETCH_RATES_INTERVAL } from "../../../api";

export const CurrencyRate = () => {
  const soldCurrency = useSelector(selectSoldCurrency);
  const boughtCurrency = useSelector(selectBoughtCurrency);

  const ratesData = useQuery(
    `rates`,
    async () => {
      const response = await axios.get(`${ratesUrl}`, {
        params: {
          access_key: accessKey,
          symbols: boughtCurrency,
          base: soldCurrency,
          format: "1",
        },
      });
      return response.data;
    },
    { refetchInterval: REFETCH_RATES_INTERVAL }
  );
  const { data, isError } = ratesData;

  return <div>CurrencyRate</div>;
};
