import React from 'react'
import ReactDOM from 'react-dom';
import ReactDOMServer from 'react-dom/server';

import Reset from './styles/Reset'
import Scheduler from './containers/Scheduler.jsx'

let styles = ReactDOMServer.renderToStaticMarkup(<Reset />);
document.head.insertAdjacentHTML('beforeEnd', styles);

ReactDOM.render(<Scheduler />, document.getElementById('scheduler'));