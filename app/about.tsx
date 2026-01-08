import Image from 'next/image'

export default function AboutUs() {
  return (
    <section className="about-us">
      <div className="about-text">
        <h3>Our Story </h3>
        <p>
          At Amore, we've been crafting authentic Italian cuisine for over 10 years.
          Using fresh, locally sourced ingredients, every dish is made with love and tradition.
        </p>
      </div>

      <div className="about-images">
        <Image
          src="/images/Pizza.webp"
          alt="Tasty Pizza"
          width={300}
          height={200}
          className="food-image"
        />
        <Image
          src="/images/tiramisu.webp"
          alt="Dessert"
          width={300}
          height={200}
          className="food-image"
        />
        <Image
          src="/images/lasagne.webp"
          alt="Lasagne"
          width={300}
          height={200}
          className="food-image"
        />
        <Image
          src="/images/volcanoessteak.jpg"
          alt="steak"
          width={300}
          height={200}
          className="food-image"
        /><Image
          src="/images/seafood.webp"
          alt="Lasagne"
          width={300}
          height={200}
          className="food-image"
        /><Image
          src="/images/drinks.jpg"
          alt="Drinks"
          width={300}
          height={200}
          className="food-image"
        />
      </div>
    </section>
  )
}
