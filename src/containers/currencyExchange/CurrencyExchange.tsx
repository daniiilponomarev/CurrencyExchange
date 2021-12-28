import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import ChangeCircleTwoToneIcon from "@mui/icons-material/ChangeCircleTwoTone";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";

import { GAPS } from "../../constants";
import {
  selectBoughtCurrency,
  selectSoldCurrency,
  exchangeCurrencies,
} from "./currencyExchangeSlice";
import { BuyCurrency, CurrencyRate, SellCurrency } from "./components";
import {
  cardActionsStyle,
  cardContentStyle,
  cardStyle,
  currenciesSelectsBoxStyle,
  currencyExchangeBoxStyle,
  currencyHeaderStyle,
  headersContainerStyle,
} from "./CurrencyExchangeStyles";

export const CurrencyExchange = () => {
  const soldCurrency = useSelector(selectSoldCurrency);
  const boughtCurrency = useSelector(selectBoughtCurrency);
  const dispatch = useDispatch();
  const handleExchangeCurrencies = () => dispatch(exchangeCurrencies());

  return (
    <Box sx={currencyExchangeBoxStyle}>
      <Card variant="outlined" sx={cardStyle}>
        <CardContent sx={cardContentStyle}>
          <Container sx={headersContainerStyle}>
            <CurrencyExchangeIcon fontSize="large" color="primary" />
            <Typography variant="h4">Currency Exchange</Typography>
          </Container>
          <Typography variant="h5" sx={currencyHeaderStyle} mb={GAPS.xxl}>
            Buy {boughtCurrency}
          </Typography>
          <CurrencyRate />
          <Box sx={currenciesSelectsBoxStyle}>
            <SellCurrency />
            <IconButton
              aria-label="exchange currencies"
              color="primary"
              onClick={handleExchangeCurrencies}
              size="large"
            >
              <ChangeCircleTwoToneIcon />
            </IconButton>
            <BuyCurrency />
          </Box>
        </CardContent>

        <CardActions sx={cardActionsStyle}>
          <Button size="large" variant="contained">
            {"Sell"} {soldCurrency} {"for"} {boughtCurrency}
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
};
