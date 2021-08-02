import React, { useState, useEffect } from 'react'
import ToursCards from "./ToursCards"

const url = 'https://course-api.com/react-tours-project'

const Cards = () => {
  const [tourPack, setTourPack] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const fetchTours = async () => {
    setIsLoading(true)
    try {
      const response = await fetch(url);
      const tours = await response.json();
      setIsLoading(false);
      setTourPack(tours);
    } catch (error) {
      setIsLoading(false);
      setIsError(true);
      console.log(error);
    }
  }

  useEffect(() => {
    fetchTours()
  }, [])

  const removeItem = (id) => {
    const newPack = tourPack.filter((tour) => tour.id !== id)
    setTourPack(newPack)
  }


  if (isLoading) {
    return (
    <div className="container">
      <h1 className="loading">Loading...</h1>
    </div>
    )
  }

  if (isError) {
    return(
      <main>
        <div className='container'>
          <h1 className="no_tour_head">Error Fetching API</h1>
          <button className='btn_refresh' onClick={() => fetchTours()}>
            Refresh
          </button>
        </div>
      </main>
    )
  }

  if (tourPack.length === 0) {
    return (
      <main>
        <div className='container'>
          <h1 className="no_tour_head">No Tours Left</h1>
          <button className='btn_refresh' onClick={() => fetchTours()}>
            Refresh
          </button>
        </div>
      </main>
    )
  }

  return (
    <>
        <div className="container">
        <h1 className="tour_head">Our Tours</h1>
      {tourPack.map(packs => (
        <ToursCards key={packs.id} packs={packs} removeItem={removeItem} />
        ))}
        </div>
    </>
  )
}

export default Cards
