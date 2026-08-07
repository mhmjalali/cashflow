'use client';

import { cn } from '@/lib/utils';
import { cva, type VariantProps } from 'class-variance-authority';
import { ChevronDown } from 'lucide-react';
import { forwardRef } from 'react';

const selectVariants = cva(
  'w-full rounded-md border bg-white text-text outline-none transition-colors appearance-none cursor-pointer disabled:pointer-events-none disabled:opacity-40',
  {
    variants: {
      size: {
        sm: 'text-xs px-3 py-1.5 h-8',
        md: 'text-sm px-3.5 py-2 h-10',
        lg: 'text-base px-4 py-2.5 h-12',
      },
      state: {
        default: 'border-border focus:border-primary',
        error: 'border-error focus:border-error',
      },
    },
    defaultVariants: {
      size: 'md',
      state: 'default',
    },
  },
);

interface SelectOption {
  value: string;
  label: string;
}

interface SelectFieldProps
  extends
    Omit<React.SelectHTMLAttributes<HTMLSelectElement>, 'size'>,
    VariantProps<typeof selectVariants> {
  label?: string;
  error?: string;
  options: SelectOption[];
  placeholder?: string;
}

const SelectField = forwardRef<HTMLSelectElement, SelectFieldProps>(
  (
    {
      label,
      error,
      size,
      state,
      className,
      id,
      options,
      placeholder,
      ...props
    },
    ref,
  ) => {
    const selectId = id ?? props.name;
    return (
      <div className="flex flex-col gap-1.5">
        {label && (
          <label htmlFor={selectId} className="text-sm font-medium text-text">
            {label}
          </label>
        )}
        <div className="relative">
          <select
            ref={ref}
            id={selectId}
            className={cn(
              selectVariants({ size, state: error ? 'error' : state }),
              className,
            )}
            defaultValue=""
            {...props}
          >
            <option value="" disabled>
              {placeholder ?? 'انتخاب کنید'}
            </option>
            {options.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
          <ChevronDown className="pointer-events-none absolute left-2.5 top-1/2 -translate-y-1/2 size-4 text-text-muted" />
        </div>
        {error && <p className="text-xs text-error">{error}</p>}
      </div>
    );
  },
);

SelectField.displayName = 'SelectField';

export default SelectField;
