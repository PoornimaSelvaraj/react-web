
import { useState } from "react";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleChange = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Your message has been validated. Connect a backend to send it.");
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <section className="page-section contact-section">
      <div className="container">
        <div className="text-center section-heading">
          <span className="section-tag">GET IN TOUCH</span>
          <h1 className="page-title mt-3">Let's talk about your ideas.</h1>
          <p className="text-secondary mt-3">
            Have a project in mind? We'd love to hear from you.
          </p>
        </div>

        <div className="row g-5 mt-3">
          <div className="col-lg-5">
            <div className="contact-info-card">
              <h3>Contact Information</h3>
              <p className="text-white-50 mt-3">
                Reach out to discuss your project or ask us a question.
              </p>

              <div className="contact-detail">
                <i className="bi bi-envelope"></i>
                <div>
                  <h6>Email</h6>
                  <p>hello@nexora.example</p>
                </div>
              </div>

              <div className="contact-detail">
                <i className="bi bi-geo-alt"></i>
                <div>
                  <h6>Location</h6>
                  <p>Chennai, Tamil Nadu, India</p>
                </div>
              </div>

              <div className="contact-detail">
                <i className="bi bi-clock"></i>
                <div>
                  <h6>Working Hours</h6>
                  <p>Monday – Friday</p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-7">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="row g-3">
                <div className="col-md-6">
                  <label className="form-label">Full Name</label>
                  <input
                    className="form-control"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    required
                  />
                </div>

                <div className="col-md-6">
                  <label className="form-label">Email Address</label>
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    required
                  />
                </div>

                <div className="col-12">
                  <label className="form-label">Subject</label>
                  <input
                    className="form-control"
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    placeholder="How can we help?"
                    required
                  />
                </div>

                <div className="col-12">
                  <label className="form-label">Message</label>
                  <textarea
                    className="form-control"
                    rows="5"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project..."
                    required
                  ></textarea>
                </div>

                <div className="col-12">
                  <button className="btn btn-primary btn-lg w-100" type="submit">
                    Send Message <i className="bi bi-send ms-2"></i>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
