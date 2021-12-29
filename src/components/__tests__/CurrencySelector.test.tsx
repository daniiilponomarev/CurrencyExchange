import React from "react";
import { render } from "@testing-library/react";
import { CurrencySelector } from "../CurrencySelector";

test("renders learn react link", () => {
  const component = render(
    <CurrencySelector
      balance={1}
      currency="USD"
      amount={2}
      handleSelectChange={() => {}}
      handleInputChange={() => {}}
      maximumInputValue={"5"}
    />
  );

  expect(component).toMatchSnapshot();
});
