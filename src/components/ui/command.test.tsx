import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Command, CommandDialog, CommandInput, CommandList, CommandEmpty, CommandGroup, CommandItem, CommandShortcut, CommandSeparator } from './command';
import { vi } from 'vitest';

vi.mock('cmdk');

// Basic smoke tests for all exports

describe('Command UI Components', () => {
  it('renders Command', () => {
    render(<Command />);
    expect(screen.getByRole('presentation')).toBeInTheDocument();
  });

  it('renders CommandDialog with children', () => {
    render(
      <CommandDialog open={true}>
        <span>Dialog Content</span>
      </CommandDialog>
    );
    expect(screen.getByText('Dialog Content')).toBeInTheDocument();
  });

  it('renders CommandInput', () => {
    render(<CommandInput />);
    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });

  it('renders CommandList', () => {
    render(<CommandList />);
    // Use data-testid for robust selection
    expect(screen.getByTestId('command-list')).toBeInTheDocument();
  });

  it('renders CommandEmpty', () => {
    render(<CommandEmpty>No results</CommandEmpty>);
    expect(screen.getByText('No results')).toBeInTheDocument();
  });

  it('renders CommandGroup', () => {
    render(<CommandGroup>Group Content</CommandGroup>);
    expect(screen.getByText('Group Content')).toBeInTheDocument();
  });

  it('renders CommandItem', () => {
    render(<CommandItem>Item Content</CommandItem>);
    expect(screen.getByText('Item Content')).toBeInTheDocument();
  });

  it('renders CommandShortcut', () => {
    render(<CommandShortcut>⌘K</CommandShortcut>);
    expect(screen.getByText('⌘K')).toBeInTheDocument();
  });

  it('renders CommandSeparator', () => {
    render(<CommandSeparator />);
    expect(document.querySelector('.bg-border')).toBeInTheDocument();
  });

  it('should run a basic test', () => {
    expect(true).toBe(true);
  });
});
