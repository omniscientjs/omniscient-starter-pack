import component from 'omniscient';
import {DOM} from 'react/addons';
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


// enable 6to5-loader?experimental in webpack.config.js and 'import "babel/polyfill"' to use generators
// export function * counter () {
//   var n = 0;
//   while (true) yield n++;
// }
