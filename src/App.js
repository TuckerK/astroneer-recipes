import React, { Component } from 'react';
import MaterialCard from "./components/MaterialCard";
import materialInfo from "./materialInfo.json";
import './App.css';

class App extends Component {

  state = {
    materialInfo
  };

  render() {
    // console.log(this.state.materialInfo);
    return (
      <div className="App">
      {this.state.materialInfo.map(card => (
        <MaterialCard
            id={card.id}
            key={card.id}
            name={card.name}
            builds={card.builds}
          />
      ))}  
      </div>
    );
  }
}

export default App;
