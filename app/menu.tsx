interface MenuItem {
name: string
price: string
}

const menuItems: MenuItem[] = [
{ name: 'Margherita Pizza', price: '$18' },
{ name: 'Spaghetti Carbonara', price: '$22' },
{ name: 'Tiramisu', price: '$12' },
{ name: 'Mother, Give me Lasagna', price: '$38' },
{ name: 'Chicken Alfredo Pasta', price: '$20' },
{ name: 'Prawn Linguine', price: '$25' },
{ name: 'Garlic Bread', price: '$10' },
{ name: 'Chicken Mushroom Pasta', price: '$28' },
{ name: 'Cheese and Garlic Pizza', price: '$20' },
{ name: 'Spinach and Ricotta Ravioli', price: '$18' },
{ name: 'Chicken Parmigiana', price: '$29' },
]


export default function Menu() {
return (
<section className="menu">
<h3>Our Menu</h3>
<div className="menu-grid">
{menuItems.map((item, index) => (
<div key={index} className="menu-card">
<h4>{item.name}</h4>
<span>{item.price}</span>
</div>
))}
</div>
</section>
)
}