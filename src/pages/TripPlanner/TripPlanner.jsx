import {useState, useEffect} from 'react'
import destinationsList from '../../data/destinations'
import './TripPlanner.css'

const TripPlanner = () => {
  const [selectedDestination, setSelectedDestination] = useState('')
  const [travelDate, setTravelDate] = useState('')

  const [plannedTrips, setPlannedTrips] = useState(() => {
    const savedTrips = localStorage.getItem('plannedTrips')

    return savedTrips ? JSON.parse(savedTrips) : []
  })

  useEffect(() => {
    localStorage.setItem(
      'plannedTrips',
      JSON.stringify(plannedTrips)
    )
  }, [plannedTrips])

  const onAddTrip = event => {
    event.preventDefault()

    if (selectedDestination === '' || travelDate === '') {
      return
    }

    const destination = destinationsList.find(
      eachDestination =>
        eachDestination.id === Number(selectedDestination)
    )

    const newTrip = {
      id: `${selectedDestination}-${travelDate}`,
      destination: destination,
      travelDate: travelDate,
    }

    setPlannedTrips([...plannedTrips, newTrip])

    setSelectedDestination('')
    setTravelDate('')
  }

  const onDeleteTrip = id => {
    const updatedTrips = plannedTrips.filter(
      eachTrip => eachTrip.id !== id
    )

    setPlannedTrips(updatedTrips)
  }

  return (
    <section className="planner-section">

      <div className="planner-heading">
        <p>YOUR NEXT ADVENTURE</p>
        <h1>My Trip Planner</h1>
        <span>Plan your journeys and organize your travel dates.</span>
      </div>

      <form className="planner-form" onSubmit={onAddTrip}>

        <h2>Create a New Trip</h2>

        <label htmlFor="destination">
          Choose Destination
        </label>

        <select
          id="destination"
          value={selectedDestination}
          onChange={event =>
            setSelectedDestination(event.target.value)
          }
          required
        >
          <option value="">Select a destination</option>

          {destinationsList.map(eachDestination => (
            <option
              key={eachDestination.id}
              value={eachDestination.id}
            >
              {eachDestination.name}, {eachDestination.country}
            </option>
          ))}
        </select>

        <label htmlFor="travelDate">
          Travel Date
        </label>

        <input
          id="travelDate"
          type="date"
          value={travelDate}
          onChange={event => setTravelDate(event.target.value)}
          required
        />

        <button type="submit" className="add-trip-button">
          Add to My Trips
        </button>

      </form>

      <div className="planned-trips">

        <h2>My Planned Trips</h2>

        {plannedTrips.length > 0 ? (
          <div className="trip-list">

            {plannedTrips.map(eachTrip => (
              <div className="trip-card" key={eachTrip.id}>

                <img
                  src={eachTrip.destination.imageUrl}
                  alt={eachTrip.destination.name}
                />

                <div className="trip-info">
                  <h3>{eachTrip.destination.name}</h3>

                  <p>{eachTrip.destination.country}</p>

                  <span>
                    Travel Date: {eachTrip.travelDate}
                  </span>
                </div>

                <button
                  className="delete-trip-button"
                  onClick={() => onDeleteTrip(eachTrip.id)}
                >
                  Remove
                </button>

              </div>
            ))}

          </div>
        ) : (
          <p className="empty-trips">
            You haven't planned any trips yet.
          </p>
        )}

      </div>

    </section>
  )
}

export default TripPlanner