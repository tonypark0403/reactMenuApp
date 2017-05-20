// alert ('welcome to react');
var React = require('react');
var ReactDOM = require('react-dom');

/*
    App
*/

var App = React.createClass({
    render : function() {
        return (
            <div className="catch-of-the-day">
                <div className="menu">
                    <Header />
                </div>
                <Order />
                <Inventory />
            </div>
        )
    }
});

/*
    Header
*/
var Header = React.createClass({
    render : function() {
        return (
            <p>Header</p>
        )
    }
});

/*
    Order
*/
var Order = React.createClass({
    render : function() {
        return (
            <p>Order</p>
        )
    }
});

/*
    Inventory
*/
var Inventory = React.createClass({
    render : function() {
        return (
            <p>Inventory</p>
        )
    }
});

/*
    StorePicker
    This will let us make <StorePicker/>
*/

var StorePicker = React.createClass({
    render : function() {
        var name = "Tony";
        // normal comments
        return (
            <form className="store-selector">
                {/* Comment goes in here! */}
                <h2>Please Enter A Store {name}</h2>
                <input type="text" ref="storeId" />
                <input type="submit" />
            </form>
        )
    }
});

// ReactDOM.render(<StorePicker/>, document.querySelector('#main'));
React.render(<App/>, document.querySelector('#main'));