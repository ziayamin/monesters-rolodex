import { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField:'',
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

  onSearchChange =(e)=>{
    const searchField = e.target.value.toLocaleLowerCase();
    this.setState(()=>{
      return {searchField}
    })
  }
  
  

  render() {
    const {monsters,searchField}= this.state;
    const {onSearchChange} = this;
    const filteredMonsters = monsters.filter((monster)=>{
      return monster.name.toLocaleLowerCase().includes(searchField)
    });
   
    return (
      <div className="App">
        <div className="my-10">
          <input
            type="text"
            name="name"
            id="name"
            className="block px-4 py-2 mx-auto border-gray-700 rounded-full shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            placeholder="Search monsters"
            onChange={onSearchChange}
          />
        </div>
        {filteredMonsters.map((monster) => {
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
