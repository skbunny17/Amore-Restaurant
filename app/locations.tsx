import React from 'react';
import Image from "next/image";

const Locations = () => {
  return (
    <section className="locations-container">
      <div className="locations-content">
        {/* Left: Text */}
        <div className="locations-text">
          <h2>Our Locations</h2>
          <p>
            Select from our range of conveniently located restaurants across South West and North Sydney.
          </p>
          <a href="#locations" className="view-locations-btn">View Locations</a>
        </div>

        {/* Right: Image */}
        <div className="locations-image">
          <Image
            src="/images/candle.webp" // Replace with your image path
            alt="Restaurant Locations"
            width={600}  // Set your image width
            height={600} // Set your image height
            layout="responsive"  // Ensures the image is scaled responsively
            className="image"
          />
        </div>
      </div>
    </section>
  );
};

export default Locations;
