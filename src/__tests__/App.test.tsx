/**
 * @jest-environment jsdom
 */

import React from "react";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom'

import App from "../App";
test('renders without crashing', () => {
   render(<App />);
   const linkElement = screen.getByText(/React/i);
   expect(linkElement).toBeInTheDocument();
});

test('renders the main element', () => {
  render(<App />);
  const mainElement = screen.getByRole('main');
  expect(mainElement).toBeInTheDocument();
});
