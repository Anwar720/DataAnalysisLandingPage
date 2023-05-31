import { useInView } from 'react-intersection-observer';

const ServiceCard = (props) => {
    const { ref, inView } = useInView({ rootMargin:'100%',triggerOnce:'true'});

    return (
        <div className={'service-card ' + (inView?'float-up':'float-down') } ref={ref} >
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