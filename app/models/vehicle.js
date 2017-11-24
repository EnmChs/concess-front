import DS from 'ember-data';

export default DS.Model.extend({
  model: DS.attr('string'),
  brand: DS.attr('string'),
  year: DS.attr('string'),
  color: DS.attr('string'),
  transmission: DS.attr('string'),
  doorsNum: DS.attr('number'),
  fuel: DS.attr('string'),
  comments: DS.hasMany('comment'),
  concess: DS.belongsTo('concess')
});
