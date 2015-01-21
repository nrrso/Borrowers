import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    authenticate: function(){
      this.get('session').authenticate('simple-auth-authenticator:token');
    }
  }
});