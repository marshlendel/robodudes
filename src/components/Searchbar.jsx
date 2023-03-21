import React from "react";

const Searchbar = ({onSearch, value}) => {
  return (
    <div className="pa2">
      <input 
        className="pa3 ba b--green bg-lightest-blue"
        type="search" 
        placeholder="Search a robot"
        onChange={onSearch}
        value={value}
      />
    </div>
  );
};

export default Searchbar;
