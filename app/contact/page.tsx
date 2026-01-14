"use client";

export default function ContactPage() {
  return (
    <main className="contact-page">
      
      {/* Hero Section */}
      <section className="contact-hero">
        <h1>Contact Us</h1>
        <p>We'd love to hear from you! Reach out with any questions, reservations, or feedback.</p>
      </section>

      {/* Info + Form Section */}
      <section className="contact-section">
        {/* Restaurant Info */}
        <div className="contact-info">
          <h2>Our Location</h2>
          <p>123 Delicious Street, Foodville, NSW 2000</p>
          <p>Phone: (02) 1234 5678</p>
          <p>Email: info@restaurant.com</p>

          {/* Opening Hours */}
          <div className="opening-hours">
            <h3>Opening Hours</h3>
            <p>Monday - Friday: 11:00 AM - 9:00 PM</p>
            <p>Saturday: 1:00 PM - 10:00 PM</p>
            <p>Sunday: 1:00 PM - 8:30 PM</p>
          </div>
        </div>

        {/* Contact Form */}
        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />

          {/* Phone with separate +61 country code */}
          <div className="phone-input">
            <input
              type="text"
              value="+61"
              readOnly
              className="country-code"
            />
            <input
              type="tel"
              placeholder="Phone Number"
              className="phone-number"
            />
          </div>

          <textarea placeholder="Your Message" rows={5} required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </section>

      {/* Google Maps */}
      <section className="contact-map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3310.1234567890!2d151.209295!3d-33.868820!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12b123456789%3A0xabcdef123456789!2sSydney!5e0!3m2!1sen!2sau!4v1678901234567"
          width="100%"
          height="400"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
    </main>
  )};