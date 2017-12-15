import Ember from 'ember';

export default Ember.Route.extend({
	model(){
		return this.store.findAll('concess');
	}, 
	actions: {
		confirm(concess) {
      concess.deleteRecord();
      concess.save(); // => true
      this.transitionTo('concesses');
      if(concess.get('isDeleted')){
        this.toast.success('Concess deleted!');
      }else{
        this.toast.error('Concess could not be deleted!');
      }
    },
	}
});
