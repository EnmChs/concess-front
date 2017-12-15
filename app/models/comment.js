import DS from 'ember-data';

export default DS.Model.extend({
  body: DS.attr('string'),
  commented: DS.belongsTo('commented', {polymorphic: true}),
  concess: DS.belongsTo('concess'),
  vehicle: DS.belongsTo('vehicle')
});


