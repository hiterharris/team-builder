import React, {useState, useEffect} from 'react';
import membersList from './data/membersList';
import List from './components/List';
import Form from './components/Form';
import Search from './components/Search';
import lambda from './images/lambda.png';
import './App.css';

function App() {

  // Add new member to members
  const [members, setMembers] = useState(membersList);
  const addNewMember = member => {
    const newMember = {
      id: Date.now(),
      name: member.name,
      email: member.email,
      role: member.role,
    };
    setMembers([...members, newMember]);  
  }

  // Set search to value of search input 
  // MUST BIND TO SEARCH COMPONENT
  const [search, setSearch] = useState('');
  const updateSearch = (e) => {
     setSearch(e.target.value);
  }

  // Filter members that match search
  let filterMembers = members.filter( (member) => {
    return member.name.toLowerCase().indexOf(search.toLowerCase()) !== -1;
  })

  // Conditionally render members or filterMembers
  const renderList = () => {
    if(search.length > 0) {
      return <List members={filterMembers} />
    } else {
      return <List members={members} changeEditMode={changeEditMode} editMode={editMode}/>
    }
  }

    // Toggle edit mode
    const [editMode, setEditMode] = useState(false);
    const changeEditMode = () => {
      setEditMode(!editMode);
    }

  return (
    <div className="App">
      <header>
        <img src={lambda} />
        <h1>Team Aaron/Brandon</h1>
      </header>
      <section className='content'>
        <Search search={search} updateSearch={updateSearch.bind(this)} />
        {renderList()}
        <Form addNewMember={addNewMember} />
      </section>
    </div>
  );
}

export default App;
