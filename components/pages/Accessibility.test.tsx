import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import ClosetScreen from './ClosetScreen';
import LookDetailScreen from './LookDetailScreen';

// Mock scrollTo since it's not implemented in jsdom
window.scrollTo = vi.fn();

describe('Accessibility Checks', () => {
  it('ClosetScreen has accessible nav buttons', () => {
    render(
      <MemoryRouter>
        <ClosetScreen />
      </MemoryRouter>
    );
    expect(screen.getByRole('button', { name: /go back/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /more options/i })).toBeInTheDocument();
  });

  it('LookDetailScreen has accessible feedback buttons', () => {
    render(
      <MemoryRouter>
         <LookDetailScreen />
      </MemoryRouter>
    );
    expect(screen.getByRole('button', { name: /dislike look/i })).toBeInTheDocument();
    // Use exact match or start/end anchor to avoid matching "Dislike look"
    expect(screen.getByRole('button', { name: /^like look$/i })).toBeInTheDocument();
  });
});
