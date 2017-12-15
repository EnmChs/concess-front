import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    editConcess: function(id){
      var self = this;
      let name = this.get('model.name');
      let description = this.get('model.description');
      let warranty = this.get('model.warranty');
      // let opentime = new Date(this.get('model.timeopen'));
      // console.log(opentime);
      // console.log(name + ' ' + description);

      this.store.findRecord('concess', id).then(function(concess){
        concess.set('name', name);
        concess.set('description', description);
        concess.set('warranty', warranty);
        // concess.set('opentime', opentime);

        concess.save();
        console.log(concess.changedAttributes());
        self.transitionToRoute('concesses');
      });
    },
    backTo: function(){
      // this.refresh();
      // var that = this;
      // this.store.findRecord('concess', id).then(function(concess){
      //   concess.set('name', concess.name);
      //   concess.set('description', concess.description);
      //   concess.set('warranty', concess.warranty);
      //   // concess.set('opentime', opentime);

      //   concess.save();
      //   that.transitionToRoute('concesses');
      // });
    }
  }
});
