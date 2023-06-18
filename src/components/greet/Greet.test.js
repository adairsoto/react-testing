import { render, screen } from '@testing-library/react'
import Greet from './greet'

describe('Greet', () => {
  test('renders greet', () => {
    render(<Greet />)
    const textElement = screen.getByText(/hello/i)
    expect(textElement).toBeInTheDocument()
  })

  // test('renders greet with a name', () => {
  //     render(<Greet name='Paul' />);
  //     const textElement = screen.getByText(/hello paul/i);w
  //     expect(textElement).toBeInTheDocument();
  // });
})

// describe can be nested

// filename conventions
// .test.js or .test.tsx
// .spec.js or .spec.tsx
// .js or .tsx in __tests__ folders

// alternatives to test method:
// test -> it
// test.only -> fit
// test.skip -> xit
