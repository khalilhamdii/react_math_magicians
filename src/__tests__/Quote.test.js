import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Quote from '../components/Quote';
import Nav from '../components/Nav';

describe('rendered Quote', () => {
  render(<Nav />);
  render(<Quote />);

  test('has Text element', () => {
    const element = screen.getByText(/Quote of the day/i);
    expect(element).toBeInTheDocument();
  });
});
