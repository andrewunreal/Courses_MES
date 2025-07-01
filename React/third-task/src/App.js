import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShown: false,
    };
  }

  toggleText = () => {
    this.setState((prevState) => ({
      isShown: !prevState.isShown,
    }));
  };

  render() {
    return (
      <div style={{ textAlign: 'center', marginTop: '40px' }}>
        <button onClick={this.toggleText}>
          {this.state.isShown ? 'Hide' : 'Show'}
        </button>
      </div>
    );
  }
}

export default App;
