import React from "react";
import Card from "./Card";

export default function CardList(props) {
    const robotCards = props.robots.map(({ id, name, email }) => {
      return <Card 
        id={id} 
        name={name} 
        email={email} 
        key={id} 
      />;
    });

    return <div>{robotCards}</div>;
  }

