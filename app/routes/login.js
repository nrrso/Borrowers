import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    authenticateWithGoogle: function(){
      this.get('session').authenticate('simple-auth-authenticator:torii', 'google-oauth2');
    }
  }
});