import React from 'react'
import './body.css'
import bgImg from '../../assets/hero-banner.jpg'
import heroShape from '../../assets/hero-shape.png'
import aboutBanner from '../../assets/about-banner.jpg'
import aboutShape1 from '../../assets/about-shape-1.png'
import aboutShape2 from '../../assets/about-shape-2.png'
import service1 from '../../assets/service-icon-1.png'
import service2 from '../../assets/service-icon-2.png'
import service3 from '../../assets/service-icon-3.png'
import service4 from '../../assets/service-icon-4.png'
import service5 from '../../assets/service-icon-5.png'
import service6 from '../../assets/service-icon-6.png'
import featureIcon1 from '../../assets/feature-icon-1.png'
import featureIcon2 from '../../assets/feature-icon-2.png'
import featureIcon3 from '../../assets/feature-icon-3.png'
import project1 from '../../assets/project-1.jpg'
import project2 from '../../assets/project-2.jpg'
import project3 from '../../assets/project-3.jpg'
import project4 from '../../assets/project-4.jpg'
import project5 from '../../assets/project-5.jpg'
import project6 from '../../assets/project-6.jpg'
import blog1 from '../../assets/blog-1.jpg'
import blog2 from '../../assets/blog-2.jpg'
import newsletterImg from '../../assets/newsletter-banner.png'
import Footer from '../footer/Footer'


