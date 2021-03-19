import React, {useContext} from "react";
import {GlobalStore} from "../../GlobalStore";
import {GrPlayFill} from 'react-icons/gr';
import {AiOutlineInfoCircle} from 'react-icons/ai';

const HeroZone = () => {

    const [state, dispatch] = useContext(GlobalStore);

    const heroZoneContent = (state && state.homepageImage) ?
        <div style={{ height: '100%'}}>
            <div className={"herozone__movie__spec"}>
                <h1>{state.homepageImage.original_title}</h1>
                <p>{state.homepageImage.overview}</p>

                <section className={"herozone__btn"}>
                    <button className={"herozone__btn-lecture"}>
                        <GrPlayFill />
                        <span>Lecture</span>
                    </button>
                    <button className={"herozone__btn-infos"}>
                        <AiOutlineInfoCircle />
                        <span>Plus d'infos</span>
                    </button>
                </section>

            </div>
            <img className={"herozone__image"} alt={state.homepageImage.title} src={"https://image.tmdb.org/t/p/original" + state.homepageImage.backdrop_path}/>
            <div className={"herozone__image__gradiant"}/>
        </div> : "searching ...";

    return (
        <div className={"herozone"}>
            {heroZoneContent}
        </div>
    );
}

export default HeroZone