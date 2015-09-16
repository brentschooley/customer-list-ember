import DS from 'ember-data';
import moment from 'moment';

export default DS.Model.extend({
  name: DS.attr(),
  location: DS.attr(),
  signupDate: DS.attr('date', { defaultValue: new Date()}),
  isSubscribed: DS.attr(),
  subscriptionDate: DS.attr('date', {defaultValue: new Date()}),
  subscriptionDuration: DS.attr('number', {defaultValue: 0}),

  expirationDate: Ember.computed('subscriptionDate', 'subscriptionDuration', function() {
    return moment(this.get('subscriptionDate')).add(this.get('subscriptionDuration'), 'months');
  })
});
