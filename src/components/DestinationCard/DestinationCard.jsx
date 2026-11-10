import {Link} from 'react-router-dom'
import './DestinationCard.css'

const DestinationCard = props => {
  const {destination} = props

  return (
    <div className="destination-card">
      <img
        src={destination.imageUrl}
        alt={destination.name}
        className="destination-image"
      />

      <div className="destination-info">
        <h3>{destination.name}</h3>

        <p className="destination-country">
          {destination.country}
        </p>

        <p>{destination.description}</p>

        <Link
  to={`/destination/${destination.id}`}
  className="destination-button"
>
  Explore Destination
</Link>
      </div>
    </div>
  )
}

export default DestinationCard