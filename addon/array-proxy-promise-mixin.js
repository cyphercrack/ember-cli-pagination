// Generated by CoffeeScript 1.7.1
import Ember from 'ember';
var ArrayProxyPromiseMixin;

ArrayProxyPromiseMixin = Ember.Mixin.create(Ember.PromiseProxyMixin, {
  then: function(f) {
    var promise;
    promise = this.get('promise');
    return promise.then((function(_this) {
      return function() {
        return f(_this);
      };
    })(this));
  }
});

export default ArrayProxyPromiseMixin;
