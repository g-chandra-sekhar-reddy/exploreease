import {useState, useEffect} from 'react'
import TripPlanner from './pages/TripPlanner/TripPlanner'
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom'

import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import PopularDestinations from './components/PopularDestinations/PopularDestinations'

import DestinationDetails from './pages/DestinationDetails/DestinationDetails'
import Favourites from './pages/Favourites/Favourites'

function App() {
  const [searchText, setSearchText] = useState('')

  const [favouriteIds, setFavouriteIds] = useState(() => {
    const savedFavourites = localStorage.getItem('favouriteIds')

    return savedFavourites ? JSON.parse(savedFavourites) : []
  })

  useEffect(() => {
    localStorage.setItem(
      'favouriteIds',
      JSON.stringify(favouriteIds)
    )
  }, [favouriteIds])

  const onSearchChange = event => {
    setSearchText(event.target.value)
  }

  const onToggleFavourite = id => {
    if (favouriteIds.includes(id)) {
      const updatedFavourites = favouriteIds.filter(
        eachId => eachId !== id
      )

      setFavouriteIds(updatedFavourites)
    } else {
      setFavouriteIds([...favouriteIds, id])
    }
  }

  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero
                searchText={searchText}
                onSearchChange={onSearchChange}
              />

              <PopularDestinations
                searchText={searchText}
              />
            </>
          }
        />

        <Route
          path="/destination/:id"
          element={
            <DestinationDetails
              favouriteIds={favouriteIds}
              onToggleFavourite={onToggleFavourite}
            />
          }
        />

        <Route
          path="/favourites"
          element={
            <Favourites favouriteIds={favouriteIds} />
          }
        />

        <Route
  path="/planner"
  element={<TripPlanner />}
/>
      </Routes>
    </BrowserRouter>
  )
}

export default App