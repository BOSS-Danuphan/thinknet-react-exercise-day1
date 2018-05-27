import React, { Component } from 'react';
import DataCard from './DataCard';

const data = {
  image: 'http://www.fmimodel.com/uploads/images/models/37/160920110656_5396384717.jpg',
  name: '林芮熙Ellier',
  email: 'test@example.com'
};

class App extends Component {
  render() {
    return (
      <div style={{maxWidth: 300, textAlign: 'center'}}>
        <DataCard data={data} />
      </div>
    );
  }
}

export default App;
