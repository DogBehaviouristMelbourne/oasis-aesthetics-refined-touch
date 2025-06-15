import React from 'react';
import { render, screen } from '@testing-library/react';
import { ParallaxHero } from './ParallaxHero';

describe('ParallaxHero', () => {
  it('renders the hero overlay and headline', () => {
    render(<ParallaxHero scrollY={0} />);
    // Overlay should be present
    const overlay = screen.getByRole('presentation', { hidden: true });
    expect(overlay).toBeInTheDocument();
    // Headline should be visible
    expect(screen.getByText(/Enhance Your/i)).toBeInTheDocument();
  });
});
