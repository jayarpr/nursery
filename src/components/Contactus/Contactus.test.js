import React from "react";
import { render } from "@testing-library/react";
import Contactus from "./Contactus";

describe("Contactus tests", () => {
  it("should render", () => {
    expect(render(<Contactus />)).toBeTruthy();
  });
});
