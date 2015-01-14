import Ember from 'ember';

export default Ember.Controller.extend({
  queryParams: ['sortBy'],
  sortBy: 'firstName',
  sortProperties: function(){
    return [this.get('sortBy')];
  }.property('sortBy')
});