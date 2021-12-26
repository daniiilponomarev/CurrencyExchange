import React from "react";
import { useSelector } from "react-redux";
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
} from "./currencyExchangeSlice";
import { BuyCurrency, CurrencyRate, SellCurrency } from "./components";

export const CurrencyExchange = () => {
  const soldCurrency = useSelector(selectSoldCurrency);
  const boughtCurrency = useSelector(selectBoughtCurrency);

  return (
    <Box sx={{ width: "50%", minWidth: "450px" }}>
      <Card variant="outlined">
        <CardContent>
          <Container
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: GAPS.xxs,
            }}
          >
            <CurrencyExchangeIcon fontSize="large" color="primary" />
            <Typography variant="h4">Currency Exchange</Typography>
          </Container>
          <Typography variant="h5" sx={{ textAlign: "center", mb: GAPS.xs }}>
            Buy {boughtCurrency}
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: GAPS.xxs,
            }}
          >
            <CurrencyRate />
            <SellCurrency />
            <IconButton aria-label="exchange currencies" color="primary">
              <ChangeCircleTwoToneIcon />
            </IconButton>
            <BuyCurrency />
          </Box>
        </CardContent>

        <CardActions
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: GAPS.xxs,
          }}
        >
          <Button size="small" variant="contained">
            {"Sell"} {soldCurrency} {"for"} {boughtCurrency}
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
};
