
import DestinationCard from '../DestinationCard/DestinationCard'
import destinationsList from '../../data/destinations'
import './PopularDestinations.css'

const PopularDestinations = props => {
  const {searchText} = props

  const filteredDestinations = destinationsList.filter(eachDestination =>
    eachDestination.name.toLowerCase().includes(searchText.toLowerCase()) ||
    eachDestination.country.toLowerCase().includes(searchText.toLowerCase())
  )

  return (
    <section className="popular-section">
      <div className="section-heading">
        <p>EXPLORE THE WORLD</p>
        <h2>Popular Destinations</h2>
        <span>
          Discover some of the most beautiful places around the world.
        </span>
      </div>

      <div className="destinations-container">
        {filteredDestinations.length > 0 ? (
          filteredDestinations.map(eachDestination => (
            <DestinationCard
              key={eachDestination.id}
              destination={eachDestination}
            />
          ))
        ) : (
          <p className="no-results">
            No destinations found. Try another search!
          </p>
        )}
      </div>
    </section>
  )
}

export default PopularDestinations
