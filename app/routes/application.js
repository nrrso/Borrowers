import Ember from 'ember';
import ApplicationRouteMixin from 'simple-auth/mixins/application-route-mixin';

export default Ember.Route.extend(ApplicationRouteMixin, {
  actions: {
    save: function(){
      console.log('+---- save action in application route');

      return true;
    },
    cancel: function(){
      console.log('+---- cancel action in application route');

      return true;
    }
  }
});