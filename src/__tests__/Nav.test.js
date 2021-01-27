import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Nav from '../components/Nav';

describe('rendered Nav', () => {
  render(<Nav />);

  test('has Text element', () => {
    const element = screen.getByText(/Math Magicians/i);
    expect(element).toBeInTheDocument();
  });
});
