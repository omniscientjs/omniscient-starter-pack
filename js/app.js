import component from 'omniscient';
import {DOM} from 'react';
let {div} = DOM;

export default component('App', ({counter}) =>
  div({ className: 'app' },
    counter.deref()));

  // or with jsx:
  //
  // <div className="app">
  //   {counter.deref()}
  // </div>);
  //
  // just remember to:
  //
  // import React from 'react';
