import React from 'react';
import '../App.css';

function Search(props) {
  return (
    <div className="Search">
        <input placeholder='Search' value={props.search} onChange={props.updateSearch}/>
    </div>
  );
}

export default Search;
