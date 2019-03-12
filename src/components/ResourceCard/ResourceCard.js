import React, { Component } from "react";
import "./ResourceCard.css";

class ResourceCard extends Component {

  constructor(props){
    super(props);
    this.state = {isToggleOn: true};

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }

  renderName(){
    return <h1 className="name">{this.props.name}</h1>
  }

  renderData(){

    const data = this.props.builds[0];

      return <div className="resourceCard grid-item">
      <h1 className="name">{this.props.name}</h1>
      <h3 className="platform">Planets Found On</h3>
      <ul>{this.props.found}</ul>
      <h3 className="platform">Backpack Printer</h3>
      <ul>{data.backpack}</ul>
      <h3 className="platform">Small Printer</h3>
      <ul>{data.small}</ul>
      <h3 className="platform">Medium Printer</h3>
      <ul>{data.medium}</ul>
      <h3 className="platform">Large Printer</h3>
      <ul>{data.large}</ul>
      <h3 className="platform">Smelting Furnace</h3>
      <ul>{data.furnace}</ul>
      <h3 className="platform">Chemistry Lab</h3>
      <ul>{data.chemistry}</ul>
    </div>
    }
  

  render(){
    return (
      <div className="card grid-container" onClick={this.handleClick}>
        {this.state.isToggleOn ? this.renderName() : this.renderData()}
      </div>
    );
  }
  
}

export default ResourceCard;


