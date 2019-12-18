import React, {useState} from 'react';
import membersList from './data/membersList';
import List from './components/List';
import Form from './components/Form';
import lambda from './images/lambda.png';
import './App.css';

function App() {
  const [members, setMembers] = useState(membersList);
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
      <header>
        <img src={lambda} />
        <h1>Team Aaron/Brandon</h1>
      </header>
      <section className='content'>
        <List members={members} />
        <Form addNewMember={addNewMember} />
      </section>
    </div>
  );
}

export default App;
