import React from "react";
import { render } from "@testing-library/react";
import Pot from "./Pot";

describe("Pot tests", () => {
  it("should render", () => {
    expect(render(<Pot />)).toBeTruthy();
  });
});
