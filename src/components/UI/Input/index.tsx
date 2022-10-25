import React, { Key, useState } from 'react';
// import styles from './styles.module.css';

export interface InputProps {
  placeholder?: string;
  autofocus?: boolean;
  inputClasses?: string;
  startValue?: string;
  inputStyle?: React.CSSProperties;
  onChange?: (value: string) => void;
  onSubmit?: (text: string) => void;
  onCancel?: () => void;
}

/**
 * Renders a Form with Input component, to handle the onChange and onSubmit event properly.
 * @param {string} placeholder - Text for the input placeholder.
 * @param {boolean} [autofocus=false] - Defines if the input should be autofocused when mounted in the UI.
 * @param {string} startValue - Default value of the input.
 * @param {CSSProperties} inputStyle - Object with Javascript styles to be applied to the input.
 * @param {CSSProperties} inputStyle - Object with Javascript styles to be applied to the input.
 * @param {(value: string) => void} onChange - Callback function to be called in the onChange event.
 * @param {(text: string) => void} onSubmit - Callback function to be called in the onSubmit event.
 * @param {() => void} onCancel - Callback function to be called in the blur event (when lossing focus) or pressing cancel buttons.
 */
const Input = ({
  placeholder = '',
  autofocus = false,
  startValue = '',
  inputClasses = '',
  inputStyle,
  onSubmit,
  onChange,
  onCancel,
}: InputProps) => {
  const [value, setValue] = useState<string>(startValue);

  const handleChange = (value: string) => {
    setValue(value);

    if (onChange && typeof onChange === 'function') {
      onChange(value);
    }
  };

  /***
   * The evt.preventDefault() is used to prevent the reloading of the page on the submit.
   * The submit event is used to handle the user input submit with the keyboard and different devices (compatibility).
   */
  const handleSubmit = (evt: React.ChangeEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (onSubmit && typeof onSubmit === 'function') {
      onSubmit(value);
    }
  };

  const handleKeyDown = (evt: React.KeyboardEvent<HTMLInputElement>) => {
    if (evt.key === 'Escape') {
      onCancel && typeof onCancel === 'function' && onCancel();
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        style={inputStyle}
        value={value}
        onChange={evt => handleChange(evt.target.value)}
        className={inputClasses}
        placeholder={placeholder}
        autoFocus={autofocus}
        onBlur={onCancel}
        onKeyDown={handleKeyDown}
      />
    </form>
  );
};

export default Input;
