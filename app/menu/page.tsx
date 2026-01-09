"use client";

import { menuSections } from '../menu';

export default function MenuPage() {
  return (
    <main>
      <section className="menu">
        <h1>Our Menu</h1>
        {menuSections.map((section, index) => (
          <div key={index} className="menu-section">
            <h2>{section.title}</h2>
            <ul className="menu-list">
              {section.items.map((item, idx) => (
                <li key={idx} className="menu-item">
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
