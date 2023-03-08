import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from './App';

test('renders counter and heart icon', () => {
  const { getByText, getByTestId } = render(<App />);
  
  // Check if the counter and heart icon are rendered
  const counter = getByText(/count:/i);
  expect(counter).toBeInTheDocument();
  const heartIcon = getByTestId('heart-icon');
  expect(heartIcon).toBeInTheDocument();
});

test('increments and decrements counter', () => {
  const { getByText, getByTestId } = render(<App />);

  // Click the increment button and check if count increases
  const incrementButton = getByText('+');
  fireEvent.click(incrementButton);
  const counter = getByText(/count: 1/i);
  expect(counter).toBeInTheDocument();
  
  // Click the decrement button and check if count decreases
  const decrementButton = getByText('-');
  fireEvent.click(decrementButton);
  const updatedCounter = getByText(/count: 0/i);
  expect(updatedCounter).toBeInTheDocument();
});

test('changes heart icon size with counter', () => {
  const { getByTestId } = render(<App />);

  // Check if the heart icon size is initially 0
  const heartIcon = getByTestId('heart-icon');
  expect(heartIcon).toHaveStyle('font-size: 0px');

  // Increment count and check if the heart icon size increases
  const incrementButton = getByText('+');
  fireEvent.click(incrementButton);
  expect(heartIcon).toHaveStyle('font-size: 1px');

  // Decrement count and check if the heart icon size decreases
  const decrementButton = getByText('-');
  fireEvent.click(decrementButton);
  expect(heartIcon).toHaveStyle('font-size: 0px');
});
