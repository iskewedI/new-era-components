import { InputProps } from './components/UI/Input';
import { EditableTextProps } from './components/UX/EditableText';

interface NewEraComponents {
  UX: {
    EditableText: (props: EditableTextProps) => JSX.Element;
  };

  UI: {
    Input: (props: InputProps) => JSX.Element;
  };
}

export default NewEraComponents;
