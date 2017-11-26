import Ember from 'ember';

export default Ember.Controller.extend({
  type: null,
  // types: Ember.String.w('Tesla Chrysler Toyota'),
  types: [
    'Automóvil',
    'Camionetas',
  ],
  
  actions: {

    createConcess: function(){
      let name = this.get('concess_name');
      let aprox = this.get('aproxNum');
      let address = this.get('address');
      let option = this.get('type');
      let warranty = this.get('warranty');
      let contact = this.get('contact');
      let timeopen = this.get('timeopen');
      let timeclose = this.get('timeclose');

      var concess = this.store.createRecord('concess', {
        name: name,
        aproxNum: aprox,
        address: address,
        carsType: option,
        contactNumber: contact,
        warranty: warranty,
        openTime: timeopen,
        closeTime: timeclose
      });
      concess.save();

      this.setProperties({
        concess_name: '',
        aproxNum: '',
        address: '',
        type: '',
        warranty: false,
        contact: '',
        timeopen: '',
        timeclose: ''

      });
      this.transitionToRoute('concesses');
    }
  }
});