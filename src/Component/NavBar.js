import React, {useContext, useEffect } from "react";
import '../Assets/home.css'
import {Link} from "react-router-dom";

const NavBar = () => {
    return (
        <div className={"navbar"}>
            <div className={"navbar__netflix-list"}>
                <Link to="/">
                    <img src="Images/logo-netflix.png" className={"navbar__netflix-logo"} alt="netflix-logo"/>
                </Link>
                <ul className={"navbar__netflix-list__ancre"}>
                    <li><Link to="/">Acceuil</Link></li>
                    <li><Link to="/">Séries</Link></li>
                    <li><Link to="/">Films</Link></li>
                    <li><Link to="/">Nouveautés les plus regardées</Link></li>
                    <li><Link to="/">Ma liste</Link></li>
                </ul>
            </div>


            <div>
                Account image
            </div>
        </div>
    );
}

export default NavBar;