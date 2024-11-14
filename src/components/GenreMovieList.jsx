import React from 'react'
import GenreList from "./../Constant/GenreList"
import MovieList from './MovieList'

function GenreMovieList() {
  return (
    <div>
      {GenreList.genere.map((item, index) => index<4&&(
        <div key={index} className='px-6 md:p-6 md:px-16'>
            <h1 className='text-[20px] font-bold'>{item.name}</h1>
            <MovieList genreId = {item.id} index_={index}/>
        </div>
      ))}
    </div>
  )
}

export default GenreMovieList
