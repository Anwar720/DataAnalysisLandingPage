import SearchBar from "./btns/SearchBar";
import MediaBtn from "./btns/MediaBtn";
import { useInView } from 'react-intersection-observer';

const Hero = () => {
    const { ref, inView } = useInView({ rootMargin:'100%',triggerOnce:'true'});

    return (
        <div className='hero' ref={ref}>
            <section className={"hero-main " + (inView?'float-back':'float-left')}>
                {/* <h1>Data Analysis <br/> Tools & Methods</h1> */}
                <h1>Gain a strategic advantage with your data.</h1>
                <p>Online data analysis tool - easily analyze and visualize your data on-the-fly</p>
                <SearchBar class={(inView?'float-back':'float-left')} placeholder="sample@email.com" btnTxt="Try Free"/>
                <p>Already have an account? <br/> <a href="#">Sign In</a></p>
                <p className={"row " + (inView?'float-back':'float-left')}>
                    <MediaBtn /> Watch video
                </p>
            </section>
                <img src="images/img1.png" alt="img"  width="400" className={inView?"float-back":'float-right'}/>
        </div>
    )
}

export default Hero