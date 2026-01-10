// menu.ts
export interface MenuItem {
  name: string;
  price: string;
}

export interface MenuSection {
  title: string;
  items: MenuItem[];
}

export const menuSections: MenuSection[] = [
     {
    title: "Appetisers",
    items: [
      { name: 'Mozzerella Sticks', price: '$8' },
      { name: 'Garlic Bread', price: '$10' },
      { name: 'Hot Chicken Wings', price: '$11'},
      { name: 'Ribs', price: '$12'},
      { name: 'Salt and Pepper Calimari', price: '$15'},
      { name: 'Mexican Pizza', price: '$19'},
      { name: 'Classic Cheeseburger', price: '$14'},
    ],
  },
   {
    title: "Sides",
    items: [
      { name: 'Hot Chips', price: '$8' },
      { name: 'Fresh Salad', price: '$10' },
      { name: 'Corn on the Cob', price: '$9'},
      { name: 'Potato Wedges', price: '$13'},
      { name: 'Mashed Potato', price: '$14'},
    ],
  },
  {
    title: "Lunch Specials",
    items: [
      { name: 'Margherita Pizza', price: '$18' },
      { name: 'Spaghetti Carbonara', price: '$22' },
      { name: 'Chicken Alfredo Pasta', price: '$20' },
      { name: 'Sundried Tomato Pasta', price: '$25' },
      { name: 'Chicken Schnitzel with Chips & Salad', price: '$22' },
      { name: 'Fettucine Carbonara', price: '$25' },
    ],
  },
  {
    title: "Dinner",
    items: [
      { name: 'Mother, Give me Lasagna', price: '$38' },
      { name: 'Chicken Mushroom Pasta', price: '$28' },
      { name: 'Cheese and Garlic Pizza', price: '$20' },
      { name: 'Chicken Parmigiana', price: '$29' },
      { name: 'Prawn Linguine', price: '$25' }, 
      { name: 'Spinach and Ricotta Ravioli', price: '$28' }, 
      { name: 'Sirloin 500g', price: '$35' }, 
    ],
  },
  {
    title: "Dessert",
    items: [
      { name: 'Tiramisu', price: '$12' },
      { name: 'Creme Brulee (V)', price : '10'},
      { name: 'Cheesecake', price: '$17' },
      { name: 'Molten Lava Cake', price: '$19' },
      { name: 'Icecream Sundae', price: '$20' },
      { name: 'Cannoli', price: '$22' },
      { name: 'Sticky Date Pudding', price: '$27' },
      { name: 'Belgian Waffles', price: '$20' },
      { name: 'Nutella Pizza', price: '$21' },
    ],
  },
  {
    title: "Drinks",
    items: [
      { name: 'Strawberry Mocktail', price: '$11' }, 
      { name: 'Watermelon Lemonade', price: '$12' }, 
      { name: 'Coca Cola', price: '$10' }, 
      { name: 'Fanta', price: '$8' }, 
      { name: 'Sprite', price: '$8' }, 
      { name: 'Pina Colada', price: '$12' }, 
      { name: 'Blue Lagoon', price: '$15' }, 

    ],
  },
];
