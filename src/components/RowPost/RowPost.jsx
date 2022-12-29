import React, { useState, useEffect } from 'react'
import YouTube from 'react-youtube';
import './RowPost.css'
import axios from '../../axios'
import { API_KEY, imageUrl, apiBaseUrl } from '../../constants/constants'


function RowPost(props) {

    //react Youtube

    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 1,
        },
    };

    //useState for storing the data 

    const [movies, setMovies] = useState([])
    const [urlId, seturlId] = useState('')

    //useEffect for geting the movie details

    useEffect(() => {
        axios.get(props.url)
            .then((response) => {
                setMovies(response.data.results)
            })
            .catch(err => alert('oops something went wrong!'))
    }, [])

    //Trailerclip Handler

    const handleMovieTrailer = (id) => {
        axios.get(`${apiBaseUrl}/movie/${id}/videos?api_key=${API_KEY}`).then(response => {
            if (!response.data.results.length == 0) {
                seturlId(response.data.results[0])
            }
        }).catch(err => console.log(err))
    }

    return (
        <div className='rowBanner'>
            <h2 className='text-white'>{props.title}</h2>
            <div className="posters">
                {movies.map(obj =>
                    <div className='container'>
                        <img key={obj.id} onClick={() => handleMovieTrailer(obj.id)} className={props.isSmall ? 'posterImgSmall' : 'posterImg'} src={`${obj ? imageUrl + obj.backdrop_path : ''}`} alt="" />
                    </div>

                )}
            </div>
            {urlId && <YouTube videoId={urlId.key} opts={opts} />}
        </div>
    )
}

export default RowPost
