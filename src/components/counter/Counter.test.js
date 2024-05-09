/** @jest-environment jsdom */
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Counter from "./Counter";

test("displaying correct initial value of the counter", () => {
  render(<Counter />);
  const counterValue = screen.getByRole("counter").textContent;
  expect(counterValue).toEqual("0");
});

test("increments counter when plus button is clicked", () => {
  render(<Counter />);
  const counterElement = screen.getByText(/0/); // Initial value
  const plusButton = screen.getByText("+");
  fireEvent.click(plusButton); // Симулируем клик по кнопке "+"
  expect(counterElement).toHaveTextContent("1"); // Проверяем, что значение счетчика увеличилось
});

test("decrements counter when minus button is clicked", () => {
  render(<Counter />);
  const counterElement = screen.getByText(/1/); // Initial value
  const minusButton = screen.getByText("-");
  fireEvent.click(minusButton); // Симулируем клик по кнопке "+"
  expect(counterElement).toHaveTextContent("0"); // Проверяем, что значение счетчика увеличилось
});

// test("renders a number in counter", () => {
//   render(<Counter />);
//   const counterElement = screen.getByText(/^[0-9]+$/);
//   expect(counterElement).toBeInTheDocument();
// });

// test("checks if number is above 0", () => {
//   render(<Counter />);
//   const counterElement = screen.getByText(/^[0-9]+$/);
//   const counterValue = parseInt(counterElement.textContent);
//   expect(counterValue).toBeGreaterThanOrEqual(0);
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

// Проверка отображения начального значения счетчика.
// Проверка корректного увеличения значения счетчика при нажатии на кнопку "+".
// Проверка корректного уменьшения значения счетчика при нажатии на кнопку "-".

// Проверка того, что значение счетчика не уходит в отрицательные значения.
// Проверка того, что счетчик остается неизменным при нажатии на кнопку "-" при минимальном значении.

// Проверка визуального отображения кнопок "+" и "-".
// Проверка корректности обработки других действий пользователя, которые могут повлиять на состояние счетчика (например, ввод чисел в поле ввода).

// Проверка реакции компонента на внешние изменения, если такие есть (например, изменение начального значения счетчика через props).

// Проверка корректного обновления отображаемого значения счетчика после изменения его значения.
// Проверка обработки исключительных ситуаций, таких как некорректные входные данные или отсутствие обработчиков событий для кнопок.
