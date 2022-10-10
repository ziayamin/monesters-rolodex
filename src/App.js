
import { Component } from 'react';
import './App.css';

class  App extends Component {

constructor(){
  super();
  this.state={
    monsters:[
      {
        name:'Linda'
      },
      {
        name:'Frank'
      },
      {
        name:'Jack'
      },
      {
        name:'Ali'
      }
    ]
  }

}
  render (){
    return (
      <div className="App">
       {this.state.monsters.map((monster,i)=>{
        return <h1 key={i}>{monster.name}</h1>
       })}
      </div>
    );
  }
}

export default App;
