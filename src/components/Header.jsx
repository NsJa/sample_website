import React from "react";
import "./header.scss"

const Header = () => {
  return (
    <div className='header'>
      <div className="headerContainer">
        <h1 className="headerTitle">
          Header
        </h1>
        <p className="headerDes">
          Description
        </p>
        <div className="headerSearchBar">
          SearchBar
        </div>
      </div>
    </div>
  )
}

export default Header