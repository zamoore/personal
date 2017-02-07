import DS from 'ember-data';

const { JSONAPIAdapter } = DS;

export default JSONAPIAdapter.extend({
  // host: 'http://zamoore-blog.herokuapp.com'
  host: 'http://localhost:3333'
});
