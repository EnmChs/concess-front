import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  aproxNum: DS.attr('number'),
  address: DS.attr('string'),
  contactNumber: DS.attr('string'),
  carsType: DS.attr('string'),
  warranty: DS.attr('boolean'),
  openTime: DS.attr('date'),
  closeTime: DS.attr('date'),
  createdAt: DS.attr('date'),
  comments: DS.hasMany('comment'),
  vehicles: DS.hasMany('vehicle')
});
