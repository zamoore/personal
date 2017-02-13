import Ember from 'ember';

const { Controller } = Ember;

export default Controller.extend({
  // Query params and defaults
  queryParams: ['page', 'perPage'],
  page: 1,
  perPage: 10,

  // Controller actions
  actions: {
    changePage(page) {
      this.set('page', page);
    }
  }
});
