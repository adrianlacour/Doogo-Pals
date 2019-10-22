import React, {Component} from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox.js';
import './App.css';
import {doggos} from './doggos';


class App extends Component {
  constructor() {
    super()
    this.state = {
      doggos: doggos,
      searchField: ''
    }
  }

  onSearchChange = (event) => {
    this.setState({ searchField: event.target.value })
  }
  render() {
    const filteredDoggos = this.state.doggos.filter(doggo =>
    {
      return doggo.name.toLowerCase().startsWith(this.state.searchField.toLowerCase());
    })
    console.log(this.state.searchField.toLowerCase())
    console.log()

    return (
      <div className='tc'>
        <h1 className = 'f1'>Doggo Pals</h1>
        <SearchBox searchChange={this.onSearchChange}/>
        <CardList doggos={filteredDoggos}/>
      </div>
    );
  }
}

export default App;
