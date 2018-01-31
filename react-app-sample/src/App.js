import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {id: '', password: '', result: ''};

    this.handleIDChange = this.handleIDChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleIDChange(event) {
    this.setState({id: event.target.value});
  }
  handlePasswordChange(event) {
    this.setState({password: event.target.value});
  }
  handleSubmit(event) {
    event.preventDefault();
    
    if (this.state.id == 'hello' && this.state.password == 'world') {
      this.setState({result: 'success'});
    } else {
      this.setState({result: 'failure'});
    }

    // this.login();
  }
  login() {
    const { id, password } = this.state;
    const endpoint = 'http://localhost:5000/login';
    const opts = { id, password };
    fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(opts)
    }).then(res => this.setState({ result: res.status == '200' ? 'success' : 'failure' }));
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="App-intro">
          <form onSubmit={this.handleSubmit}>
            <div>
              <div>ID</div>
              <input id="loginId" type="text" value={this.state.id} onChange={this.handleIDChange} />
            </div>
            <div>
              <div>PASSWORD</div>
              <input id="loginPassword" type="password" value={this.state.password} onChange={this.handlePasswordChange} />
            </div>
            <div>
              <input id="loginSubmit" type="submit" value="Login" />
            </div>
          </form>
        </div>
        <p id="loginResult">{this.state.result}</p>
      </div>
    );
  }
}

export default App;
