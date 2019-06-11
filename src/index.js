/* eslint-disable no-undef */
import React from 'react';
import ReactDOM from 'react-dom';

const title = "Don't junk me!!";

ReactDOM.render(<div>{title}</div>, document.getElementById('app'));

module.hot.accept();
