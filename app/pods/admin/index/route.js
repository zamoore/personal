import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

const { Route } = Ember;

export default Route.extend(AuthenticatedRouteMixin, {
  queryParams: {
    page: {
      refreshModel: true
    },
    perPage: {
      refreshModel: true
    }
  },
  model(params) {
    let { page: number, perPage: size } = params;

    return this.get('store').query('post', {
      page: { number, size }
    });
  }
});
