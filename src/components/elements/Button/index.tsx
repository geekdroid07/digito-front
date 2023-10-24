import clsx from 'clsx';
import { forwardRef } from 'react';
import { Spinner } from '@/components/elements/Spinner';
import { HoldAnimation, variants } from './variants';

const sizes = {
  sm: 'py-2 px-4 text-sm',
  md: 'py-2 px-6 text-md',
  lg: 'py-3 px-8 text-lg',
};

type IconProps =
  | { startIcon: React.ReactElement; endIcon?: never }
  | { endIcon: React.ReactElement; startIcon?: never }
  | { endIcon?: undefined; startIcon?: undefined };

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
  isLoading?: boolean;
} & IconProps;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      type = 'button',
      className = '',
      variant = 'primary',
      size = 'md',
      isLoading = false,
      startIcon,
      endIcon,
      ...props
    },
    ref,
  ) => (
    <button
      ref={ref}
      disabled={isLoading}
      type={type}
      className={clsx(
        'flex justify-center items-center border',
        'disabled:opacity-70 disabled:cursor-not-allowed',
        'focus:outline-none',
        'transition-all duration-200',
        'rounded-full',
        variants[variant],
        sizes[size],
        HoldAnimation,
        className,
      )}
      {...props}
    >
      {isLoading && (
        <Spinner size="sm" variant="light" className="text-current" />
      )}
      {!isLoading && startIcon}
      <span className={clsx(props.children && 'mx-2')}>{props.children}</span>
      {!isLoading && endIcon}
    </button>
  ),
);

Button.displayName = 'Button';
