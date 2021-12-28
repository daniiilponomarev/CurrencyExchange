import { SxProps } from "@mui/system";

import { GAPS } from "../../constants";

export const currencyExchangeBoxStyle: SxProps = {
  width: "50%",
  minWidth: "550px",
};
export const cardStyle: SxProps = {
  padding: GAPS.m,
};
export const cardContentStyle: SxProps = {
  padding: 0,
  marginBottom: GAPS.m,
};
export const headersContainerStyle: SxProps = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: GAPS.xxs,
  marginBottom: GAPS.xxs,
};
export const currencyHeaderStyle: SxProps = {
  textAlign: "center",
  mb: GAPS.xs,
};
export const currenciesSelectsBoxStyle: SxProps = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  gap: GAPS.xxs,
  marginTop: GAPS.xxs,
};
export const cardActionsStyle: SxProps = {
  display: "flex",
  justifyContent: "center",
  gap: GAPS.xxs,
  padding: 0,
};
export const formControlStyle: SxProps = {
  display: "flex",
  gap: GAPS.xs,
};
