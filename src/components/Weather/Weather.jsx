
import {useState, useEffect} from 'react'
import './Weather.css'

const getWeatherDescription = code => {
  if (code === 0) {
    return 'Clear Sky'
  } else if (code <= 3) {
    return 'Partly Cloudy'
  } else if (code <= 48) {
    return 'Foggy'
  } else if (code <= 67) {
    return 'Rainy'
  } else if (code <= 77) {
    return 'Snowy'
  } else if (code <= 82) {
    return 'Rain Showers'
  } else if (code <= 86) {
    return 'Snow Showers'
  } else {
    return 'Thunderstorm'
  }
}

const Weather = props => {
  const {latitude, longitude} = props

  const [weatherData, setWeatherData] = useState(null)
  const [forecastData, setForecastData] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const getWeatherData = async () => {
      try {
        setIsLoading(true)
        setError('')

        const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,wind_speed_10m&daily=temperature_2m_max,temperature_2m_min,weather_code&timezone=auto&forecast_days=5`

        const response = await fetch(url)

        if (!response.ok) {
          throw new Error('Unable to fetch weather information')
        }

        const data = await response.json()

        setWeatherData(data.current)
        setForecastData(data.daily)
      } catch (error) {
        setError(error.message)
      } finally {
        setIsLoading(false)
      }
    }

    getWeatherData()
  }, [latitude, longitude])

  if (isLoading) {
    return <p className="weather-message">Loading weather...</p>
  }

  if (error) {
    return <p className="weather-error">{error}</p>
  }

  if (weatherData === null || forecastData === null) {
    return <p className="weather-error">Weather data unavailable.</p>
  }

  return (
    <div className="weather-container">

      <h2>Current Weather</h2>

      <div className="weather-details">

        <div className="weather-item">
          <h3>{weatherData.temperature_2m}°C</h3>
          <p>Temperature</p>
        </div>

        <div className="weather-item">
          <h3>{weatherData.relative_humidity_2m}%</h3>
          <p>Humidity</p>
        </div>

        <div className="weather-item">
          <h3>{weatherData.wind_speed_10m} km/h</h3>
          <p>Wind Speed</p>
        </div>

      </div>

      <h2 className="forecast-heading">5-Day Weather Forecast</h2>

      <div className="forecast-container">

        {forecastData.time.map((date, index) => (
          <div className="forecast-card" key={date}>

            <h3>{new Date(date + 'T12:00:00').toLocaleDateString(
              'en-US',
              {weekday: 'short'}
            )}</h3>

            <p className="forecast-condition">
              {getWeatherDescription(forecastData.weather_code[index])}
            </p>

            <p className="forecast-temperature">
              {forecastData.temperature_2m_max[index]}°C
            </p>

            <p>
              Min: {forecastData.temperature_2m_min[index]}°C
            </p>

          </div>
        ))}

      </div>

      <p className="weather-note">
        Weather information provided by Open-Meteo.
      </p>

    </div>
  )
}

export default Weather
