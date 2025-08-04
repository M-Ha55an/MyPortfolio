import React from 'react';
import ServiceImg1 from '../Images/webdev.avif'; // Replace with real paths
import ServiceImg2 from '../Images/Uiux.png';
import ServiceImg3 from '../Images/ai.avif';
import ServiceImg4 from '../Images/seo.avif';
import '../Styles/Services.css';

export default function Services() {
  const services = [
    {
      title: "Web Development",
      image: ServiceImg1,
      text: "Modern, responsive websites built with React and Bootstrap."
    },
    {
      title: "App Design",
      image: ServiceImg2,
      text: "Beautiful UI/UX for mobile and web apps."
    },
    {
      title: "AI Integration",
      image: ServiceImg3,
      text: "Add intelligent features to your apps using AI tools."
    },
    {
      title: "SEO Optimization",
      image: ServiceImg4,
      text: "Improve visibility and traffic with smart SEO strategies."
    }
  ];

  return (
    <section className="services" id="services">
      <h1 className="heading text-center my-5">Our Services</h1>

      <div className="container">
        <div className="row justify-content-center gap-3">
          {services.map((service, index) => (
            <div className="card col-md-3 p-0 mx-2 my-2" key={index}>
              <img src={service.image} className="card-img-top" alt={service.title} />
              <div className="card-body">
                <h5 className="card-title">{service.title}</h5>
                <p className="card-text">{service.text}</p>
                <a href="#contact" className="btn btn-primary">Learn More</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
