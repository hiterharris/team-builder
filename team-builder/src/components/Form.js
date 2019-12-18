import React, {useState} from 'react';
import '../App.css';

function Form(props) {
  const [member, setMember] = useState(
      {
          name: '',
          email: '',
          role: '',
      }
  );

  const handleChanges = e => {
      setMember({
          ...member,
          [e.target.name] : e.target.value,
      })
      console.log(e.target.value);
  }

  const submitForm = e => {
      e.preventDefault();
      props.addNewMember(member);
      setMember({
          name: '',
          email: '',
          role: '',
      })
  }

  return (
    <div className="Form" onSubmit={submitForm}>
        <h3>Add Member</h3>
        <form className='form'>
            <input
                id='name'
                name='name'
                type='text'
                placeholder='Name'
                onChange={handleChanges}
            />
            <input
                id='email'
                name='email'
                type='text'
                placeholder='Email'
                onChange={handleChanges}
            />
            <input
                id='role'
                name='role'
                type='text'
                placeholder='Role'
                onChange={handleChanges}
            />
            <button type="submit">Add</button>
        </form>
    </div>
  );
}

export default Form;
