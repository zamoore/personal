import Ember from 'ember';

const { Controller } = Ember;

export default Controller.extend({
  // Controller properties
  title: null,

  // Actions
  actions: {
    createPost() {
      let notify = this.get('notifications');
      let newPost = this.get('store').createRecord('post', {
        title: this.get('title'),
        body: 'This is a test'
      });

      newPost.save().then(() => {
        notify.success('Post created successfully!', { autoClear: true });
      }).catch((reason) => {
        reason.errors.forEach((error) => {
          notify.error(error.detail, { autoClear: true });
        });
      });
    }
  }
});
