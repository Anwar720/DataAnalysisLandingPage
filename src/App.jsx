import './App.scss'
import Nav from './components/nav'
import Hero from './components/Hero'
import StandardCard from './components/cards/StandardCard'
import PrimaryBtn from './components/btns/PrimaryBtn'
import ServiceCard from './components/cards/ServiceCard';
import PlanCard from './components/cards/PlanCard'
import ToggleCard from './components/cards/ToggleCard';
import services from './data/services.json'
import FeaturesData from './data/features.json'
import plans from './data/plans.json'
import FAQ from './data/faq.json'

import { useInView } from 'react-intersection-observer';

function App() {
  const section2 = useInView({ threshold:0.3,triggerOnce:'true' });
  const section3 = useInView({ threshold:0.3,triggerOnce:'true' });
  const card_IO = useInView({ threshold:0.3,triggerOnce:'true' });

  return (
    <>
      <main>
        {/* <Nav /> */}
        <Hero />
      {/* features and services */}
        <div className={"features section2 " } ref={section2.ref}>
          <span className="top-desc">
              <p className='p-desc'>Features</p>
              <h1>How does it work</h1>
          </span>
          <section className="card-wrapper section2">
            
            {
              FeaturesData.map((item,key)=>{
                return  <span className={' ' + (section2.inView?'float-up':'float-down')} key={key}> 
                          <StandardCard key={key}  title={item.title} description={item.description} iconClass={item.iconClass}/>
                      </span>
              })
            }
          </section>
        </div>

        {/* sales section */}
        <div className='section3' ref={section3.ref}>
            <div className="clmn-2">
            <img  loading='lazy' src="images/img2.png"  width="500" className={(section3.inView?'float-back':'float-left')} />
              <section className='info-sales'>
                  <h1>
                    Get more sales<br/> by improving results
                  </h1>
                  <p>High-functioning data and analytics capabilities center around enabling the business to ask better questions - and get better answers</p>
              
                <ul>
                  <li><i className="fa-regular fa-circle-check"></i> Data Modernization</li>
                  <li><i className="fa-regular fa-circle-check"></i> Artificial Intelligence & Machine Learning</li>
                  <li><i className="fa-regular fa-circle-check"></i> Visualizations & Insights</li>
                </ul>
                <PrimaryBtn name="Explore More" />
              </section>
            </div>
        </div>

        {/* section4  */}
        <div className="section4">
          <span className="top-desc">
              <p className='p-desc'>Our services</p>
              <h1>What we offer</h1>
          </span>
          <div className="services-wrapper">
            {
              services.map((item,key)=>{
                  return <span ref={card_IO.ref} >
                          <ServiceCard key={key} title={item.title} description={item.description} iconClass={item.iconClass}/>
                        </span>
              })
            }
              
          </div>
        </div>

        <div className="section5 pricing">
          <section className="pricing-plans">
            <span className="top-desc">
                <p className='p-desc'>Pricing Plan</p>
                <h1>Try any plan free for 30 Days.</h1>
            </span>
              <div className="plans">
                {
                  plans.map((plan,key)=>{
                    return <PlanCard  key ={key} type={plan.type} description={plan.description} price={plan.price} features={plan.features} serviceNum={plan.serviceNum}/>
                  })
                }
              </div>
          </section>
        </div>

        <div className="section6">
              <div className="sec6-wrapper">
                <span className="top-desc">
                    <p className='p-desc'>FREQUENT QUESTION</p>
                    <h1>Do you have any question</h1>
                </span>
                <div className="sec6-content">
                  <span>
                    {
                      FAQ.map((faq,key)=>{
                        return(
                            <ToggleCard question={faq.question} answer={faq.answer}/>
                        )
                      })
                    }
                  </span>
                  <img src="images/img2.png"  />
                </div>
              </div>
        </div>


      </main>
    </>
  )
}

export default App
