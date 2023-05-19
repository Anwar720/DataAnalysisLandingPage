import { useState } from 'react'
import './App.scss'
import Nav from './components/nav'
import Hero from './components/Hero'
import StandardCard from './components/cards/StandardCard'
import PrimaryBtn from './components/btns/PrimaryBtn'
import ServiceCard from './components/cards/ServiceCard';
import PlanCard from './components/cards/PlanCard'
import services from './data/services.json'
import FeaturesData from './data/features.json'
import plans from './data/plans.json'

//link: https://wpmet.com/plugin/elementskit/sass/
function App() {

  return (
    <>
      <main>
        <Nav />
        <Hero />
      {/* features and services */}
        <div className="features section2">
          <span className="top-desc">
              <p className='p-desc'>Features</p>
              <h1>How does it work</h1>
          </span>
          <section className="card-wrapper section2">
            {
              FeaturesData.map((item,key)=>{
                return <StandardCard key={key} title={item.title} description={item.description} iconClass={item.iconClass}/>
              })
            }
          </section>
        </div>

        {/* sales section */}
        <div className='section3'>
            <div className="clmn-2">
            <img src="images/img2.png" alt="" width="500" />
              <section className='info-sales'>
                  <h1>
                    Get more sales<br/> by improving results
                  </h1>
                  <p>High-functioning data and analytics capabilities center around enabling the business to ask better questions - and get better answers</p>
              
                <ul>
                  <li><i class="fa-regular fa-circle-check"></i> Data Modernization</li>
                  <li><i class="fa-regular fa-circle-check"></i> Artificial Intelligence & Machine Learning</li>
                  <li><i class="fa-regular fa-circle-check"></i> Visualizations & Insights</li>
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
                  return <ServiceCard key={key} title={item.title} description={item.description} iconClass={item.iconClass}/>
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
                    return <PlanCard type={plan.type} description={plan.description} price={plan.price} features={plan.features} serciveNum={plan.serviceNum}/>
                  })
                }
              </div>
          </section>
        </div>
      </main>
    </>
  )
}

export default App
