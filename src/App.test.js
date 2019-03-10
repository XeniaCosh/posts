import React from 'react';
import ReactDOM from 'react-dom';
import localPostsKey from './localStorage';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App localKey={localPostsKey}/>, div);
  ReactDOM.unmountComponentAtNode(div);
});
