import React from 'react'

const SearchBar = (props) => {
    return (
        <div className={'search tran-4s ' + (props.class)}>
            <input type="text" placeholder={props.placeholder}/> 
            <button>{props.btnTxt}</button>
        </div>
    )
}

export default SearchBar