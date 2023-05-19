import React from 'react'

const SearchBar = (props) => {
    return (
        <span className='search'>
            <input type="text" placeholder={props.placeholder}/> 
            <button>{props.btnTxt}</button>
        </span>
    )
}

export default SearchBar