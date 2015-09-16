import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.filter('customer', {}, function(customer) {
      return !customer.get('isSubscribed');
    });
  }
});
