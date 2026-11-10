import './Hero.css'

const Hero = props => {
  const {searchText, onSearchChange} = props

  const onSubmitSearch = event => {
    event.preventDefault()
  }

  return (
    <section className="hero-section">
      <div className="hero-content">

        <p className="hero-subtitle">
          YOUR JOURNEY STARTS HERE
        </p>

        <h1>
          Discover the World,
          <br />
          One Journey at a Time
        </h1>

        <p className="hero-description">
          Explore beautiful destinations, discover amazing
          places, and plan your perfect trip with ExploreEase.
        </p>

        <form
          className="search-container"
          onSubmit={onSubmitSearch}
        >
          <input
            type="text"
            placeholder="Where do you want to go?"
            value={searchText}
            onChange={onSearchChange}
          />

          <button
            type="submit"
            className="explore-button"
          >
            Explore Now
          </button>
        </form>

      </div>
    </section>
  )
}

export default Hero