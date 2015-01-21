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

        this.resource('products');
    });


    /* Routes (model logic) */

    App.ProductsRoute = Ember.Route.extend({
        model: function() {
            return App.PRODUCTS;
        }
    });



    /* Controllers */

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


    // Temp hardcoded data
    App.PRODUCTS = {
        'products':
        [
            {
                'id': 1,
                'title': 'Flint',
                'price': 99,
                'description': 'Flint is a hard, sedimentary cryptocrystalline form of the mineral quartz, categorized as a variety of chert.',
                'isOnSale': true,
                'image': './images/products/flint.png',
                'reviews': [100,101]
            },
            {
                'id': 2,
                'title': 'Kindling',
                'price': 249,
                'description': 'Easily combustible small sticks or twigs used for starting a fire.',
                'isOnSale': false,
                'image': './images/products/kindling.png',
                'reviews': []
            }
        ],
        'reviews': [
            { 'id': 100, 'product': 1, 'text': 'Started a fire in no time!', 'reviewedAt': '2013-12-10 08:00:00' },
            { 'id': 101, 'product': 1, 'text': 'Not the brightest flame, but warm!', 'reviewedAt': '2013-12-12 08:00:00' }
        ]
    };


}(window.Ember));