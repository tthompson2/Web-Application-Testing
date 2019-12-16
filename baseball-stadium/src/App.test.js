import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

const help = require('./app');

describe('sum function', () => {
  it('sums two integers', () => { 
    const expected = 3;
    const actual = help.sum(1,2);
    expect(actual).toBe(expected);
  });
});