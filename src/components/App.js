import React, { Component } from 'react';
import '../style/App.css';

import GridControl from './GridControl';
import Grid from './Grid';

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h3>Game of Life</h3>
            <Grid />
            <GridControl />
          </div>
        </div>
      </div>
    )
  }
}

export default App;
