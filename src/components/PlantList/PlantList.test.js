import React from "react";
import { render } from "@testing-library/react";
import PlantList from "./PlantList";

describe("PlantList tests", () => {
  it("should render", () => {
    expect(render(<PlantList />)).toBeTruthy();
  });
});
