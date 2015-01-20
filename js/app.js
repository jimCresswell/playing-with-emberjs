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
        productsCount: 6,
        logo: './images/logo.png',
        time: function() {
            return (new Date()).toDateString();
        }.property()
    });

    App.AboutController = Ember.Controller.extend({
      contactName: 'Jim',
      avatar: './images/contacts/patty.png',
      open: function () {
        var day = (new Date()).getDay();
        if (day === 0) {
            return 'Sorry, we are closed on Sundays';
        }
        return 'We are open!';
      }.property()
    });

}(window.Ember));