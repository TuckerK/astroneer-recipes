import React from "react";
import "./ResourceCard.css";

function ResourceCard(props) {
  const builds = props.builds;
  const build = builds.map((b, index) => {
    return <li key={index}>{b}</li>;
  });
  // console.log(build[0].props.children.backpack);
  return (
    <div className="resourceCard">
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
    </div>
  );
}

export default ResourceCard;
