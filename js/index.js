import React from 'react';
import component from 'omniscient';
import immstruct from 'immstruct';

import App from './app';
import '../less/index.less';

let data = immstruct({
  counter: 0
});

let render = () =>
  React.render(
    App({ counter: data.cursor('counter') }),
    document.body);

render();
data.on('swap', render);

setInterval(
  () => data.cursor().update('counter', i => i + 1),
  1000);
