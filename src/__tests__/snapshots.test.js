import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import App from '../components/App';
import Display from '../components/Display';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import Home from '../components/Home';
import Quote from '../components/Quote';

describe('Snapshots', () => {
  beforeEach(() => render(<Nav />));

  it('renders App correctly', () => {
    const tree = renderer.create(<App />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders Home correctly', () => {
    const tree = renderer.create(<Home />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders Quote correctly', () => {
    const tree = renderer.create(<Quote />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders Display correctly', () => {
    const tree = renderer.create(<Display />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders Nav correctly', () => {
    const tree = renderer.create(<Nav />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders Footer correctly', () => {
    const tree = renderer.create(<Footer />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
