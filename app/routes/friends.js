import Ember from 'ember';
import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  actions: {
    save: function(){
      console.log('+--- save action in friends route');

      return false;
    },
    cancel: function(){
      console.log('+--- cancel action in friends route');

      return false;
    },
    delete: function(friend) {
      friend.destroyRecord();
      this.transitionTo('friends.index');
    }
  }
});
