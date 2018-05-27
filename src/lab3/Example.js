import React from 'react';

export default class Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: 1
    };
    console.log('constructure');
  }
  static getDerivedStateFromProps(nextProps, prevState) {
    console.log('getDerivedStateFromProps');
    return prevState;
  }
  componentWillMount() {
    console.log('componentWillMount');
  }
  componentDidMount() {
    console.log('componentDidMount');
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate');
    return true;
  }
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('getSnapshotBeforeUpdate');
    return prevState;
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('componentDidUpdate');
  }
  componentWillUnmount() {
    console.log('componentWillUnmount');
  }
  componentDidCatch(error, info) {
    console.log('componentDidCatch');
  }
  onChangeText = (e) => this.setState({data: e.target.value});
  render() {
    console.log('render');
    return (
      <div>
        <input onChange={this.onChangeText} value={this.state.data} />
        <p>Data = {this.state.data}</p>
      </div>
    );
  }
};