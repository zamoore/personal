import Ember from 'ember';
import _range from 'lodash/range';

const { Component, computed } = Ember;

export default Component.extend({
  // Element customizations
  classNames: ['pagination-bar', 'bar-card-bar'],

  // Properties set by parent
  currentPage: null,
  total: null,
  perPage: null,

  // Actions passed from parent
  onPageChange: null,

  // Component properties
  // TODO: Will need to refactor when more than 50 articles have been written
  pages: computed('total', 'perPage', function() {
    return Math.ceil(this.get('total') / this.get('perPage'));
  }),
  pagesArray: computed('pages', function() {
    return _range(1, this.get('pages') + 1);
  }),
  nextPage: computed('currentPage', function() {
    return this.get('currentPage') + 1;
  }),
  previousPage: computed('currentPage', function() {
    return this.get('currentPage') - 1;
  }),

  actions: {
    changePage(page) {
      this.get('onPageChange')(page);
    }
  }
});
