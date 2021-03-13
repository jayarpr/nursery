import React from "react";
import { render } from "@testing-library/react";
import Plant from "./Plant";

describe("Plant tests", () => {
  it("should render", () => {
    expect(render(<Plant />)).toBeTruthy();
  });
});
