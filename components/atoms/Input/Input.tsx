import React from 'react';
import { InputType } from '../../../types';
import clsx from 'clsx';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement | HTMLSelectElement> {
  type?: InputType;
  label?: string;
  options?: { value: string; label: string }[];
  className?: string;
  containerClassName?: string;
  isError?: boolean;
  errorMessage?: string;
}

const Input: React.FC<InputProps> = ({
  type = 'text',
  label,
  options,
  className,
  containerClassName,
  isError,
  errorMessage,
  ...props
}) => {
  const baseInputClasses = "w-full px-5 py-4 rounded-full border bg-filter-bg text-slate-700 text-sm outline-none transition-all duration-200 placeholder:text-slate-300 dark:bg-slate-700 dark:border-slate-600 dark:text-slate-200 dark:placeholder:text-slate-600 focus:border-primary focus:ring-1 focus:ring-primary";

  const inputClasses = clsx(
    baseInputClasses,
    isError ? "border-red-alert ring-1 ring-red-alert" : "border-border-light",
    className
  );

  const labelClasses = clsx(
    "font-sans text-xs font-bold tracking-luxury-sm uppercase mb-2 pl-[0.1rem]",
    isError ? "text-red-alert" : "text-text-muted dark:text-slate-400"
  );

  const renderInput = () => {
    if (type === 'select' && options) {
      return (
        <div className="relative w-full">
          <select className={clsx(inputClasses, "appearance-none pr-10 cursor-pointer")} {...(props as React.SelectHTMLAttributes<HTMLSelectElement>)}>
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          <span className="material-symbols-outlined absolute right-5 top-1/2 -translate-y-1/2 text-sm text-slate-400 pointer-events-none">expand_more</span>
        </div>
      );
    }
    return (
      <input
        type={type === 'select' ? 'text' : type}
        className={inputClasses}
        {...(props as React.InputHTMLAttributes<HTMLInputElement>)}
      />
    );
  };

  return (
    <div className={clsx("flex flex-col w-full", containerClassName)}>
      {label && <label htmlFor={props.id} className={labelClasses}>{label}</label>}
      {renderInput()}
      {isError && errorMessage && <p className="font-sans text-xs text-red-alert mt-1 pl-[0.1rem]">{errorMessage}</p>}
    </div>
  );
};

export default Input;
