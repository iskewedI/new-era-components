import NewEraComponents from './types';

// UI
import Input from './components/UI/Input';

// UX
import EditableText from './components/UX/EditableText/';

export { Input, EditableText };

const components: NewEraComponents = {
  UX: {
    EditableText,
  },
  UI: {
    Input,
  },
};

export default components;
