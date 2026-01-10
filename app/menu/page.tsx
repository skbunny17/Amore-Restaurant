"use client";

import Image from 'next/image'; // ✅ You need this
import { menuSections } from '../menu';

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
          Halal: Our meat is halal certified from our supplier and precautions are taken to prevent cross contamination of food as we do serve pork
        </p>

        <p className="allergy">Allergies: Please advise your waiter of any dietary requirements or allergies you may have. While we will do our best to achieve your requests, please note this is not an allergen free kitchen. </p>

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
          </div>
        ))}
      </section>
    </main>
  );
}
