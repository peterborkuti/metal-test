/* jshint ignore:start */
import Component from 'metal-component';
import Soy from 'metal-soy';
var templates;
goog.loadModule(function(exports) {

// This file was automatically generated from Test01.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Test01.
 * @public
 */

goog.module('Test01.incrementaldom');

/** @suppress {extraRequire} */
var soy = goog.require('soy');
/** @suppress {extraRequire} */
var soydata = goog.require('soydata');
/** @suppress {extraRequire} */
goog.require('goog.i18n.bidi');
/** @suppress {extraRequire} */
goog.require('goog.asserts');
/** @suppress {extraRequire} */
goog.require('goog.string');
var IncrementalDom = goog.require('incrementaldom');
var ie_open = IncrementalDom.elementOpen;
var ie_close = IncrementalDom.elementClose;
var ie_void = IncrementalDom.elementVoid;
var ie_open_start = IncrementalDom.elementOpenStart;
var ie_open_end = IncrementalDom.elementOpenEnd;
var itext = IncrementalDom.text;
var iattr = IncrementalDom.attr;


/**
 * @param {Object<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object<string, *>=} opt_ijData
 * @return {void}
 * @suppress {checkTypes}
 */
function $render(opt_data, opt_ignored, opt_ijData) {
  ie_open('div');
    ie_open('div', null, null,
        'id', 'tooltipexamples');
      ie_open('h1');
        itext('Tooltip');
      ie_close('h1');
      ie_open('div', null, null,
          'class', 'row');
        ie_open('div', null, null,
            'id', 'tooltip1',
            'class', 'col-md-4 text-right');
          itext('Here should be a tooltip 1');
        ie_close('div');
        ie_open('div', null, null,
            'data-title', 'tooltip 2',
            'class', 'col-md-4 text-center');
          itext('Here should be tooltip 2');
        ie_close('div');
        ie_open('div', null, null,
            'data-title', 'tooltip 3',
            'class', 'col-md-4 text-center');
          itext('Here should be tooltip 3');
        ie_close('div');
      ie_close('div');
    ie_close('div');
    ie_open('hr');
    ie_close('hr');
    ie_open('div', null, null,
        'id', 'modalexamples');
      ie_open('h1');
        itext('Modal');
      ie_close('h1');
      ie_void('div', null, null,
          'class', 'modal');
      ie_open('button', null, null,
          'type', 'button',
          'class', 'btn btn-primary openModal');
        itext('Open Modal');
      ie_close('button');
    ie_close('div');
    ie_open('hr');
    ie_close('hr');
    ie_open('div', null, null,
        'id', 'togglerexamples');
      ie_open('h1');
        itext('Toggler');
      ie_close('h1');
      ie_open('div', null, null,
          'class', 'row');
        ie_open('div', null, null,
            'class', 'col-md-6');
          ie_open('button', null, null,
              'class', 'btn btn-primary');
            itext('Read more \u00BB');
          ie_close('button');
          ie_open('div', null, null,
              'class', 'toggler-content toggler-collapsed');
            itext('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea qui sint distinctio recusandae quo ut eaque provident eius eos commodi natus labore culpa modi soluta quia repudiandae nulla ex. Reiciendis cupiditate quis voluptatum atque veniam assumenda itaque perferendis eos voluptatem dolores aut eum. Ut voluptatum amet earum delectus totam unde!');
          ie_close('div');
        ie_close('div');
        ie_open('div', null, null,
            'class', 'col-md-6');
          ie_open('button', null, null,
              'class', 'btn btn-primary');
            itext('Read more 2 \u00BB');
          ie_close('button');
          ie_open('div', null, null,
              'class', 'toggler-content toggler-collapsed');
            itext('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea qui sint distinctio recusandae quo ut eaque provident eius eos commodi natus labore culpa modi soluta quia repudiandae nulla ex. Reiciendis cupiditate quis voluptatum atque veniam assumenda itaque perferendis eos voluptatem dolores aut eum. Ut voluptatum amet earum delectus totam unde!');
          ie_close('div');
        ie_close('div');
      ie_close('div');
    ie_close('div');
    ie_open('hr');
    ie_close('hr');
    ie_open('div', null, null,
        'id', 'autocompleteexample');
      ie_open('h1');
        itext('Autocomplete');
      ie_close('h1');
      ie_open('p');
        itext('Type in a continent\'s name (Africa, Asia, etc.)');
      ie_close('p');
      ie_open('div', null, null,
          'class', 'row');
        ie_open('div', null, null,
            'class', 'col-md-6');
          ie_open('input', null, null,
              'id', 'autocompleteinput',
              'type', 'text',
              'class', 'form-control');
          ie_close('input');
        ie_close('div');
        ie_open('div', null, null,
            'class', 'col-md-6');
          ie_void('div', null, null,
              'id', 'autocompletelist');
        ie_close('div');
      ie_close('div');
    ie_close('div');
    ie_open('hr');
    ie_close('hr');
    ie_open('div', null, null,
        'id', 'selectexample');
      ie_open('h1');
        itext('Select');
      ie_close('h1');
      ie_open('div', null, null,
          'class', 'col-md-4');
        ie_open('h1');
          itext('Dropdown + input group left');
        ie_close('h1');
        ie_void('div', null, null,
            'id', 'first');
      ie_close('div');
      ie_open('div', null, null,
          'class', 'col-md-4');
        ie_open('h1');
          itext('Dropdown + label');
        ie_close('h1');
        ie_void('div', null, null,
            'id', 'second');
      ie_close('div');
    ie_close('div');
  ie_close('div');
}
exports.render = $render;
if (goog.DEBUG) {
  $render.soyTemplateName = 'Test01.render';
}

exports.render.params = [];
exports.render.types = {};
templates = exports;
return exports;

});

class Test01 extends Component {}
Soy.register(Test01, templates);
export { Test01, templates };
export default templates;
/* jshint ignore:end */
