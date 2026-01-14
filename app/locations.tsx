"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const LocationsSection = () => {
  return (
    <section className="locations-container">
      <div className="locations-content">
        {/* Left: Text */}
        <div className="locations-text">
          <h2>Our Locations</h2>
          <p>
            Visit our conveniently located restaurant! Experience the best food with a luxurious and cozy atmosphere, perfect for family, friends, or date nights.
          </p>

          <Link href="/locations" className="view-locations-btn">
            View Locations
          </Link>
        </div>

        {/* Right: Image */}
        <div className="locations-image">
          <Image
            src="/images/candlelight.webp" // Make sure this path exists in /public/images
            alt="Restaurant Location"
            width={600}  
            height={600} 
            className="image"
          />
        </div>
      </div>
    </section>
  );
};

export default LocationsSection;
