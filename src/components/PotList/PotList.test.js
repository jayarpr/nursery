import React from "react";
import { render } from "@testing-library/react";
import PotList from "./PotList";

describe("PotList tests", () => {
  it("should render", () => {
    expect(render(<PotList />)).toBeTruthy();
  });
});
