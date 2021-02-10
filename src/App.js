import React, {Component} from 'react';
import {CardList} from './components/card-list/card-list.component';
import { SearchBox } from "./components/search-box/search-box.component";
//import logo from './logo.svg';
import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

class App extends Component{
  constructor(){
    super();
    
    this.state={
      monsters:[],
      searchField:'',
      title:'Monster Rolodex'
    }

    //this.handleChange = this.handleChange.bind(this);

  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users=>this.setState({monsters:users}))
  }

  onSearchChange=(e)=>{
    this.setState({
      searchField:e.target.value
    });
  }
  // handleChange(e){
  //   this.setState({searchField:e.target.value});
  // }

  render(){
    const {monsters, searchField,title} = this.state;
    const fileteredMonsters = monsters.filter(
      monster => monster.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className="App">
        <h1>{title}</h1>
        <SearchBox placeholder='Search Monsters' onSearchChange={this.onSearchChange}></SearchBox>
        
        <CardList monsters={fileteredMonsters}/>
      </div>
    );
  }
}

export default App;
