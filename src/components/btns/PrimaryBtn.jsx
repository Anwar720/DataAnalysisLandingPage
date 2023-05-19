import React from 'react'

const PrimaryBtn = (props) => {
    return (
        <button className={'primary-btn ' + props.classes}>
            {props.name}
        </button>
    )
}

export default PrimaryBtn