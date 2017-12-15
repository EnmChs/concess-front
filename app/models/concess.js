import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  description: DS.attr('string'),
  warranty: DS.attr('boolean'),
  openTime: DS.attr('string'),
  createdAt: DS.attr('date'),
  comments: DS.hasMany('comment'),
  vehicles: DS.hasMany('vehicle')
});
