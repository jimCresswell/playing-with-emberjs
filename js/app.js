/**
 * Following an Ember.js tutorial.
 */


(function(Ember) {
    'use strict';

    var App = Ember.Application.create({
        LOG_TRANSITIONS: true,
    });

    App.Router.map(function() {
        this.route('about', {path: '/aboutus'});
    });

}(window.Ember));