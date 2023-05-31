import React from 'react'

const StandardCard = (props) => {
    return (
        <div className={'standard-card '}>
            <span className="icon">
                <i class={props.iconClass?props.iconClass:"fa-solid fa-magnifying-glass-chart"}></i>
            </span>
            <h4 className="card-title">
                {props.title}
            </h4>
            <p className="card-txt">
                {props.description}
                {/* {props.description.map((bullet,key)=>{
                    return <li key={key}>{bullet}</li>
                })} */}
            </p>
            <button>
                Learn More
                <i class="fa-solid fa-chevron-right"></i>
            </button>
        </div>
    )
}

export default StandardCard