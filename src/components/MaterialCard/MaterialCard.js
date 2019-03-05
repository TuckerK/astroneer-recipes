import React from "react";
import "./MaterialCard.css";

function MaterialCard(props) {
  const builds = props.builds;
  const build = builds.map((b, index) => {
    return <li key={index}>{b}</li>;
  });
  // console.log(build[0].props.children.backpack);
  return (
    <div className="materialCard">
      <h1 className="name">{props.name}</h1>
      <h2 className="platform">Backpack Printer</h2>
      <ul>{build[0].props.children.backpack}</ul>
      <h2 className="platform">Small Printer</h2>
      <ul>{build[0].props.children.small}</ul>
      <h2 className="platform">Medium Printer</h2>
      <ul>{build[0].props.children.medium}</ul>
      <h2 className="platform">Large Printer</h2>
      <ul>{build[0].props.children.large}</ul>
      <h2 className="platform">Chemistry Lab</h2>
      <ul>{build[0].props.children.chemistry}</ul>
    </div>
  );
}

export default MaterialCard;
