import React from 'react'

const ServiceCard = (props) => {
    return (
        <div className='service-card'>
            <span className="icon">
                <i class={props.iconClass?props.iconClass:"fa-solid fa-magnifying-glass-chart"}></i>
            </span>
            <h4 className="card-title">
                {props.title}
            </h4>
            <p className="card-txt">
                {props.description}
                
            </p>
            <button>
                Learn More
                <i class="fa-solid fa-chevron-right"></i>
            </button>
        </div>
    )
}

export default ServiceCard