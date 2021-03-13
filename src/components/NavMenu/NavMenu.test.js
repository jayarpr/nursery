import React from "react";
import { render } from "@testing-library/react";
import NavMenu from "./NavMenu";

describe("NavMenu tests", () => {
  it("should render", () => {
    expect(render(<NavMenu />)).toBeTruthy();
  });
});
