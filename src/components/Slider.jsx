    import React, { useEffect, useRef, useState } from 'react'
    import GlobalApi from '../Services/GlobalApi'
    const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original/"
    import { HiChevronRight, HiChevronLeft } from "react-icons/hi2";
    const screenWidth = window.innerWidth;

    function Slider() {

        const [movieList, setMovieList] = useState([])
        const elementRef = useRef();
        const [activeIndex, setActiveIndex] = useState(0);

        useEffect(() => {
            getTrendingMovies();
        }, [])

        const getTrendingMovies = () => {
            GlobalApi.getTrendingMovies.then(resp => {
                console.log(resp.data.results);
                setMovieList(resp.data.results);
            })
        }

        const handleScroll = () => {
            const element = elementRef.current;
            const newIndex = Math.round(element.scrollLeft / (screenWidth - 110));
            setActiveIndex(newIndex);
        }

        const sliderRight = (element) => {
            element.scrollLeft += screenWidth - 110
            handleScroll();
        }
        const sliderLeft = (element) => {
            element.scrollLeft -= screenWidth - 110
            handleScroll()
        }

    return (
        <div>

            <HiChevronLeft className='hidden text-[40px] mx-9 mt-32 absolute cursor-pointer md:block text-gray-400 font-bold'
            onClick={() => sliderLeft(elementRef.current)}/>
            <HiChevronRight className='hidden text-[40px] mx-8 mt-32 absolute cursor-pointer right-0 md:block text-gray-400 font-bold'
            onClick={() => sliderRight(elementRef.current)}/>

            <div className='flex overflow-x-auto w-full px-16 no-scrollbar scroll-smooth' ref={elementRef} onScroll={handleScroll} > 
            {movieList.map((item, index) => index<6&&(
                <img key={index} src={IMAGE_BASE_URL + item.backdrop_path} alt="" className='min-w-full md:h-[310px] object-cover object-left-top mr-6 rounded-md hover:border-[4px] hover:border-slate-600 transition-all duration-100 ease-in-out'/>
            ))}
            </div>

            <div className="flex justify-center mt-4">
                {movieList.slice(0, 6).map((_, index) => (
                    <div
                        key={index}
                        className={`h-2 w-2 rounded-full mx-1 transition-all duration-300 ${activeIndex === index ? 'bg-gray-800' : 'bg-gray-400'}`}
                    />
                ))}
            </div>

        </div>
    )
    }

    export default Slider
