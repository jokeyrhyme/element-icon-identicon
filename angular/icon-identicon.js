/*jslint indent:2*/

// UMD pattern: https://github.com/umdjs/umd/blob/master/returnExports.js
(function (root, factory) {
  'use strict';
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['angular', '../lib/identicon-canvas'], factory);
  } else if (typeof exports === 'object') {
    // Node. Does not work with strict CommonJS, but
    // only CommonJS-like environments that support module.exports,
    // like Node.
    module.exports = factory(require('angular'), require('../lib/identicon-canvas'));
  } else {
    // Browser globals (root is window)
    factory(root.angular, root.identiconCanvas);
  }
}(this, function (angular, identiconCanvas) {
  'use strict';

  return {};
}));
