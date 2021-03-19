import React, { useEffect, useContext } from "react";
import BaseApiFetch from "../utils/BaseApiFetch";
import NetflixCarousel from "./NetflixCarousel";
import HeroZone from "./HeroZone";
import {FETCH_CATEGORIES, FETCH_HOMEPAGE} from '../actions/actionType'
import {GlobalStore} from "../GlobalStore";

const Home = (props) => {

    const [state, dispatch] = useContext(GlobalStore);

    useEffect(() => {
        fetchHomepage();
        fetchCategories();
    }, []);

    const fetchHomepage = () => {

        /**
         * The catch error function has been moved to the method BaseApiFetch
         */
        BaseApiFetch("/movie/512200")
            .then(res => dispatch({type: FETCH_HOMEPAGE, payload: res.data}))
        ;
    }

    const fetchCategories = () => {

        /**
         * The catch error function has been moved to the method BaseApiFetch
         */
        BaseApiFetch("genre/movie/list")
            .then(res =>  dispatch({type: FETCH_CATEGORIES, payload: res.data}))
        ;
    }

    const categories = (state && state.categories) ? state.categories.genres.map( (item, index) => {
        return <NetflixCarousel props={item} key={index} />
    }) : 'Loading ...';


    return (
        <div className={"container"}>
            <HeroZone />
            <div className={"home__container"}>{categories}</div>
        </div>
    );
}


export default Home;