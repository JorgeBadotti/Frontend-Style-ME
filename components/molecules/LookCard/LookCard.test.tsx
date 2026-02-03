// @vitest-environment jsdom
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import LookCard from './LookCard';
import { describe, it, expect, vi } from 'vitest';
import * as matchers from '@testing-library/jest-dom/matchers';

expect.extend(matchers);

describe('LookCard', () => {
  it('renders correctly with given props', () => {
    const props = {
      imageUrl: 'test-image.jpg',
      title: 'Test Title',
      subtitle: 'Test Subtitle',
      lookId: 'look-123',
      onLookClick: vi.fn(),
    };

    render(<LookCard {...props} />);

    // Check if title and subtitle are rendered
    expect(screen.getByText('Test Title')).toBeInTheDocument();
    expect(screen.getByText('Test Subtitle')).toBeInTheDocument();

    // Check if image is rendered with correct src and alt
    const image = screen.getByAltText('Test Title') as HTMLImageElement;
    expect(image).toBeInTheDocument();
    expect(image.src).toContain('test-image.jpg');

    // Check if button is rendered and clickable
    const button = screen.getByText("I'll wear this today");
    expect(button).toBeInTheDocument();

    fireEvent.click(button);
    expect(props.onLookClick).toHaveBeenCalledWith('look-123');
  });
});
