import React, {useContext, useEffect} from "react";
import {GlobalStore} from "../GlobalStore";

const HeroZone = () => {

    const [state, dispatch] = useContext(GlobalStore);

    const hero = (state && state.homepageImage) ?
        <div style={{ height: '100%'}}>
            {state.homepageImage.name}
            <div className={"herozone__movie__spec"}>
                <h1>{state.homepageImage.original_title}</h1>
                <p>{state.homepageImage.overview}</p>
                <h1>{console.log(state.homepageImage)}</h1>
            </div>
            <img className={"herozone__image"} src={"https://image.tmdb.org/t/p/w1280/" + state.homepageImage.backdrop_path}/>
        </div> : 'toto'
    return (
        <div className={"herozone"}>
            {hero}
        </div>
    );
}

export default HeroZone