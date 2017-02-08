import Ember from 'ember';

const { Controller } = Ember;

export default Controller.extend({
  queryParams: ['page', 'perPage'],
  page: 1,
  perPage: 10,

  actions: {
    changePage(page) {
      this.set('page', page);
    },
    createPost() {
      let newPost = this.get('store').createRecord('post', {
        title: this.get('title'),
        body: 'This is a test'
      });

      newPost.save().then((post) => {
        console.log(post);
      });
    }
  }
});
