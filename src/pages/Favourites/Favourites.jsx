import destinationsList from '../../data/destinations'
import DestinationCard from '../../components/DestinationCard/DestinationCard'
import './Favourites.css'

const Favourites = props => {
  const {favouriteIds} = props

  const favouriteDestinations = destinationsList.filter(
    eachDestination => favouriteIds.includes(eachDestination.id)
  )

  return (
    <section className="favourites-section">
      <div className="section-heading">
        <p>YOUR COLLECTION</p>
        <h2>My Favourite Destinations</h2>
        <span>Your saved travel destinations.</span>
      </div>

      {favouriteDestinations.length > 0 ? (
        <div className="destinations-container">
          {favouriteDestinations.map(eachDestination => (
            <DestinationCard
              key={eachDestination.id}
              destination={eachDestination}
            />
          ))}
        </div>
      ) : (
        <p className="empty-favourites">
          You haven't saved any destinations yet.
        </p>
      )}
    </section>
  )
}

export default Favourites