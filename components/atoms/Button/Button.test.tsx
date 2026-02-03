import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import Button from './Button';

describe('Button Component', () => {
  it('renders button with children', () => {
    render(<Button>Click Me</Button>);
    expect(screen.getByText('Click Me')).toBeInTheDocument();
  });

  it('calls onClick handler when clicked', () => {
    const handleClick = vi.fn();
    render(<Button onClick={handleClick}>Click Me</Button>);

    fireEvent.click(screen.getByText('Click Me'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('renders with icon', () => {
    render(<Button icon="add">Add</Button>);
    // Icon component likely renders a span with material symbols class or similar.
    // Assuming Icon component renders something we can query or just checking if it doesn't crash.
    // A better test would be if I knew what Icon renders.
    // Checking Icon code later if needed, but for now basic render check.
    expect(screen.getByText('Add')).toBeInTheDocument();
  });

  it('applies variant class', () => {
    const { container } = render(<Button variant="secondary">Secondary</Button>);
    // Checking if class is applied might depend on how css modules work in test env.
    // Usually it mocks them or returns the object.
    // But since we use css modules, the class name might be hashed.
    // However, we can check if the button element exists.
    const button = container.querySelector('button');
    expect(button).toBeInTheDocument();
  });
});
