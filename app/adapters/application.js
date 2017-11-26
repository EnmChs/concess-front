import DS from 'ember-data';
// import JSONAPIAdapter from 'ember-data/adapters/json-api';

// const { String: { pluralize, underscore } } = Ember;
export default DS.JSONAPIAdapter.extend({
  
  namespace: 'api/v1',
  // pathForType(type) {
  //   return pluralize(underscore(type));
  // },
  // pathForType: function(type) {
  //   var underscored = Ember.String.underscore(type);
  //   return Ember.String.pluralize(underscored);
  // },
  // pathForType: function(modelName) {
  //   return Ember.String.pluralize(Ember.String.dasherize(modelName));
  // },
});
// import ActiveModelAdapter from 'active-model-adapter';
// var underscore = Ember.String.underscore;
// export default ActiveModelAdapter.extend({
//   namespace: 'api/v1',
//   pathForType: function(type) {
//     var underscored = Ember.String.underscore(type);

//     return Ember.String.pluralize(underscored);
//   }
//   // pathForType(type) {
//   //   return pluralize(underscore(type));
//   // }
//   // keyNaming: "camelized",
//   // keyForAttribute: function(attr) {
//   //   return Ember.String.underscore(attr);
//   // },
// });