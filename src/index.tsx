import React from 'react';
import ReactDOM from 'react-dom/client';
import EditableText from './components/UX/EditableText/';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <EditableText text='asd' />
  </React.StrictMode>
);
