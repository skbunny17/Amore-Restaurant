"use client";

import React from "react";

export default function LocationsPage() {
  const locations = [
    { name: "Sydney CBD", address: "123 Delicious St, Sydney, NSW 2000", image: "/images/res1.jpg" },
    { name: "Parramatta", address: "456 Tasty Ave, Parramatta, NSW 2150", image: "/images/res2.png" },
    { name: "Bondi", address: "789 Beach Rd, Bondi, NSW 2026", image: "/images/res3.jpg" },
    { name: "Liverpool", address: "12 Yummy St, Liverpool, NSW 2170", image: "/images/res4.webp" },
    { name: "Manly", address: "34 Ocean Blvd, Manly, NSW 2095", image: "/images/res5.jpg" },
    { name: "Castle Hill", address: "56 Castle Rd, Castle Hill, NSW 2154", image: "/images/res6.jpg" },
    { name: "Wetherill Park", address: "78 Park Ln, Wetherill Park, NSW 2164", image: "/images/res7.jpg" },
    { name: "Bankstown", address: "90 Bank St, Bankstown, NSW 2200", image: "/images/res8.jpg" },
  ];

  return (
    <main style={{ padding: "60px 20px", fontFamily: "'Segoe UI', sans-serif" }}>
      <h1 style={{ textAlign: "center", fontSize: "3rem", marginBottom: "40px", color: "#c01a08" }}>
        Our Locations
      </h1>

      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "40px" }}>
        {locations.map((loc, index) => (
          <div
            key={index}
            style={{
              width: "350px",
              borderRadius: "20px",
              overflow: "hidden",
              boxShadow: "0 10px 20px rgba(0,0,0,0.2)",
              background: "#fff",
              display: "flex",
              flexDirection: "column",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
            }}
          >
            {/* Restaurant Image */}
            <img
              src={loc.image}
              alt={loc.name}
              style={{ width: "100%", height: "200px", objectFit: "cover" }}
            />

            {/* Name & Address */}
            <div style={{ padding: "15px 20px" }}>
              <h2 style={{ margin: "0 0 10px 0", color: "#e01e08" }}>{loc.name}</h2>
              <p style={{ margin: "0" }}>{loc.address}</p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
