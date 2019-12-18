import React, {useState} from 'react';
import '../App.css';

function List(props) {
  return (
    <div className="List">
        {props.members.map( (member, i) => {
            return (
                <div className='list-item'>
                    <p key={i}>{member.name}</p>
                    <p key={i}>{member.email}</p>
                    <p key={i}>{member.role}</p>
                </div>
            );
        })}
    </div>
  );
}

export default List;
