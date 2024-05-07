/** @jest-environment jsdom */
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Counter from "./Counter";

test("displaying correct initial value of the counter", () => {
  render(<Counter />);
  const counterValue = screen.getByRole("counter");
  expect(counterValue).toHaveTextContent("0");
});

test("renders a number in counter", () => {
  render(<Counter />);
  const counterElement = screen.getByText(/^[0-9]+$/);
  expect(counterElement).toBeInTheDocument();
});

test("checks if number is above 0", () => {
  render(<Counter />);
  const counterElement = screen.getByText(/^[0-9]+$/);
  const counterValue = parseInt(counterElement.textContent);
  expect(counterValue).toBeGreaterThanOrEqual(0);
});

// test("increments counter when plus button is clicked", () => {
//   render(<Counter />);
//   const counterElement = screen.getByText(/0/); // Начальное значение счетчика
//   const plusButton = screen.getByText("+");
//   fireEvent.click(plusButton); // Симулируем клик по кнопке "+"
//   expect(counterElement).toHaveTextContent("1"); // Проверяем, что значение счетчика увеличилось
// });

test("renders a button with the text '+'", () => {
  render(<Counter />);
  const buttonElement = screen.getByRole("button", { name: "+" });
  expect(buttonElement).toBeInTheDocument();
});

test("renders a button with the text '-'", () => {
  render(<Counter />);
  const buttonElement = screen.getByRole("button", { name: "-" });
  expect(buttonElement).toBeInTheDocument();
});
