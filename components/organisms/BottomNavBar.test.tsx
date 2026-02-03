import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import BottomNavBar from './BottomNavBar';

describe('BottomNavBar Component', () => {
  it('renders navigation items', () => {
    render(
      <MemoryRouter>
        <BottomNavBar />
      </MemoryRouter>
    );

    // Assuming BOTTOM_NAV_ITEMS has Home, Closet, Studio, Bag, Profile
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Closet')).toBeInTheDocument();
    expect(screen.getByText('Studio')).toBeInTheDocument();
    // Bag might be icon only or text, let's check basic ones.
  });
});
