import Ember from 'ember';

const { Controller } = Ember;

export default Controller.extend({
  queryParams: {
    page: 1,
    perPage: 10
  },

  title: null,

  actions: {
    createPost() {
      let newPost = this.get('store').createRecord('post', {
        title: this.get('title')
      });

      newPost.save().then((post) => {

      }).catch((reason) => {
        console.log(reason);
      });
    }
  }
});
