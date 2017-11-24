import DS from 'ember-data';

export default DS.Model.extend({
  body: DS.attr('string'),
  concess: DS.belongsTo('concess'),
  vehicle: DS.belongsTo('vehicle'),
  commented: DS.belongsTo('commented', {polymorphic: true})
});
