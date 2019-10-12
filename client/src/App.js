import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import PlayerCard from "./Components/PlayerCard";
import Navbar from "./Components/Nav";
import './sass.scss'

class App extends Component {

  constructor(){
    super();
    this.state = {
      players: []
    }
  }

  componentDidMount(){
    this.fetchPlayerData();
  }



  fetchPlayerData = () => {
    axios.get('http://localhost:5000/api/players')
        .then(res => {
          this.setState({
              players: res.data
          });
        })
        .catch(error => {
          console.log(error)
        })
  };




  render() {
    return (
        <div className="container">
         <Navbar />
            {this.state.players.map((item, index) => {
                return <PlayerCard  key={index} player={item} />
            })}
        </div>
    )
  }
}

export default App;