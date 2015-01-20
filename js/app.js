/**
 * Following an Ember.js tutorial.
 */


(function(Ember) {
    'use strict';

    var App = Ember.Application.create({
        LOG_TRANSITIONS: true,
    });

    // 'index' route is implicit.
    App.Router.map(function() {
        this.route('about', {path: '/aboutus'});
        this.route('credits');
    });

    App.IndexController = Ember.Controller.extend({
        productsCount: 6
    });

}(window.Ember));