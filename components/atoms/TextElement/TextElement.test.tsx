import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { describe, it, expect } from 'vitest';
import TextElement from './TextElement';

describe('TextElement', () => {
  it('renders a blockquote element when variant is "quote"', () => {
    render(<TextElement variant="quote">Test Quote</TextElement>);
    const element = screen.getByText('Test Quote');
    expect(element.tagName).toBe('BLOCKQUOTE');
  });

  it('renders an h1 element when variant is "h1"', () => {
    render(<TextElement variant="h1">Test Heading</TextElement>);
    const element = screen.getByText('Test Heading');
    expect(element.tagName).toBe('H1');
  });

  it('allows overriding the element with "as" prop', () => {
    render(<TextElement variant="quote" as="div">Test Div Quote</TextElement>);
    const element = screen.getByText('Test Div Quote');
    expect(element.tagName).toBe('DIV');
  });
});
