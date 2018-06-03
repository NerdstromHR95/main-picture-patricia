import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      products: 'https://ibb.co/bsAWsd',
    };
  }

  render() {
    return (
      <div id="app">
        {this.state.products}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));

module.exports = App;
