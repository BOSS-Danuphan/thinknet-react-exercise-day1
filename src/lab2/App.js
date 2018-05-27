import React, { Component } from 'react';

class App extends Component {
  state = {
    text: '',
    members: [
      {id: 1, name: 'Cherprang'},
      {id: 2, name: 'Can'},
      {id: 3, name: 'Jennis'},
      {id: 4, name: 'Keaw'},
      {id: 5, name: 'Maysa'},
      {id: 6, name: 'Mind'},
      {id: 7, name: 'Mobile'},
      {id: 8, name: 'Music'}
    ]
  };

  onChangeText = (e) => {
    this.setState({text: e.target.value});
  };

  renderItems = (items) => items.map(item => <li key={item.id}>{item.name}</li>);
  isMatchItem = (item) => item.name.toLocaleLowerCase().match(this.state.text.toLocaleLowerCase());
  findItemsMatched = (items) => items.filter;

  render() {
    return (
      <div>
        <input onChange={this.onChangeText} value={this.state.text} />
        <ul>
          {
            this.state.text === '' ?
            this.renderItems(this.state.members)
            : this.renderItems(this.state.members.filter(this.isMatchItem))
          }
        </ul>
      </div>
    );
  }
}

export default App;
