import { useState } from "react"

const ToggleCard = (props) => {
    const [isActive,setIsActive] = useState(false);
    return (
        <div  className={'toggle ' + (isActive?' active ':' ')} >
            <section onClick={()=>{setIsActive(prev=> prev?false:true)}}>
                <h5>{props.question}</h5>
                <i class="fa-solid fa-chevron-down"></i>
            </section>
            <p className="hidden">
                {props.answer}
            </p>
        </div>
    )
}

export default ToggleCard