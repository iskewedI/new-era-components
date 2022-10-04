declare interface InputProps {
  onChange?: (value: string) => void;
  placeholder?: string;
  onSubmit?: (text: string) => void;
  autofocus?: boolean;
  inputClasses?: string;
  startValue?: string;
  formStyle?: React.CSSProperties;
}

declare interface EditableTextProps {
  editing?: boolean;
  text?: string;
  onChange?: (newValue: string) => void;
  onSubmit?: (newValue: string) => void;
  onEditStart?: () => void;
  containerStyles?: string;
  enabled?: boolean;
  controlled?: boolean;
}

declare interface NewEraComponents {
  UX: {
    EditableText: (props: EditableTextProps) => JSX.Element;
  };

  UI: {
    Input: (props: InputProps) => JSX.Element;
  };
}

export default NewEraComponents;
