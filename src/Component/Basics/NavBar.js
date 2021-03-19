import React, {useEffect, useState} from "react";
import '../../assets/home.css'
import {Link} from "react-router-dom";

const NavBar = () => {

    const [IsScrolling, setIsScrolling] = useState(false)

    useEffect(() => checkScroll(), []);

    const checkScroll = () => {
        window.addEventListener('scroll', () => {
            window.scrollY > 100 ? setIsScrolling(true) : setIsScrolling(false);
        })
    }

    const background = IsScrolling ? { backgroundColor: '#141414'} : {};

    return (
        <div className={"navbar"} style={background}>
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
        </div>
    );
}

export default NavBar;