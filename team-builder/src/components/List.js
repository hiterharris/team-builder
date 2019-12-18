import React from 'react';
import '../App.css';

function List(props) {
  return (
    <div className="List">
        {props.members.map( (member, i) => {
            {/* Conditionally render editView or default view base on changeEditMode */}
            return props.editMode ?
                <div  className='list-item'>
                    <form>
                        <input key={i}  type='text' defaultValue={member.name} />
                        <input type='text' defaultValue={member.email} />
                        <input type='text' defaultValue={member.role} />
                    </form>
                    <button onClick={props.changeEditMode}>Save</button>
                </div>
                :
                <div key={i} className='list-item' onClick={props.changeEditMode}>
                    <h2 key={i} >{member.name}</h2>
                    <p>{member.email}</p>
                    <p>{member.role}</p>
                </div>
        })}
    </div>
  );
}

export default List;
