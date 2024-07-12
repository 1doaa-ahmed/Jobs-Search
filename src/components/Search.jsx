import React from 'react'
import '../styles/Search.css'

function Search({children , icon , placeholder , value ,onChange}) {
  return (
    <div className="SearchBar">
        <img src={icon} alt="bag" className='SearchBarIcon'/>
        <input
          type="text"
          name=""
          id=""
          className="SearchBarInput"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
        {children}
      </div>
  )
}

export default Search