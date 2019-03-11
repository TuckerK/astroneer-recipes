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
    return <div className="resourceCard">
      <h1 className="name">{this.props.name}</h1>
      <h2 className="platform">Planets Found On</h2>
      <ul>{this.props.found}</ul>
      <h2 className="platform">Backpack Printer</h2>
      <ul>{this.props.builds[0].backpack}</ul>
      <h2 className="platform">Small Printer</h2>
      <ul>{this.props.builds[0].small}</ul>
      <h2 className="platform">Medium Printer</h2>
      <ul>{this.props.builds[0].medium}</ul>
      <h2 className="platform">Large Printer</h2>
      <ul>{this.props.builds[0].large}</ul>
      <h2 className="platform">Smelting Furnace</h2>
      <ul>{this.props.builds[0].furnace}</ul>
      <h2 className="platform">Chemistry Lab</h2>
      <ul>{this.props.builds[0].chemistry}</ul>
    </div>
  }

  // const builds = props.builds;
  // const build = builds.map((b, index) => {
  //   return <li key={index}>{b}</li>;
  // });

  // console.log(build[0].props.children.backpack);
  render(){
    return (
      <div className="name" onClick={this.handleClick}>
        {this.state.isToggleOn ? this.renderName() : this.renderData()}
      </div>
    );
  }
  
}

export default ResourceCard;


{/* <div className="resourceCard"> 
<h1 className="name">{props.name}</h1>
<h2 className="platform">Planets Found On</h2>
<ul>{props.found}</ul>
<h2 className="platform">Backpack Printer</h2>
<ul>{build[0].props.children.backpack}</ul>
<h2 className="platform">Small Printer</h2>
<ul>{build[0].props.children.small}</ul>
<h2 className="platform">Medium Printer</h2>
<ul>{build[0].props.children.medium}</ul>
<h2 className="platform">Large Printer</h2>
<ul>{build[0].props.children.large}</ul>
<h2 className="platform">Smelting Furnace</h2>
<ul>{build[0].props.children.furnace}</ul>
<h2 className="platform">Chemistry Lab</h2>
<ul>{build[0].props.children.chemistry}</ul>
</div> */}


