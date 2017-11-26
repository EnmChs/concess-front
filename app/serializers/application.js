import Ember from 'ember';
import DS from 'ember-data';
// import JSONAPIAdapter from 'ember-data/adapters/json-api';
// var underscore = Ember.String.underscore;

export default DS.JSONAPISerializer.extend({
  // keyForAttribute: function(attr) {
  //   return underscore(attr);
  // },
  keyForAttribute(attr) {
    return Ember.String.underscore(attr);
  },
  keyForRelationship(rawKey) {
    return Ember.String.underscore(rawKey);
  }
  
});