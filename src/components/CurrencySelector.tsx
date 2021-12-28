import React, { ChangeEvent } from "react";
// @ts-ignore
import CurrencyTextField from "@unicef/material-ui-currency-textfield";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";

import { CURRENCIES } from "../constants";
import { formControlStyle } from "../containers/currencyExchange/CurrencyExchangeStyles";
import { CurrencyName } from "../types";

type CurrencySelectorProps = {
  balance: number;
  currency: CurrencyName;
  amount: number;
  maximumInputValue: string;
  handleSelectChange: (event: SelectChangeEvent) => void;
  handleInputChange: (
    event: ChangeEvent<HTMLInputElement>,
    value: number
  ) => void;
};

export const CurrencySelector = ({
  balance,
  currency,
  amount = 0,
  handleSelectChange,
  handleInputChange,
  maximumInputValue,
}: CurrencySelectorProps) => {
  return (
    <>
      <FormControl fullWidth sx={formControlStyle}>
        <Select value={currency} onChange={handleSelectChange}>
          {CURRENCIES.map((currency) => (
            <MenuItem key={currency} value={currency}>
              {currency}
            </MenuItem>
          ))}
        </Select>
        <CurrencyTextField
          label="Amount"
          variant="outlined"
          value={amount}
          currencySymbol=""
          onChange={handleInputChange}
          maximumValue={maximumInputValue}
          minimumValue={"0"}
        />
        <Typography variant="subtitle1">Balance: {balance.toFixed(2)}</Typography>
      </FormControl>
    </>
  );
};
