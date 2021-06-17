import React from "react";
import { render } from "@testing-library/react";
import Header from "../header";

test("temp", () => {
  expect(true).toBe(true);
});

test("header renders some text", () => {
  const { debug } = render(<Header />);
  debug();
});
