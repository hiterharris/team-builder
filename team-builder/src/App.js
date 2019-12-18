import React, {useState} from 'react';
import TeamMembers from './data/TeamMembers';
import List from './components/List';
import Form from './components/Form';
import './App.css';

function App() {
  const [members, setMembers] = useState(TeamMembers);
  console.log(members);

  const addNewMember = member => {
    const newMember = {
      id: Date.now(),
      name: member.name,
      email: member.email,
      role: member.role,
    };
    setMembers([...members, newMember]);  
  }

  return (
    <div className="App">
      <h1>Team Members</h1>
      <List members={members} />
      <Form addNewMember={addNewMember} />
    </div>
  );
}

export default App;
