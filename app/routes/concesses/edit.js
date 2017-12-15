import Ember from 'ember';

export default Ember.Route.extend({
  // model(params){
  //   this.store.findRecord('concess', params.concess_id);
  // },
  didInsertElement: function(){
    console.log('loaded'); //jquery code
  }   
});
