'use client'

export default function ReserveTable() {
  return (
    <section className="reserve-section">
      <h2 className="reserve-title">Reserve a Table</h2>

      <form className="reserve-form">
        <input type="date" className="reserve-input" required />
        <input type="time" className="reserve-input" required />

      <select className="reserve-input" required>
  <option value="">Guests</option>
  {[...Array(10)].map((_, i) => (
    <option key={i} value={i + 1}>
      {i + 1}
    </option>
  ))}
</select>


        <button type="submit" className="reserve-button">
          Reserve Now
        </button>
      </form>
    </section>
  )
}
