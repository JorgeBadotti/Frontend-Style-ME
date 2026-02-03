import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Layout from './Layout';
import { RoutePath } from '../constants';

describe('Layout Component', () => {
  it('renders children content', () => {
    render(
      <MemoryRouter>
        <Layout isAuthenticated={false} onLogout={() => {}}>
          <div>Test Content</div>
        </Layout>
      </MemoryRouter>
    );

    expect(screen.getByText('Test Content')).toBeInTheDocument();
  });

  it('renders BottomNavBar when authenticated and on Home route', () => {
    render(
      <MemoryRouter initialEntries={[RoutePath.Home]}>
        <Layout isAuthenticated={true} onLogout={() => {}}>
          <div>Home Content</div>
        </Layout>
      </MemoryRouter>
    );

    // BottomNavBar should be present.
    // We can look for a text that is in BottomNavBar, e.g., "Home" or "Closet"
    expect(screen.getByText('Home')).toBeInTheDocument(); // BottomNavBar has "Home" link
  });

  it('does not render BottomNavBar when not authenticated', () => {
    render(
      <MemoryRouter initialEntries={[RoutePath.Home]}>
        <Layout isAuthenticated={false} onLogout={() => {}}>
          <div>Home Content</div>
        </Layout>
      </MemoryRouter>
    );

    // "Home" text might be in content, so checking for navigation element or specific nav item
    // But since "Home Content" also has "Home", we should be careful.
    // However, if we search for "Closet" (another nav item), it should not be there.
    expect(screen.queryByText('Closet')).not.toBeInTheDocument();
  });
});
