import { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) =>
        this.setState(
          () => {
            return { monsters: users };
          },
          () => {
            console.log(this.state);
          }
        )
      );
  }
  render() {
    return (
      <div className="App">
        <div class="my-10">
          <input
            type="text"
            name="name"
            id="name"
            className="block mx-auto py-2 rounded-full border-gray-700 px-4 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            placeholder="Search monsters"
          />
        </div>
        {this.state.monsters.map((monster) => {
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

export default App;
