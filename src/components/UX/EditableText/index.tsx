import React, { useEffect, useState } from 'react';
import Input from '../../UI/Input';

interface EditableTextProps {
  editing?: boolean;
  text?: string;
  onChange?: (newValue: string) => void;
  onSubmit?: (newValue: string) => void;
  onEditStart?: () => void;
  containerClasses?: string;
  enabled?: boolean;
  controlled?: boolean;
}

const EditableText = ({
  editing = false,
  text = '',
  containerClasses = '',
  enabled = true,
  controlled = false,
  onChange,
  onSubmit,
  onEditStart,
}: EditableTextProps) => {
  const [isEditing, setIsEditing] = useState(editing);
  const [textValue, setTextValue] = useState(text);

  const handleChange = (value: string) => {
    if (onChange && typeof onChange === 'function') {
      onChange(value);
    }
  };

  const handleSubmit = (value: string) => {
    if (onSubmit && typeof onSubmit === 'function') {
      onSubmit(value);
    }

    setTextValue(value);
    setIsEditing(false);
  };

  const handleCancel = () => {
    if (!controlled) {
      setIsEditing(false);
    }
  };

  /***
   * Used in the container.
   * Handles the double click event.
   * It'll only work if the component is enabled, and will call the onEditStart callback if is editing.
   */
  const handleDoubleClick = () => {
    if (!enabled) return;

    if (!isEditing === true) {
      if (onEditStart && typeof onEditStart === 'function') {
        onEditStart();
      }
    }

    setIsEditing(editing => !editing);
  };

  /***
   * ONLY used if set as controlled component.
   * Hook used to ensure this component is updated if the props changes.
   * It'll force render the component if something has changed.
   */
  useEffect(() => {
    if (controlled) {
      if (editing !== isEditing) {
        setIsEditing(editing);
      }

      if (text !== textValue) {
        setTextValue(text);
      }
    }
  }, [controlled, editing, isEditing, text, textValue]);

  return (
    <div className={containerClasses} onDoubleClick={handleDoubleClick}>
      {!isEditing && textValue}
      {isEditing && (
        <Input
          startValue={textValue}
          onChange={handleChange}
          onSubmit={handleSubmit}
          autofocus={true}
          inputStyle={text ? { width: `${text.length}ch` } : undefined}
          onCancel={handleCancel}
        />
      )}
    </div>
  );
};

export default EditableText;
