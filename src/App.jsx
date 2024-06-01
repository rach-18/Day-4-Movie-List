import { useState } from 'react'
import './App.css'
import Cards from './components/Cards'
import movieList from './data/movieList'

function App() {
  return(
    <div>
      <div className='my-10 flex flex-col gap-12'>
        {
          movieList.map((movie) => {
            return <Cards movies={movie} />
          })
        }
      </div>
    </div>
  )
}

export default App
