import React from 'react'
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original/"

function HrMovieCard({movie}) {
  return (
    <>
    <section className='hover:scale-110 transition-all duration-150 ease-in-out'>
       <img src={IMAGE_BASE_URL + movie.backdrop_path} alt="" className="w-[1100px] md:w-[260px] rounded-lg hover:border-[3px] hover:border-slate-600 hover:scale-110 object-cover transition-all duration-150 ease-in-out"/>
       <h1 className='w-[110px] md:w-[260px] pt-2 font-semibold'>{movie.title}</h1>
    </section>
    </>
  )
}

export default HrMovieCard
