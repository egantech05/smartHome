import React from "react";
import { render } from "@testing-library/react-native";
import TopUserBars from "../src/components/TopUser";

describe("TopUserBars", () => {
  it("renders only the first 5 users", () => {
    const data = [
      { label: "Num1", value: 100 },
      { label: "Num2", value: 80 },
      { label: "Num3", value: 60 },
      { label: "Num4", value: 40 },
      { label: "Num5", value: 20 },
      { label: "Num6", value: 10 },
    ];

    const { getByText, queryByText } = render(<TopUserBars data={data} />);

    expect(getByText("Num1")).toBeTruthy();
    expect(getByText("Num5")).toBeTruthy();
    expect(queryByText("Num6")).toBeNull();
  });

  it("renders label and value", () => {
    const { getByText } = render(
      <TopUserBars data={[{ label: "X", value: 42 }]} />
    );

    expect(getByText("X")).toBeTruthy();
    expect(getByText("42")).toBeTruthy();
  });
});