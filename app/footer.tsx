export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo / About */}
        <div className="footer-section">
          <h1 className="logo">Amore</h1>
          <p>
            Experience the best dining with family and friends. Gourmet food, cozy ambiance, and a touch of luxury.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/menu">Menu</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/locations">Locations</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer-section">
          <h3>Contact</h3>
          <p>123 Delicious Street, Foodville, NSW 2000</p>
          <p>Phone: (02) 1234 5678 </p>
          <p>Email: info@amorerestaurant.com</p>
        </div>

        {/* Opening Hours */}
        <div className="footer-section">
          <h3>Opening Hours</h3>
          <p>Mon - Fri: 11:00 AM - 9:00 PM</p>
          <p>Sat: 1:00 PM - 10:00 PM</p>
          <p>Sun: 1:00 PM - 8:30 PM</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 Amore. All rights reserved.</p>
      </div>
    </footer>
  );
}
