import React from "react";
import { render } from "@testing-library/react";
import Home from "./Home";
import App from "./App";
import Cash from "./Cash";
import Dash from "./Dash";
import Buy from "./Buy";
import Call from "./Call";
import Get from "./Get";
import Reg from "./Reg";

test("renders axcora link", () => {
  const { getByText } = render(<Home />);
  const { getByText } = render(<App />);
  const { getByText } = render(<Cash />);
  const { getByText } = render(<Dash />);
  const { getByText } = render(<Buy />);
  const { getByText } = render(<Call />);
  const { getByText } = render(<Reg />);
  const { getByText } = render(<Get />);
  const linkElement = getByText(/axcora/i);
  expect(linkElement).toBeInTheDocument();
});
