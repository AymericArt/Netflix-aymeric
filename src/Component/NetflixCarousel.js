import React, { useState, useEffect } from "react";
import BaseApiFetch from "../utils/BaseApiFetch";
import 'pure-react-carousel/dist/react-carousel.es.css';
import Slider from "react-slick";

const NetflixCarousel = (props) => {

    const [MovieList, setMovieList]   = useState([]);

    useEffect(() => {
        fetchMovies();
    }, [])

    const fetchMovies = () => {
        BaseApiFetch("discover/movie?with_genres=" + props.props.id)
            .then(res => setMovieList(res.data.results))
        ;
    }

    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        lazyLoad: true,
        centerPadding: "60px",
        slidesToShow: 3,
        speed: 500
    };

    return (
        <div>
            <h2>{props.props.name}</h2>

                <Slider {...settings}>
                    {MovieList.map((item, index) => {
                        return (
                            <div key={index} className={"netflix__carousel"}>
                                <img src={"https://image.tmdb.org/t/p/w500/" + item.backdrop_path}/>
                            </div>
                        )
                    })}
                </Slider>

        </div>
    );
}

export default NetflixCarousel;