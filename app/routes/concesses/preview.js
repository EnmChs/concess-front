import Ember from 'ember';

export default Ember.Route.extend({
  model(params){
    return this.store.findRecord('concess', params.concess_id);
  },
  // renderTemplate() {
  //   this.render({ 
  //     into: 'concesses',
  //     outlet: 'menu' 
  //   });
  // },
    
});