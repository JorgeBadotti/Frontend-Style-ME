import React from 'react';
import styles from './Input.module.css';
import { InputType } from '../../../types';

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
  const inputClasses = [
    styles.input,
    isError ? styles.errorInput : '',
    className,
  ].filter(Boolean).join(' ');

  const labelClasses = [
    styles.label,
    isError ? styles.errorLabel : '',
  ].filter(Boolean).join(' ');

  const renderInput = () => {
    if (type === 'select' && options) {
      return (
        <div className={styles.selectWrapper}>
          <select className={inputClasses} {...(props as React.SelectHTMLAttributes<HTMLSelectElement>)}>
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          <span className={`material-symbols-outlined ${styles.selectIcon}`}>expand_more</span>
        </div>
      );
    }
    return (
      <input
        type={type === 'select' ? 'text' : type} // Fallback to text if type is select but no options, or other unsupported
        className={inputClasses}
        {...(props as React.InputHTMLAttributes<HTMLInputElement>)}
      />
    );
  };

  return (
    <div className={`${styles.inputContainer} ${containerClassName || ''}`}>
      {label && <label htmlFor={props.id} className={labelClasses}>{label}</label>}
      {renderInput()}
      {isError && errorMessage && <p className={styles.errorMessage}>{errorMessage}</p>}
    </div>
  );
};

export default Input;