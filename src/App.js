import React, { Component } from 'react';
import ResourceCard from "./components/ResourceCard";
import resourceInfo from "./resourceInfo.json";
import './App.css';

class App extends Component {

  state = {
    resourceInfo
  };

  render() {
    // console.log(this.state.materialInfo);
    return (
      <div className="App">
      {this.state.resourceInfo.map(card => (
        <ResourceCard
            id={card.id}
            key={card.id}
            name={card.name}
            builds={card.builds}
            found={card.found}
          />
      ))}
      </div>
    );
  }
}

export default App;
