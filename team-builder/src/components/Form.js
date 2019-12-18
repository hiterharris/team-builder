import React from 'react';
import '../App.css';

function Form(props) {
  return (
    <div className="Form">
        <h3>Add Member</h3>
        <form className='form'>
            <input
                id='name'
                name='name'
                type='text'
                placeholder='Name'
            />
            <input
                id='email'
                name='email'
                type='text'
                placeholder='Email'
            />
            <input
                id='role'
                name='role'
                type='text'
                placeholder='Role'
            />
            <button type="submit">Add</button>
        </form>
    </div>
  );
}

export default Form;
