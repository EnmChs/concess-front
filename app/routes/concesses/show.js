import Ember from 'ember';

export default Ember.Route.extend({
  model(params){
    return this.store.findRecord('concess', params.concess_id);
  },
  actions: {
    // confirm(concess) {
    //   concess.deleteRecord();
    //   concess.save(); // => true
    //   this.transitionTo('concesses');
    //   if(concess.get('isDeleted')){
    //     this.toast.success('Concess deleted!');
    //   }else{
    //     this.toast.error('Concess could not be deleted!');
    //   }
    // },
  }
});