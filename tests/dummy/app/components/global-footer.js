import Ember from 'ember';

const { Component } = Ember;

export default Component.extend({
  classNames: ['global-footer'],
  classNameBindings: ['inverted:global-footer--inverted'],
});
