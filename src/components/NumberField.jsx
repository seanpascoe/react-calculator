var React = require('react');
var validator = require('validator')

var NumberField = React.createClass({
  propTypes: {
    placeholder: React.PropTypes.string
  },

  getInitialState: function() {
    return {valueOfInput:"", valid: true}
  },

  onInput: function(e) {
    let val = e.target.value
    if (validator.isFloat(val) || val == "") {
      this.setState({valueOfInput: val, valid: true})
    } else {
      this.setState({valueOfInput: val, valid: false})
    }
  },

  clear: function() {
    this.setState({valueOfInput: ""});
  },

  render: function() {
    var warning;
    if (!this.state.valid) {
      warning = <div style={{marginTop: 5, marginBottom: 0}} className="alert alert-danger" role="alert"><span className="glyphicon glyphicon-exclamation-sign"></span><strong>Shiza! </strong>That's not a number!</div>;
    }
    return(
      <div className={this.state.valid ? "col-sm-6" : "col-sm-6 has-error"}>
        <input className="form-control input-lg" type="text" placeholder={this.props.placeholder} onChange={this.onInput} value={this.state.valueOfInput}/>
        <div>{warning}</div>
      </div>
    );
  }
});

module.exports = NumberField;
