import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('should renders React App title', () => {
    render(<App />);
    const linkElement = screen.getByText(/React App/i);
    expect(linkElement).toBeInTheDocument();
  });
});
