import DS from 'ember-data';

export default DS.RESTAdapter.extend({
  host: 'http://localhost:1338',
  coalesceFindRequests: true
});
