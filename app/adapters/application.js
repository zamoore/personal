import DS from 'ember-data';
import DataAdapterMixin from 'ember-simple-auth/mixins/data-adapter-mixin';

const { JSONAPIAdapter } = DS;

export default JSONAPIAdapter.extend(DataAdapterMixin, {
  // host: 'http://zamoore-blog.herokuapp.com'
  host: 'http://localhost:3333',
  namespace: 'api',
  authorizer: 'authorizer:token'
});
