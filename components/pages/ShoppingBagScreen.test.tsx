import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import ShoppingBagScreen from './ShoppingBagScreen';

// Mock scrollTo since it's not implemented in jsdom
window.scrollTo = vi.fn();

describe('ShoppingBagScreen', () => {
  it('renders with accessible navigation buttons', () => {
    render(
      <MemoryRouter>
        <ShoppingBagScreen />
      </MemoryRouter>
    );

    // This should fail initially because the aria-label is missing
    const backButton = screen.getByRole('button', { name: /go back/i });
    expect(backButton).toBeInTheDocument();
  });
});
