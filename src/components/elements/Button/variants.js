import clsx from 'clsx';

export const variants = {
  basic: clsx('text-white hover:text-primary', 'focus:ring-4', 'border-none'),
  primary: clsx(
    'bg-primary hover:bg-white',
    'text-white hover:text-primary',
    'border-primary hover:border-primary',
    'focus:ring-4 focus:ring-primary/50',
    'shadow-sm',
  ),
  secondary: clsx(
    'bg-secondary hover:bg-white',
    'text-white hover:text-secondary',
    'border-secondary hover:border-secondary',
    'focus:ring-4 focus:ring-secondary/50',
    'shadow-sm',
  ),
  success: clsx(
    'bg-green-600 hover:bg-white',
    'text-white hover:text-green-600',
    'border-green-600 hover:border-green-600',
    'focus:ring-4 focus:ring-green-600/50',
    'shadow-sm',
  ),
  warning: clsx(
    'bg-yellow-600 hover:bg-white',
    'text-white hover:text-yellow-600',
    'border-yellow-600 hover:border-yellow-600',
    'focus:ring-4 focus:ring-yellow-600/50',
    'shadow-sm',
  ),
  danger: clsx(
    'bg-red-600 hover:bg-white',
    'text-white hover:text-red-600',
    'border-red-600 hover:border-red-600',
    'focus:ring-4 focus:ring-red-600/50',
    'shadow-sm',
  ),
  'outline-primary': clsx(
    'hover:bg-primary',
    'text-primary hover:text-white',
    'border-primary border-2 hover:border-primary',
    'focus:ring-4 focus:ring-primary/50',
    'shadow-sm',
  ),
  'outline-secondary': clsx(
    'hover:bg-secondary',
    'text-secondary hover:text-white',
    'border-secondary hover:border-secondary',
    'focus:ring-4 focus:ring-secondary/50',
    'shadow-sm',
  ),

  'outline-danger': clsx(
    'hover:bg-red-600',
    'text-red-600 hover:text-white',
    'border-red-600 hover:border-red-600',
    'focus:ring-4 focus:ring-red-600/50',
    'shadow-sm',
  ),
};

export const HoldAnimation = clsx('active:scale-90 ease-in-out');
