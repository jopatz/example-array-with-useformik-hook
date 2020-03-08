import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  
  expect(getByText(/Foo/i)).toBeInTheDocument();
  expect(getByText(/Bar/i)).toBeInTheDocument();
  expect(getByText(/Bazz/i)).toBeInTheDocument();
});
