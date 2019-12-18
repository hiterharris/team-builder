import React, {useState} from 'react';
import TeamMembers from './data/TeamMembers';
import List from './components/List';
import Form from './components/Form';
import './App.css';

function App() {
  const [members, setMembers] = useState(TeamMembers);
  console.log(List);

  return (
    <div className="App">
      <h1>Team Members</h1>
      <List members={members} />
      <Form />
    </div>
  );
}

export default App;
