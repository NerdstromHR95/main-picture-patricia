import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

class App extends React.Component {
  constructor(props) {
    super(props)

      this.state = {
        products: ''
      }
    }

  render() {
   return (
      <div id= "app">
        Rendering React
      </div>
    )
  }
}

ReactDOM.render(< App />, document.getElementById("app"));

module.exports = App;
