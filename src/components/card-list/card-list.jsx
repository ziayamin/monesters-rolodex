import React, { Component } from "react";
import Card from "../card/card";

class CardList extends Component {
  render() {
    const { monster } = this.props;
    return (
      <div className="grid grid-cols-1 gap-6 px-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {monster.map((monster) => {
          return (
            <div className="text-xl font-semibold " key={monster.id}>
             <Card monster={monster}/>
            </div>
          );
        })}
      </div>
    );
  }
}

export default CardList;
