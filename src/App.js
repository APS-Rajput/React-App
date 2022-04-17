import Users_card from "./Components/users";
import './App.css';

import React, { Component } from 'react'
	
class App extends Component {
  constructor(props){
	super(props)
		
	// Set initial state
	this.state = {users_data :[]
  }  

	this.updateState = this.updateState.bind(this)
  }
    
  updateState(){
      const link="https://reqres.in/api/users?page=1";
      fetch(link)
      .then(response => response.json())
      .then((users) => {
        
        this.setState({users_data :users.data
        })
        console.log(users.data);
      })
      .catch((error) => {
        console.error(error)
      })
  }
    
  render(){
    return (<>
      <nav>
          <label className="logo">Coding Cavalry</label>
            <ul>
              <li><button onClick={this.updateState} className="button-56">Get Users</button> 
            </li>
            </ul>
            
        </nav>
        <div className="box">
         <Users_card users={this.state.users_data}/>
         </div>
    </>
    )
  }
}
	
export default App;