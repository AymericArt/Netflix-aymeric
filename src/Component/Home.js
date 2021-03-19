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
        BaseApiFetch("/movie/57201")
            .then(res => dispatch({type: FETCH_HOMEPAGE, payload: res.data}) )
        ;
    }

    const fetchCategories = () => {
        BaseApiFetch("genre/movie/list")
            .then(res =>  dispatch({type: FETCH_CATEGORIES, payload: res.data}))
        ;
    }

    const categories = (state && state.categories) ? state.categories.genres.map( (item, index) => {
        return <NetflixCarousel props={item} key={index} />
    }) : 'null';


    return (
        <div className={"container"}>
            <HeroZone />
            <div className={"home__container"}>
                {categories}
            </div>
        </div>
    );
}


export default Home;