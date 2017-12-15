import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {

    createConcess: function(){
      let name = this.get('name');
      let description = this.get('description');
      let warranty = this.get('warranty');
      let timeopen = this.get('timeopen');
      // console.log(name + ' ' + description + ' ' + warranty + ' ' + timeopen);
      var concess = this.store.createRecord('concess', {
        name: name,
        description: description,
        warranty: warranty,
        openTime: timeopen,
      });
      concess.save();

      this.setProperties({
        name: '',
        description: '',
        warranty: false,
        timeopen: ''
      });
      this.transitionToRoute('concesses');
    }
  }
});