import {useParams, Link} from 'react-router-dom'
import destinationsList from '../../data/destinations'
import './DestinationDetails.css'
import Weather from '../../components/Weather/Weather'

const DestinationDetails = props => {
  const {favouriteIds, onToggleFavourite} = props

  const {id} = useParams()

  const destination = destinationsList.find(
    eachDestination => eachDestination.id === Number(id)
  )

  if (destination === undefined) {
    return (
      <div className="not-found">
        <h2>Destination Not Found</h2>
        <Link to="/">Back to Home</Link>
      </div>
    )
  }

  const isFavourite = favouriteIds.includes(destination.id)

  const onClickFavourite = () => {
    onToggleFavourite(destination.id)
  }

  return (
    <div className="details-page">

      <img
        src={destination.imageUrl}
        alt={destination.name}
        className="details-image"
      />

      <div className="details-content">

        <p className="details-country">
          {destination.country}
        </p>

        <h1>{destination.name}</h1>

        <p>{destination.description}</p>
        <Weather
  latitude={destination.latitude}
  longitude={destination.longitude}
/>

        <button
          className="favourite-button"
          onClick={onClickFavourite}
        >
          {isFavourite ? 'Remove from Favourites' : 'Add to Favourites'}
        </button>

        <br />

        <Link to="/" className="back-button">
          Back to Home
        </Link>

      </div>

    </div>
  )
}

export default DestinationDetails