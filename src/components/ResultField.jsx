var React = require('react');

var ResultField = React.createClass({
  propTypes: {
    resultValue: React.PropTypes.string
  },

  render: function() {
    return(
      <div className="col-sm-9">
        <input className="form-control input-lg" placeholder="Result of calculation here..." value={this.props.resultValue ? this.props.resultValue : ""} readOnly />
      </div>
    );
  }
});

module.exports = ResultField;
