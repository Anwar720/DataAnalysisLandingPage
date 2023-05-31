import PrimaryBtn from "../btns/PrimaryBtn"

const PlanCard = (props) => {
    return (
        <div className="plan-card">
            <h1>{props.type}</h1>
            <p>{props.description}</p>
            <p> <span className='bold-blue'>${props.price}</span> / month </p>
            <ul>
                {
                    props.features.map((feature,key)=>{
                        return (
                            <li key={key}>
                                <i class={"fa-solid fa-circle-check " +  (key < (props.serviceNum - 1)?'included':'') }></i>
                                <p>{feature}</p>
                            </li>
                        )})
                }
            </ul>
                <PrimaryBtn name="Start Free Trial" classes=""/>
        </div>
            
    )
}

export default PlanCard