        import axios from "axios";

        const movieBaseUrl = "https://api.themoviedb.org/3/"
        const api_key = "1af6efeedbf71890762f79ad52c1019c"      

        const movieByGenreBaseURL='https://api.themoviedb.org/3/discover/movie?api_key=' + api_key;

        const getTrendingMovies = axios.get(movieBaseUrl+"trending/all/day?api_key="+api_key)

        const getMovieGenreId = (id) => 
                axios.get(movieByGenreBaseURL+"&with_genres="+id)
        

        export default {
                getTrendingMovies,
                getMovieGenreId
        }

