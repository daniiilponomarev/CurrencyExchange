// export const ratesUrl = "http1://api.exchangeratesapi.io/v1/latest";
// export const ratesUrl = "https://apilayer-currencylayer-v1.p.rapidapi.com/convert";
import axios from "axios";
import { CurrencyName } from "../types";

const ratesUrl = "https://freecurrencyapi.net/api/v2/latest";
const accessKey = "4cee5210-6746-11ec-b368-db27264c2a5e";
export const REFETCH_RATES_INTERVAL = 1000000;

export const getRatesData = (soldCurrency: CurrencyName) => async () => {
  const response = await axios.get(`${ratesUrl}`, {
    params: {
      apikey: accessKey,
      base_currency: soldCurrency,
    },
  });
  return response.data;
};
