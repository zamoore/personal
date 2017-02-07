import Ember from 'ember';

const { Component } = Ember;

export default Component.extend({
  // Element customizations
  tagName: 'li',
  classNames: ['post-item'],

  // Properties passed in from parent
  post: null
});
