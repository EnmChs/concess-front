import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('comments');
  this.route('vehicles');


  //CONCESSES
  this.route('concesses', function(){});
  this.route('concesses.new', { path: '/concesses/new' })
  
  this.route('concesses.show', { path: '/concesses/:concess_id' });
  
  //END - CONCESSES
});

export default Router;
