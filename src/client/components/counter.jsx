/** @jsx React.DOM */
'use strict';
var React = require('react');
var request = require('superagent');

var get = function (url, cb) {
  request.get(url)
  .set('Content-Type', 'application/json')
  .end(cb);
}

module.exports = React.createClass({
  getInitialState: function () {
    return { count : this.props.initialCount || 0 };
  },
  componentWillMount: function () {
    get('/value', function (res) {
      this.setState({count: res.body.count});
    }.bind(this));
  },
  onClickInc: function (event) {
    get('/inc', function (res) {
      this.setState({count: res.body.count});
    }.bind(this));
  },
  onClickDec: function (event) {
    get('/dec', function (res) {
      this.setState({count: res.body.count});
    }.bind(this));
  },
  render: function () {
    return (
      <div className={this.props.className}>
        <h3>Counter</h3>
        <div class="counter">Count&nbsp;
          <a href="#" onClick={this.onClickInc}>(Click to increment)</a>&nbsp;
          <a href="#" onClick={this.onClickDec}>(Click to decrement)</a>&nbsp;
          <span>{this.state.count}</span>
        </div>
      </div>
    );
  }
});

