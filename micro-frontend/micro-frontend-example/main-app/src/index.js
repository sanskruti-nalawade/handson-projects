import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Header from 'header/dist/header.js';
import Content from 'content/dist/content.js';

ReactDOM.render(<App />, document.getElementById('root'));

// Load micro frontends
import('header/dist/header.js').then(Header => {
    Header.default();
});

import('content/dist/content.js').then(Content => {
    Content.default();
});
