import Image from 'next/image'

export default function Hero() {
  return (
    <section className="hero-banner">
      <Image
        src="https://images.squarespace-cdn.com/content/v1/681c0d31ec9eb41ea1079361/e60f407f-7e60-4729-8a88-f2baa0416910/Machiavelli_May25_Credit_Jorge_Santos-007.jpg"
        alt="Restaurant Banner"
        width={1200}  // adjust width
        height={700}  // adjust height
        className="hero-image"
        priority
      />
      <div className="hero-text">
        <p>Authentic Italian Cuisine</p>
      </div>
      
    </section>
  )
}
