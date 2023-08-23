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
          There are many variations of passages of worem Ipsum available, but the majority
        </p>

        <a href="#" className="btn-outline">View Services</a>

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
              Sed ut perspiciatis unde omnis iste natus error volup tatem accusantium dolorem que laudantium, totam
              inventore.
            </p>

            <ul className="about-list">

              <li className="about-item">
                <div className="about-icon">
                  <ion-icon name="chevron-forward"></ion-icon>
                </div>

                <p className="about-text">
                  Go beyond logistics, make the world go round and revolutionize business.
                </p>
              </li>

              <li className="about-item">
                <div className="about-icon">
                  <ion-icon name="chevron-forward"></ion-icon>
                </div>

                <p className="about-text">
                  Logistics through innovation, dedication, and technology. ready, set, done.
                </p>
              </li>

              <li className="about-item">
                <div className="about-icon">
                  <ion-icon name="chevron-forward"></ion-icon>
                </div>

                <p className="about-text">
                  We take pride in serving our customers safely. together with passion.
                </p>
              </li>

              <li className="about-item">
                <div className="about-icon">
                  <ion-icon name="chevron-forward"></ion-icon>
                </div>

                <p className="about-text">
                  Imagination what we can easily see is only a small percentage.
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
                  The quality shows in every move we make where business lives.
                </p>
              </li>

            </ul>

            <a href="#" className="btn">Learn More</a>

          </div>

        </div>
      </section>

      <section className="section service" id="service" aria-label="service">
        <div className="container">

          <p className="section-subtitle">All Services</p>

          <h2 className="h2 section-title">Trusted For Our Services</h2>

          <p className="section-text">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry the standard dummy text ever since
            the when an
            printer took.
          </p>

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
                  Our aim is to optimize and improve your supply chain so that we can give you the best service.
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
                  <img src={service2} width="74" height="60" loading="lazy" alt="Ship"/>
                </div>

                <h3 className="h3 card-title">
                  <span className="span">02</span> Road Freight
                </h3>

                <p className="card-text">
                  Our aim is to optimize and improve your supply chain so that we can give you the best service.
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
                  <img src={service3} width="60" height="60" loading="lazy" alt="Airplane"/>
                </div>

                <h3 className="h3 card-title">
                  <span className="span">03</span> Ocean Freight
                </h3>

                <p className="card-text">
                  Our aim is to optimize and improve your supply chain so that we can give you the best service.
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
                  <img src={service4} width="50" height="60" loading="lazy" alt="Train"/>
                </div>

                <h3 className="h3 card-title">
                  <span className="span">04</span> Rail Freight
                </h3>

                <p className="card-text">
                  Our aim is to optimize and improve your supply chain so that we can give you the best service.
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
                  Our aim is to optimize and improve your supply chain so that we can give you the best service.
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
                  <img src={service6} width="46" height="60" loading="lazy" alt="Paper"/>
                </div>

                <h3 className="h3 card-title">
                  <span className="span">06</span> Project Cargo
                </h3>

                <p className="card-text">
                  Our aim is to optimize and improve your supply chain so that we can give you the best service.
                </p>

                <a href="#" className="btn-link">
                  <ion-icon name="chevron-forward" aria-hidden="true"></ion-icon>

                  <span className="span">View Detail</span>
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
                Lorem Ipsum is simply dummy text of the printing and typesetting industry the standard dummy text ever
                since the when an
                printer took.
              </p>
            </div>

            <a href="#" className="btn">Read More</a>

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
            Lorem Ipsum is simply dummy text of the printing and typesetting industry the standard dummy text ever since
            the when an
            printer took.
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

                  <a href="#" className="card-link">Read More</a>
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

                  <a href="#" className="card-link">Read More</a>
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

                  <a href="#" className="card-link">Read More</a>
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

                  <a href="#" className="card-link">Read More</a>
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

                  <a href="#" className="card-link">Read More</a>
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

                  <a href="#" className="card-link">Read More</a>
                </div>

              </div>
            </li>

          </ul>

        </div>
      </section>

      <section class="section blog" aria-label="blog" id="blog">
        <div class="container">

          <p class="section-subtitle">Our Blogs</p>

          <h2 class="h2 section-title">Recent news & events</h2>

          <p class="section-text">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry the standard dummy text ever since
            the when an
            printer took.
          </p>

          <ul class="blog-list grid-list">

            <li>
              <div class="blog-card">

                <figure class="card-banner img-holder">
                  <img src={blog1} width="770" height="500" loading="lazy"
                    alt="At the end of the day, going forward, a new normal that has evolved from. your only logistic partner."
                    class="img-cover"/>
                </figure>

                <div class="card-content">

                  <time class="card-meta" datetime="2022-08-02">
                    <span class="span">02</span> Aug
                  </time>

                  <h3 class="h3 card-title">
                    <a href="#">
                      At the end of the day, going forward, a new normal that has evolved from. your only logistic
                      partner.
                    </a>
                  </h3>

                  <p class="card-text">
                    New chip traps clusters of migrating tumor cells asperiortenetur, blanditiis odit. typesetting
                    industry the standard
                    dummy text ever since the when an printer.
                  </p>

                  <a href="#" class="btn-link">
                    <ion-icon name="chevron-forward" aria-hidden="true"></ion-icon>

                    <span class="span">Read More</span>
                  </a>

                </div>

              </div>
            </li>

            <li>
              <div class="blog-card">

                <figure class="card-banner img-holder">
                  <img src={blog2} width="770" height="500" loading="lazy"
                    alt="Going forward, a new normal that has evolved from generation. moving your products across all borders."
                    class="img-cover"/>
                </figure>

                <div class="card-content">

                  <time class="card-meta" datetime="2022-08-21">
                    <span class="span">21</span> Aug
                  </time>

                  <h3 class="h3 card-title">
                    <a href="#">
                      Going forward, a new normal that has evolved from generation. moving your products across all
                      borders.
                    </a>
                  </h3>

                  <p class="card-text">
                    New chip traps clusters of migrating tumor cells asperiortenetur, blanditiis odit. typesetting
                    industry the standard
                    dummy text ever since the when an printer.
                  </p>

                  <a href="#" class="btn-link">
                    <ion-icon name="chevron-forward" aria-hidden="true"></ion-icon>

                    <span class="span">Read More</span>
                  </a>

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
