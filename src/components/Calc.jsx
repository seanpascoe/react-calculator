var React = require('react');

var NumberField = require('./NumberField.jsx');
var ResultField = require('./ResultField.jsx');

var Calc = React.createClass({
  getInitialState: function() {
    return {resultValue: ""}
  },

  onCalc: function(operator) {
    let firstNumber = parseFloat(this.refs.firstNumberField.state.valueOfInput);
    let secondNumber = parseFloat(this.refs.secondNumberField.state.valueOfInput);
    var result;

    switch (operator) {
      case "add":
        result = firstNumber + secondNumber;
        break;
      case "sub":
        result = firstNumber - secondNumber;
        break;
      case "div":
        if (secondNumber != 0) {
          result = firstNumber / secondNumber;
          break;
        } else {
          result = "Can't divide by 0";
          break;
        }
      case "mult":
        result = firstNumber * secondNumber;
        break;
      default:
        break;
    }
    this.setState({resultCalc: result.toString()});
  },

  onClear: function() {
    this.refs.firstNumberField.clear();
    this.refs.secondNumberField.clear();
    this.setState({resultCalc: ""});
  },
  render: function() {
    return(
      <div className="container">
        <div className="panel panel-default">
          <div style={{background: "#F2F2F8"}} className="panel-body">
            <h1 className="text-center">Simple Calculator</h1>

              <div className="row form-group number-field">
                <NumberField ref="firstNumberField" placeholder="NUMBER e.g. 2643" />
                <NumberField ref="secondNumberField" placeholder="NUMBER e.g. 6306" />
              </div>

              <div className="row">
                <div className="col-sm-3">
                  <button type="button" className="btn btn-primary" style={{width: "100%"}} onClick={() => this.onCalc("add")}>+ Add</button>
                </div>
                <div className="col-sm-3">
                  <button type="button" className="btn btn-primary" style={{width: "100%"}} onClick={() => this.onCalc("sub")}>- Subtract</button>
                </div>
                <div className="col-sm-3">
                  <button type="button" className="btn btn-primary" style={{width: "100%"}} onClick={() => this.onCalc("div")}>/ Divide</button>
                </div>
                <div className="col-sm-3">
                  <button type="button" className="btn btn-primary" style={{width: "100%"}} onClick={() => this.onCalc("mult")}>* Multiply</button>
                </div>
              </div>

              <div style={{marginTop: 20}} className="row form-group">
                <ResultField resultValue={this.state.resultCalc} />
                <div className="col-sm-3">
                  <button type="button" className="btn btn-danger btn-lg" style={{width: "100%"}} onClick={this.onClear}>Clear</button>
                </div>
              </div>


          </div>
        </div>
      </div>
    );
  }
});

module.exports = Calc;
