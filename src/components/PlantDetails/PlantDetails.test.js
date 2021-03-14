import React from "react";
import { render } from "@testing-library/react";
import PlantDetails from "./PlantDetails";

describe("PlantDetails tests", () => {
  it("should render", () => {
    expect(render(<PlantDetails />)).toBeTruthy();
  });
});
