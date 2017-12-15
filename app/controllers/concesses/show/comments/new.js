import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    createComment: function(params){
      let body = this.get('body');
      let concess = this.get('store').findRecord('concess', params.id)
      var comment = this.store.createRecord('comment',{
        body: body,
        commented: concess
      });
      comment.save();
      this.transitionToRoute('concesses.show', params.id);

    }
  }
});



