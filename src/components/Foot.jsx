import React, { useEffect, useState } from "react";
import "../styles/foot.css";
import { FaInstagram, FaFacebook } from "react-icons/fa";
import emailjs from "emailjs-com";

function Foot() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fade-in");
          }
        });
      },
      { threshold: 0.2 }
    );

    const elements = document.querySelectorAll(".fade-element");
    elements.forEach((el) => observer.observe(el));

    return () => elements.forEach((el) => observer.unobserve(el));
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .sendForm(
        "service_uybe1xz",     // 🔁 Replace this with your EmailJS Service ID
        "template_yr0gzsd",    // 🔁 Replace this with your Template ID
        e.target,              // 🔁 This is the form element
        "d9VDK9iZotLhZ2SRk"      // 🔁 Replace this with your Public Key
      )
      .then(
        (result) => {
          console.log("Message Sent: ", result.text);
          setSubmitSuccess(true);
          setFormData({ name: "", email: "", message: "" }); // Clear form
        },
        (error) => {
          console.log("Error: ", error.text);
          setSubmitSuccess(false);
        }
      )
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <div className="footmain fade-element">
      <div className="footer-logo">
        <div className="flogo"></div>
      </div>

      <h1 className="ok fade-element">Have a query?</h1>

      <form className="contact-form fade-element" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          required
          className="input-field"
          placeholder="Enter your name"
          value={formData.name}
          onChange={handleInputChange}
        />
        <input
          type="email"
          name="email"
          required
          className="input-field"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleInputChange}
          pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
          title="Please enter a valid email address"
        />
        <textarea
          name="message"
          required
          className="input-field textarea-field"
          placeholder="Type your message here..."
          value={formData.message}
          onChange={handleInputChange}
        ></textarea>

        <button type="submit" className="submit-button" disabled={isSubmitting}>
          {isSubmitting ? "Sending..." : "Send"}
        </button>
      </form>

      {submitSuccess !== null && (
        <div className="form-feedback">
          {submitSuccess ? (
            <p className="success-message">Your message has been sent!</p>
          ) : (
            <p className="error-message">Something went wrong. Please try again.</p>
          )}
        </div>
      )}

      <div className="footer-contact fade-element">
        <p>
          <strong>CONTACT :</strong> Pradeep PR
        </p>
        <p>
          <strong>PHONE :</strong> +91 9495333925
        </p>
      </div>

      <div className="social-icons fade-element">
        <a href="https://www.instagram.com/natyagruha?igsh=MW5iOTl0NnVwM3Y4OQ==" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="icon" />
        </a>
        <a href="https://www.facebook.com/asha.pradeep.77985?mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer">
          <FaFacebook className="icon" />
        </a>
      </div>
    </div>
  );
}

export default Foot;
