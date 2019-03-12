import React, { Component } from 'react';
import ResourceCard from "./components/ResourceCard";
import resourceInfo from "./resourceInfo.json";
import './App.css';

class App extends Component {

  state = {
    resourceInfo
  };

  render() {
    return (
      <div className="App grid-container">
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
