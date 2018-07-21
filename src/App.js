import './App.css';
import React, { Component } from 'react';;


const list = [{
  title: 'React',
  url: 'https://facebook.github.io/react/',
  author: 'Jordan Walke',
  nums_comments: 3,
  points: 4,
  objectID: 0,

},
{
  title: 'Redux',
  url: 'https://github.com/reactjs/redux',
  author: 'Dan Abramov, Andrew Clark',
  nums_comments: 2,
  points: 5,
  objectID: 1, 

},
];

class App extends Component {
  render() {   
    return(
      <div className="App">
        {list.map(item => 
          <div key={item.objectID}>
            <span>
            <a href={item.url}>{item.title}</a>
          </span>
          <span> {item.author}</span> 
          <span> {item.nums_comments} </span>
          <span> {item.points}</span>
          </div>
        
        )}  
      </div>
        
      
      )
    
  }
}
  class Developer {
    constructor(firstname, lastname) {
      this.firstname = firstname;
      this.lastname = lastname;

    }
    getName(){
      return this.firstname + '' + this.lastname;
    }
  }

  const adrian = new Developer('Adrian', 'Guzman');
  console.log(adrian.getName());
  


export default App;
