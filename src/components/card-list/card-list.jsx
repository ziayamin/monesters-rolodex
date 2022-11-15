import React, { Component } from "react";

class CardList extends Component {
  render() {
    const { monster } = this.props;
    return (
      <div>
        {monster.map((monster) => {
          return (
            <h1 className="text-xl font-semibold" key={monster.id}>
              {monster.name}{" "}
            </h1>
          );
        })}
      </div>
    );
  }
}

export default CardList;
