var React = require('react'),
    App = require('../src/components/Application'),
    products = require('./data');

var AppComponent = React.createFactory(App);

React.render(
    AppComponent({products: products}),
    document.getElementById('app')
);
