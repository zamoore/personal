import DS from 'ember-data';

const { Model, attr } = DS;

export default Model.extend({
  body: attr('string'),
  publishedOn: attr('date'),
  slug: attr('string'),
  tags: attr(),
  title: attr('string')
});
