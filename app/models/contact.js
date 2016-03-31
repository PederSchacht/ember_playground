import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
  email: DS.attr('string'),
  message: DS.attr('string'),

  messageCleaned: '',
  emailValid: Ember.computed.match('email', /^.+@.+\..+$/),
  messageObserver: Ember.observer('message', function() {
    this.set('messageCleaned',this.get('message').trim());
  }),
  messageValid: Ember.computed.gte('messageCleaned.length',5),
  isValid: Ember.computed.and('emailValid','messageValid'),
  isDisabled: Ember.computed.not('isValid')
});
