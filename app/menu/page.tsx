"use client";

import Image from 'next/image'; // ✅ You need this
import { menuSections } from '../menu'; // Your menu data

export default function MenuPage() {
  return (
    <main>
      <section className="menu">
        {/* Hero image at top */}
        <Image
          src="/images/burger.jpg" // path from public folder
          alt="burger"
          width={400}  
          height={300}
        />

        <h1>Our Menu</h1>
        <p className="halal">
          Halal: Our meat is halal certified from our supplier and precautions are taken to prevent cross contamination of food as we do serve pork.
        </p>

        <p className="allergy">
          Allergies: Please advise your waiter of any dietary requirements or allergies you may have. While we will do our best to achieve your requests, please note this is not an allergen-free kitchen.
        </p>

        {menuSections.map((section, index) => (
          <div key={index} className="menu-section">
            <h2>{section.title}</h2>
            <ul className="menu-list">
              {section.items.map((item, idx) => (
                <li key={idx} className="menu-item flex justify-between">
                  <span className="item-name">{item.name}</span>
                  <span className="item-price">{item.price}</span>
                </li> 
              ))}
            </ul>

            {/* Add Dessert Image below the Desserts section */}
            {section.title === "Dessert" && (
              <div className="dessert-image">
                <Image
                  src="/images/cake.avif" 
                  alt="Delicious Desserts"
                  width={600}
                  height={400}
                  className="menu-image" 
                />
              </div>
            )}

            {/* Add Drinks Image below the Drinks section */}
            {section.title === "Drinks" && (
              <div className="drinks-image">
                <Image
                  src="/images/mocktail.jpg" // Path to your drinks image
                  alt="Drinks"
                  width={600}
                  height={400}
                  className="menu-image" // Optional: Add any class for styling
                />
              </div>
            )}
          </div>
        ))}
      </section>
    </main>
  );
}
