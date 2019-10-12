import React from 'react';
import App from './App';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';


afterEach(rtl.cleanup);

test('Render the app', () => {
  const wrapper = rtl.render(<App />);
});

test('checking for title', () => {
  const wrapper = rtl.render(<App />);
  const element = wrapper.queryByText('Woman\'\s World Cup Players');
  expect(element).toBeVisible();
});

test('checking that player cards render', () => {
  const wrapper = rtl.render(<App />);
  const element = wrapper.queryByRole('card');
  expect(element).toBeVisible;
});

test('checking that toggle btn renders for use', () => {
  const wrapper = rtl.render(<App />);
  const element = wrapper.queryByRole('toggleButton');
  expect(element).toBeVisible;
});


