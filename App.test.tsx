import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from './App';

// Mock scrollTo since it's not implemented in jsdom
window.scrollTo = vi.fn();

describe('App Component', () => {
  it('renders Welcome Screen by default', () => {
    render(<App />);

    // Check for element from WelcomeScreen
    // "Escolha sua Jornada" seems unique to WelcomeScreen
    expect(screen.getByText('Escolha sua Jornada')).toBeInTheDocument();
  });
});
