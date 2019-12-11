import React from 'react';
import './App.css';


function App() {
  const [members, setMembers] = useState([
    {
      id:1,
      name:'',
      email:''

    }

  ]);

  return (
    <div className="App">
     <h1>Team Members</h1>
      
    </div>
  );
}

export default App;
