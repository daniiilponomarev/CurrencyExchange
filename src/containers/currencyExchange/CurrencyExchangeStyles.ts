import { SxProps } from "@mui/system";

import { GAPS } from "../../constants";

export const cardStyle: SxProps = {
  padding: GAPS.m,
};
export const cardContentStyle: SxProps = {
  padding: 0,
};
export const headersContainerStyle: SxProps = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: GAPS.xxs,
};
export const currenciesSelectsBoxStyle: SxProps = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: GAPS.xxs,
};
export const cardActionsStyle: SxProps = {
  display: "flex",
  justifyContent: "center",
  gap: GAPS.xxs,
  padding: 0,
};
