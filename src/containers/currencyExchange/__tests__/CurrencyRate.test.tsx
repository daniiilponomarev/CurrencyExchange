import React from "react";
import { Provider } from "react-redux";
import { QueryClient, QueryClientProvider } from "react-query";
import { render, RenderResult } from "@testing-library/react";

import store from "../../../redux/store";
import { CurrencyRate } from "../components";

const queryData = {
  data: {
    data: {
      USD: 2,
      EUR: 3,
      GBP: 4,
    },
    query: {
      apikey: "apikey",
      base_currency: "EUR",
      timestamp: 1,
    },
  },
  isError: false,
  isFetched: true,
  isLoading: false,
  isSuccess: true,
  status: "success",
};
jest.mock("react-query", () => ({
  ...jest.requireActual("react-query"),
  useQuery: () => queryData,
}));

const queryClient = new QueryClient();
const renderCurrencyRate = (): RenderResult =>
  render(
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <CurrencyRate />
      </QueryClientProvider>
    </Provider>
  );

describe("<CurrencyRate />", () => {
  test("should match snapshot", () => {
    const component = renderCurrencyRate();

    expect(component).toMatchSnapshot();
  });

  test("should match snapshot", () => {
    queryData.isError = true;
    const component = renderCurrencyRate();

    expect(component).toMatchSnapshot();
  });
});
