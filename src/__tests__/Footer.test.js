import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Footer from '../components/Footer';

describe('rendered Footer', () => {
  render(<Footer />);

  test('has Text element', () => {
    const element = screen.getByText(/Math Magicians by Khalil Hamdi © 2021/i);
    expect(element).toBeInTheDocument();
  });
});
