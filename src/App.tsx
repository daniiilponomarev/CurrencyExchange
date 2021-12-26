import React from "react";
import { Provider } from "react-redux";
import {QueryClient, QueryClientProvider} from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { StyledEngineProvider } from "@mui/material/styles";
import Box from "@mui/material/Box";

import { CurrencyExchange } from "./containers/currencyExchange";
import { GAPS } from "./constants";
import store from "./redux/store";

const queryClient = new QueryClient();

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <StyledEngineProvider injectFirst>
            <ReactQueryDevtools initialIsOpen />
            <Box sx={{ margin: GAPS.xxl }}>
              <CurrencyExchange />
            </Box>
          </StyledEngineProvider>
        </QueryClientProvider>
      </Provider>
    </div>
  );
}

export default App;
