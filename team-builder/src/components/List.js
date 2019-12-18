import React from 'react';
import '../App.css';

function List(props) {
  return (
    <div className="List">
        {props.members.map( (member, i) => {
            return (
                <div key={i} className='list-item'>
                    <p >{member.name}</p>
                    <p>{member.email}</p>
                    <p>{member.role}</p>
                </div>
            );
        })}
    </div>
  );
}

export default List;
