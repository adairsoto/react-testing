import { render, screen } from '@testing-library/react';
import Greet from './greet';

test('renders greet', () => {
  render(<Greet />);
  const textElement = screen.getByText(/hello/i);
  expect(textElement).toBeInTheDocument();
});

test('renders greet with a name', () => {
    render(<Greet name='Paul' />);
    const textElement = screen.getByText(/hello paul/i);
    expect(textElement).toBeInTheDocument();
});