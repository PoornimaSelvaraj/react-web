
import { Link } from "react-router-dom";

function Services() {
  const services = [
    {
      icon: "bi-code-slash",
      title: "Web Development",
      description: "Responsive, fast, and modern websites built for your business."
    },
    {
      icon: "bi-palette",
      title: "UI Design",
      description: "Clean and intuitive interfaces focused on user experience."
    },
    {
      icon: "bi-phone",
      title: "Responsive Design",
      description: "Seamless experiences across mobile, tablet, and desktop."
    },
    {
      icon: "bi-bar-chart",
      title: "Data Analytics",
      description: "Turn business data into clear insights and better decisions."
    },
    {
      icon: "bi-gear",
      title: "Digital Solutions",
      description: "Practical technology solutions tailored to your needs."
    },
    {
      icon: "bi-headset",
      title: "Technical Support",
      description: "Ongoing guidance to keep your digital projects running smoothly."
    }
  ];

  return (
    <section className="page-section services-section">
      <div className="container">
        <div className="text-center section-heading">
          <span className="section-tag">WHAT WE DO</span>
          <h1 className="page-title mt-3">Solutions that move you forward.</h1>
          <p className="text-secondary mt-3">
            Everything you need to build and strengthen your digital presence.
          </p>
        </div>

        <div className="row g-4 mt-4">
          {services.map((service) => (
            <div className="col-md-6 col-lg-4" key={service.title}>
              <div className="service-card h-100">
                <div className="service-icon">
                  <i className={`bi ${service.icon}`}></i>
                </div>
                <h4>{service.title}</h4>
                <p>{service.description}</p>
                <Link to="/contact" className="service-link">
                  Learn More <i className="bi bi-arrow-right ms-1"></i>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
