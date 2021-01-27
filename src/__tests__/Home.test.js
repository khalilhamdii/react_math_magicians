import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Home from '../components/Home';
import Nav from '../components/Nav';

describe('rendered Home', () => {
  render(<Nav />);
  render(<Home />);

  test('has Text element', () => {
    const element = screen.getByText(/Welcome to our page!/i);
    expect(element).toBeInTheDocument();
  });
});
