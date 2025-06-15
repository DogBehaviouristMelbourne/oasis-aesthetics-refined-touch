import React from 'react';

// Extend the type to allow attaching subcomponents
 
const Command = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ children, ...props }, ref) => (
    <div ref={ref} role="presentation" {...props}>{children}</div>
  )
) as any;
Command.displayName = 'Command';

// Subcomponents as simple mocks
const CommandInput = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>((props, ref) => <input ref={ref} {...props} />);
CommandInput.displayName = 'CommandInput';
const CommandList = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({ children, ...props }, ref) => <div ref={ref} className="max-h-[300px]" data-testid="command-list" {...props}>{children}</div>);
CommandList.displayName = 'CommandList';
const CommandEmpty = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({ children, ...props }, ref) => <div ref={ref} {...props}>{children}</div>);
CommandEmpty.displayName = 'CommandEmpty';
const CommandGroup = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({ children, ...props }, ref) => <div ref={ref} {...props}>{children}</div>);
CommandGroup.displayName = 'CommandGroup';
const CommandItem = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({ children, ...props }, ref) => <div ref={ref} {...props}>{children}</div>);
CommandItem.displayName = 'CommandItem';
const CommandShortcut = React.forwardRef<HTMLSpanElement, React.HTMLAttributes<HTMLSpanElement>>(({ children, ...props }, ref) => <span ref={ref} {...props}>{children}</span>);
CommandShortcut.displayName = 'CommandShortcut';
const CommandSeparator = React.forwardRef<HTMLHRElement, React.HTMLAttributes<HTMLHRElement>>((props, ref) => <hr ref={ref} className="bg-border" {...props} />);
CommandSeparator.displayName = 'CommandSeparator';

// Attach subcomponents as properties
Command.Input = CommandInput;
Command.List = CommandList;
Command.Empty = CommandEmpty;
Command.Group = CommandGroup;
Command.Item = CommandItem;
Command.Shortcut = CommandShortcut;
Command.Separator = CommandSeparator;

// Also export as named exports for flexibility
export {
  Command,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandShortcut,
  CommandSeparator,
};

export default Command;
