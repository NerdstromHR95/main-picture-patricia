import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      products: 'https://n.nordstrommedia.com/ImageGallery/store/product/Zoom/9/_103331749.jpg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1197',
    };
  }

  render() {
    return (
      <div>
        <img src={this.state.products} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));

module.exports = App;
