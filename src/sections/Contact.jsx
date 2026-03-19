import { useState } from "react";

{/* Form Validation */}
export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });

    
{/* Hide success message after 5 seconds */}
    
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section className="contact" id="contact">
      <div className="contact-container">

        <h2 className="contact-heading">Contact Us</h2>
        <p className="contact-subtext">
          Send us a message and we will get back to you soon
        </p>

        {/* Success Message */}
        {submitted && (
          <div className="contact-success">
            ✅ Your message has been sent successfully. We will get back to you soon!
          </div>
        )}

        <form className="contact-form" onSubmit={handleSubmit}>

          <div className="contact-field">
            <label className="contact-label">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="contact-input"
              placeholder="Your name"
              required
            />
          </div>

          <div className="contact-field">
            <label className="contact-label">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="contact-input"
              placeholder="Your email"
              required
            />
          </div>

          <div className="contact-field">
            <label className="contact-label">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="contact-textarea"
              placeholder="Your message"
              rows={5}
              required
            />
          </div>

          <button type="submit" className="contact-btn">
            Submit
          </button>

        </form>

      </div>
    </section>
  );
}