export default function Body() {
  return (
    <>
    <section className="section hero" aria-label="home" id="home" style={{
        background: `url(${bgImg})`,
        backgroundRepeat:"no-repeat",
        backgroundSize:"cover",
        backgroundPosition:"center"
      }}>
    <div className="container">

      <div className="hero-content">

        <h2 className="h1 hero-title">
          <span className="span">To Every</span><span className='hero-title2'>Direction</span>
        </h2>

        <p className="hero-text">
        Welcome to Courier Swift. We specialize in premium express services, providing seamless door-to-door shipping to over 200 countries, 295+ branches. Our mission is to unite individuals and enterprises across the globe.
        </p>

        <img src={heroShape} width="116" height="116" loading="lazy"
          className="hero-shape shape-1"/>

        <img src={heroShape} width="116" height="116" loading="lazy"
          className="hero-shape shape-2"/>

      </div>
    </div>
  </section>
  
  <section className="section about" id="about" aria-label="about">
        <div className="container">

          <figure className="about-banner img-holder" width="400" height="720">
            <img src={aboutBanner} width="400" height="720" loading="lazy" alt=""
              className="img-cover"/>

            <img src={aboutShape1} width="260" height="170" loading="lazy" alt=""
              className="abs-img abs-img-1"/>

            <img src={aboutShape2} width="500" height="500" loading="lazy" alt=""
              className="abs-img abs-img-2"/>
          </figure>

          <div className="about-content">

            <p className="section-subtitle">Why Choose Us</p>

            <h2 className="h2 section-title">We Are Professional Logistics & cargo Agency</h2>

            <p className="section-text">
            Take your business to the next level with our expertise. With direct access to our global network and wide portfolio of shipping services, connect with people and businesses around the world. 
            </p>

            <ul className="about-list">

              <li className="about-item">
                <div className="about-icon">
                  <ion-icon name="chevron-forward"></ion-icon>
                </div>

                <p className="about-text">
                At CourierSwift, we're more than just a logistics company – we're your reliable partners in seamless global connectivity. With a relentless commitment to excellence, we've been transforming the way goods and information travel since our inception.
                </p>
              </li>

              <li className="about-item">
                <div className="about-icon">
                  <ion-icon name="chevron-forward"></ion-icon>
                </div>

                <p className="about-text">
                Our journey began with a vision to bridge gaps and bring people closer through efficient transportation. Over the years, that vision has evolved into a reality that powers businesses, fuels trade, and brings smiles to countless faces.
                </p>
              </li>

              <li className="about-item">
                <div className="about-icon">
                  <ion-icon name="chevron-forward"></ion-icon>
                </div>

                <p className="about-text">
                What sets us apart is our unwavering dedication to innovation. We harness the latest technologies and industry best practices to optimize every step of the logistics process. From state-of-the-art tracking systems to eco-conscious shipping methods, we're constantly pushing boundaries to offer you a service that's efficient, sustainable, and hassle-free.

                </p>
              </li>

              <li className="about-item">
                <div className="about-icon">
                  <ion-icon name="chevron-forward"></ion-icon>
                </div>

                <p className="about-text">
                But our story is incomplete without our team. Our diverse group of passionate professionals forms the heartbeat of CourierSwift. Their expertise, commitment, and tireless efforts are the driving force behind every successful delivery, every satisfied customer, and every milestone we achieve.

                </p>
              </li>

              <li className="about-item">
                <div className="about-icon">
                  <ion-icon name="chevron-forward"></ion-icon>
                </div>

                <p className="about-text">
                  Quality never goes out of style. safety, quality, professionalism.
                </p>
              </li>

              <li className="about-item">
                <div className="about-icon">
                  <ion-icon name="chevron-forward"></ion-icon>
                </div>

                <p className="about-text">
                At CourierSwift, we don't just move packages – we move dreams, aspirations, and progress. With a global reach that spans across borders and oceans, we're here to redefine logistics, one swift delivery at a time. Join us on this exhilarating journey as we pave the way for a connected world, where distances are no match for our determinations.
                </p>
              </li>

            </ul>

          

          </div>

        </div>
      </section>

      <section className="section service" id="service" aria-label="service">
        <div className="container">

          <p className="section-subtitle">All Services</p>

          <h2 className="h2 section-title">Trusted For Our Services</h2>

       

          <ul className="service-list grid-list">

            <li>
              <div className="service-card">

                <div className="card-icon">
                  <img src={service1} width="80" height="60" loading="lazy" alt="Truck"/>
                </div>

                <h3 className="h3 card-title">
                  <span className="span">01</span> Air Freight
                </h3>

                <p className="card-text">
                Experience the ultimate in swift deliveries with FlightSwift, the airborne extension of CourierSwift's services. When time is of the essence, FlightSwift soars above the rest, ensuring your packages arrive at their destination in the shortest time possible. Trust us for high-speed, top-priority shipping.
                </p>

                <a href="#" className="btn-link">
                  <ion-icon name="chevron-forward" aria-hidden="true"></ion-icon>

               
                </a>

              </div>
            </li>

            <li>
              <div className="service-card">

                <div className="card-icon">
                  <img src={service2} width="74" height="60" loading="lazy" alt="Ship"/>
                </div>

                <h3 className="h3 card-title">
                  <span className="span">02</span> Road Freight
                </h3>

                <p className="card-text">
                At CourierSwift, we understand the importance of ground-level connectivity. That's why we offer RoadSwift, a comprehensive road transportation service that complements our courier expertise. RoadSwift ensures your shipments navigate local routes with ease, guaranteeing timely and secure deliveries.
                </p>

                <a href="#" className="btn-link">
                  <ion-icon name="chevron-forward" aria-hidden="true"></ion-icon>

               
                </a>

              </div>
            </li>

            <li>
              <div className="service-card">

                <div className="card-icon">
                  <img src={service3} width="60" height="60" loading="lazy" alt="Airplane"/>
                </div>

                <h3 className="h3 card-title">
                  <span className="span">03</span> Ocean Freight
                </h3>

                <p className="card-text">
                Welcome to ShipSwift, a division of CourierSwift designed for international shipping needs. Our maritime logistics solutions provide a strategic advantage for businesses seeking to expand globally. With ShipSwift, your cargo sets sail with confidence, reaching distant shores efficiently and smoothly.

                </p>

                <a href="#" className="btn-link">
                  <ion-icon name="chevron-forward" aria-hidden="true"></ion-icon>

                  
                </a>

              </div>
            </li>

            <li>
              <div className="service-card">

                <div className="card-icon">
                  <img src={service4} width="50" height="60" loading="lazy" alt="Train"/>
                </div>

                <h3 className="h3 card-title">
                  <span className="span">04</span> Rail Freight
                </h3>

                <p className="card-text">
                Introducing RailSwift, a seamless extension of CourierSwift's logistics solutions. RailSwift leverages the efficiency of rail transport to provide eco-friendly, long-haul delivery options for your cargo. Trust us to connect your goods across vast distances with reliability and precision.
                </p>

                <a href="#" className="btn-link">
                  <ion-icon name="chevron-forward" aria-hidden="true"></ion-icon>

                  <span className="span">View Detail</span>
                </a>

              </div>
            </li>

            <li>
              <div className="service-card">

                <div className="card-icon">
                  <img src={service5} width="63" height="60" loading="lazy" alt="Trolley"/>
                </div>

                <h3 className="h3 card-title">
                  <span className="span">05</span> Warehousing
                </h3>

                <p className="card-text">
                Welcome to WarehouseSwift, a division of CourierSwift that takes care of your storage needs. With secure and strategically located facilities, WarehouseSwift ensures your goods are stored and managed efficiently. From short-term to long-term storage, trust us for seamless warehousing solutions that keep your inventory in top condition.
                </p>

                <a href="#" className="btn-link">
                  <ion-icon name="chevron-forward" aria-hidden="true"></ion-icon>

             
                </a>

              </div>
            </li>

            <li>
              <div className="service-card">

                <div className="card-icon">
                  <img src={service6} width="46" height="60" loading="lazy" alt="Paper"/>
                </div>

                <h3 className="h3 card-title">
                  <span className="span">06</span> Project Cargo
                </h3>

                <p className="card-text">
                Discover ProjectSwift, an elite division of CourierSwift catering to intricate and large-scale shipments. With our expertise and global reach, we manage every detail of your specialized cargo, ensuring seamless delivery for your ambitious projects.
                </p>

                <a href="#" className="btn-link">
                  <ion-icon name="chevron-forward" aria-hidden="true"></ion-icon>

                
                </a>

              </div>
            </li>

          </ul>

        </div>
      </section>

      <section className="section feature" aria-label="feature">
        <div className="container">

          <div className="title-wrapper">

            <div>
              <p className="section-subtitle">Estimation</p>

              <h2 className="h2 section-title">Has a wide range of solutions</h2>

              <p className="section-text">
              Take complete control of deliveries with your own dedicated road vehicle
              </p>
            </div>

           

          </div>

          <ul className="feature-list grid-list">

            <li>
              <div className="feature-card" style={{"--card-number": "01"}}>

                <div className="card-icon">
                  <img src={featureIcon1} width="72" height="91" alt=""/>
                </div>

                <h3 className="h3 card-title">Solutions and specialized</h3>

                <p className="card-text">
                  Our aim is to optimize and improve your supply chain so that we can give you the best service
                </p>

             
              </div>
            </li>

            <li>
              <div className="feature-card" style={{"--card-number": '02'}}>

                <div className="card-icon">
                  <img src={featureIcon2} width="94" height="94" alt=""/>
                </div>

                <h3 className="h3 card-title">Multiple warehouses</h3>

                <p className="card-text">
                  We provide multiple drop off and pickup locations so you don't have to worry. And you should not face
                  any kind...
                </p>

              

              </div>
            </li>

            <li>
              <div className="feature-card" style={{"--card-number": '03'}}>

                <div className="card-icon">
                  <img src={featureIcon3} width="93" height="93" alt=""/>
                </div>

                <h3 className="h3 card-title">Tracking made easy</h3>

                <p className="card-text">
                  A tracking number for the entire process. so that you can find the exact position. this process will
                  help you
                </p>

              </div>
            </li>

          </ul>

        </div>
      </section>


     

      <section class="section project" aria-label="project">
        <div className="container">

          <p className="section-subtitle">Projects</p>

          <h2 className="h2 section-title">Featured Projects</h2>

          <p className="section-text">
          Don’t lose a minute of productivity with your shipment sent by the fastest possible route.
          </p>

          <ul className="project-list">

            <li className="project-item">
              <div className="project-card">

                <figure className="card-banner img-holder">
                  <img src={project1} width="397" height="352" loading="lazy"
                    alt="Warehouse inventory" className="img-cover"/>
                </figure>

                <button className="action-btn" aria-label="View image">
                  <ion-icon name="expand-outline"></ion-icon>
                </button>

                <div className="card-content">
                  <p className="card-tag">Warehousing , Distrbution</p>

                  <h3 className="h3">
                    <a href="#" className="card-title">Warehouse inventory</a>
                  </h3>

                
                </div>

              </div>
            </li>

            <li className="project-item">
              <div className="project-card">

                <figure className="card-banner img-holder">
                  <img src={project2} width="397" height="352" loading="lazy"
                    alt="Warehouse inventory" className="img-cover"/>
                </figure>

                <button className="action-btn" aria-label="View image">
                  <ion-icon name="expand-outline"></ion-icon>
                </button>

                <div className="card-content">
                  <p className="card-tag">Logistics, Analytics</p>

                  <h3 className="h3">
                    <a href="#" className="card-title">Minimize Manufacturing</a>
                  </h3>

           
                </div>

              </div>
            </li>

            <li className="project-item">
              <div className="project-card">

                <figure className="card-banner img-holder">
                  <img src={project3} width="397" height="352" loading="lazy"
                    alt="Warehouse inventory" className="img-cover"/>
                </figure>

                <button className="action-btn" aria-label="View image">
                  <ion-icon name="expand-outline"></ion-icon>
                </button>

                <div className="card-content">
                  <p className="card-tag">Warehousing , Distrbution</p>

                  <h3 className="h3">
                    <a href="#" className="card-title">Warehouse inventory</a>
                  </h3>

          
                </div>

              </div>
            </li>

            <li className="project-item">
              <div className="project-card">

                <figure className="card-banner img-holder">
                  <img src={project4} width="397" height="352" loading="lazy"
                    alt="Warehouse inventory" className="img-cover"/>
                </figure>

                <button className="action-btn" aria-label="View image">
                  <ion-icon name="expand-outline"></ion-icon>
                </button>

                <div className="card-content">
                  <p className="card-tag">Logistics, Analytics</p>

                  <h3 className="h3">
                    <a href="#" className="card-title">Minimize Manufacturing</a>
                  </h3>

               
                </div>

              </div>
            </li>

            <li className="project-item">
              <div className="project-card">

                <figure className="card-banner img-holder">
                  <img src={project5} width="397" height="352" loading="lazy"
                    alt="Warehouse inventory" className="img-cover"/>
                </figure>

                <button className="action-btn" aria-label="View image">
                  <ion-icon name="expand-outline"></ion-icon>
                </button>

                <div className="card-content">
                  <p className="card-tag">Warehousing , Distrbution</p>

                  <h3 className="h3">
                    <a href="#" className="card-title">Warehouse inventory</a>
                  </h3>

                
                </div>

              </div>
            </li>

            <li className="project-item">
              <div className="project-card">

                <figure className="card-banner img-holder">
                  <img src={project6} width="397" height="352" loading="lazy"
                    alt="Warehouse inventory" className="img-cover"/>
                </figure>

                <button className="action-btn" aria-label="View image">
                  <ion-icon name="expand-outline"></ion-icon>
                </button>

                <div className="card-content">
                  <p className="card-tag">Logistics, Analytics</p>

                  <h3 className="h3">
                    <a href="#" className="card-title">Minimize Manufacturing</a>
                  </h3>

                
                </div>

              </div>
            </li>

          </ul>

        </div>
      </section>

     

      <section class="section newsletter" aria-label="newsletter">
        <div class="container">

          <figure class="newsletter-banner img-holder">
            <img src={newsletterImg} width="303" height="381" alt="newsletter banner"
              class="w-100"/>
          </figure>

          <div class="newsletter-content">

            <h2 class="h2 section-title">Subscribe for offers and news</h2>

            <form action="" class="newsletter-form">
              <input type="email" name="email_address" placeholder="Enter Your Email" aria-label="email"
                class="email-field"/>

              <button type="submit" class="newsletter-btn">Subscribe Now</button>
            </form>

          </div>

        </div>
      </section>

<Footer/>
    </>
  )
}
