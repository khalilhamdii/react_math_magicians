import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../components/App';
import Nav from '../components/Nav';

describe('rendered App', () => {
  render(<Nav />);
  render(<App />);

  test('has Text element', () => {
    const element = screen.getByText(/Let's do some math!/i);
    expect(element).toBeInTheDocument();
  });
});
