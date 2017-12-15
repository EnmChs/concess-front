import DS from 'ember-data';

export default DS.Model.extend({
  model: DS.attr('string'),
  brand: DS.attr('string'),
  color: DS.attr('string'),
  comments: DS.hasMany('comment'),
  concess: DS.belongsTo('concess')
});
