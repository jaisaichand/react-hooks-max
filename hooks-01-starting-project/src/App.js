import React from 'react';

import Ingredients from './components/Ingredients/Ingredients';

class App extends React.Component {
  state = { val: true };

  closee = () => {
    this.setState({ val: false })
    console.log('...')
  }
  render() {
    return (<div>{this.state.val == true ? <Ingredients closee={this.closee} /> : null}</div>)
  }
}

export default App;
