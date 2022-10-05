import React, { useState } from 'react';
// import styles from './styles.module.css';

export interface InputProps {
  onChange?: (value: string) => void;
  placeholder?: string;
  onSubmit?: (text: string) => void;
  autofocus?: boolean;
  inputClasses?: string;
  startValue?: string;
  inputStyle?: React.CSSProperties;
}

/**
 * Renders a Form with Input component, to handle the onChange and onSubmit event properly.
 * @param {string} placeholder - Text for the input placeholder.
 * @param {(text: string) => void} onSubmit - Callback function to be called in the onSubmit event.
 * @param {(value: string) => void} onChange - Callback function to be called in the onChange event.
 * @param {boolean} [autofocus=false] - Defines if the input should be autofocused when mounted in the UI.
 * @param {string} startValue - Default value of the input.
 * @param {CSSProperties} inputStyle - Object with Javascript styles to be applied to the input.
 */
const Input = ({
  placeholder = '',
  onSubmit,
  onChange,
  autofocus = false,
  startValue = '',
  inputClasses = '',
  inputStyle,
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

  return (
    <form onSubmit={handleSubmit}>
      <input
        style={inputStyle}
        value={value}
        onChange={evt => handleChange(evt.target.value)}
        className={inputClasses}
        placeholder={placeholder}
        autoFocus={autofocus}
      />
    </form>
  );
};

export default Input;
