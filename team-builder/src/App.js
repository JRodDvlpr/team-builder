import React, {useState} from 'react';
import './App.css';
import FormList from './components/FormList';

function App() {
  const [members, setMembers] = useState([
    {
      id:1,
      name:'Tom Dom',
      email:'TomDom@gmail.com',
      role:'Engineer'

    }

  ]);



  return (
    <div className="App">
     <h1>Team Members</h1>
     
    </div>
  );
}

export default App;
