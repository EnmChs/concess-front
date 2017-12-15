import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('login');



  this.route('comments');
  this.route('vehicles');


  //CONCESSES
  this.route('concesses', function(){
    this.route('edit', {path: '/edit/:concess_id'});
    this.route('new', { path: '/new' })
    this.route('preview', {path: '/preview/:concess_id'})
  });
  this.route('concesses.show', { path: '/concesses/:concess_id' }, function(){
    this.route('comments.new', { path: '/comments/new' });
  });
  
  //END - CONCESSES
});

export default Router;
