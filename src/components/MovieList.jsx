import React, { useEffect, useState, useRef } from 'react'
import GlobalApi from '../Services/GlobalApi'
import PropTypes from 'prop-types'
import MovieCard from './MovieCard'
import { IoChevronBackOutline, IoChevronForwardOutline } from 'react-icons/io5';
import HrMovieCard from './HrMovieCard';
const screenWidth = window.innerWidth;



function MovieList({genreId, index_}) {

    const [movieList, setMovieList] = useState([])
    const elementRef = useRef(null);

    useEffect(() => {
        getMovieByGenreId();
    }, [genreId])

    const getMovieByGenreId  = () => {
        GlobalApi.getMovieGenreId(genreId).then(resp => 
            // console.log(resp)
            setMovieList(resp.data.results)
        )
    }

    const sliderRight = (element) => {
        element.scrollLeft += screenWidth - 110
    }
    const sliderLeft = (element) => {
        element.scrollLeft -= screenWidth - 110
    }

  return (
    <div className='relative'>

            <IoChevronBackOutline 
                className={`absolute text-[70px] cursor-pointer font-bold z-10 top-0 p-2 pl-6 text-gray-200 hidden md:block ${index_%2==0 ? 'mt-16' : 'mt-36'}`}
                onClick={() => sliderLeft(elementRef.current)} 
            />

         <div className='flex overflow-x-auto gap-4 md:gap-8 no-scrollbar p-5 scroll-smooth' ref={elementRef}>
            {movieList.map((item, index) => index<10&&(
                <>
                {index_%2==0 ? <HrMovieCard movie={item}/> : <MovieCard movie={item} key={index}/>}
                </>
            ))}

        </div>

        <IoChevronForwardOutline
        className={`absolute text-[70px] cursor-pointer font-bold z-10 top-0 p-2 pr-6 right-0 text-gray-200 hidden md:block ${index_%2==0 ? 'mt-16' : 'mt-36'}`}
        onClick={() => sliderRight(elementRef.current)}/>
        
    </div>
   
  )
}

MovieList.propTypes = {
    genreId: PropTypes.number.isRequired, // name harus berupa string dan wajib diisi
  }

export default MovieList
