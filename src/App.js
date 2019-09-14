import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';



class App extends Component {
  state = {
    name : ''
  }

  handleChange = (e) => {
    this.setState({
      name: e.target.value
    })
  }

  render() {
    return (
      <div className="App">
        Form Part 1
        <form>
          <input type='text' onChange={this.handleChange}/>
        </form>
        <p>{this.state.name}</p>
      </div>
    )
  }
}
export default App;
