import SearchBar from "./btns/SearchBar";
import MediaBtn from "./btns/MediaBtn";

const Hero = () => {
    return (
        <div className='hero'>
            <section className="hero-main">
                {/* <h1>Data Analysis <br/> Tools & Methods</h1> */}
                <h1>Gain a strategic advantage with your data.</h1>
                <p>Online data analysis tool - easily analyze and visualize your data on-the-fly</p>
                <SearchBar placeholder="sample@email.com" btnTxt="Try Free"/>
                <p>Already have an account? <br/> <a href="#">Sign In</a></p>
                <p className="row">
                    <MediaBtn /> Watch video
                </p>
            </section>
                <img src="images/img1.png" alt="img"  width="400"/>
        </div>
    )
}

export default Hero