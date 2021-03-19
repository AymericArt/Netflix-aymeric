import React, {useEffect, useState} from "react";
import '../../assets/home.css'

const Footer = () => {


    return (
        <div role="contentinfo" className="member-footer">
            <ul className="member-footer-links">
                <li className="member-footer-link-wrapper">
                    <a className="member-footer-link" href="/browse/subtitles">
                        <span className="member-footer-link-content">Audio et sous-titres</span>
                    </a>
                </li>
                <li className="member-footer-link-wrapper">
                    <a className="member-footer-link" href="/browse/audio-description">
                        <span className="member-footer-link-content">Audiodescription</span>
                    </a>
                </li>
                <li className="member-footer-link-wrapper"><a className="member-footer-link"
                                                              href="https://help.netflix.com/"><span
                    className="member-footer-link-content">Centre d'aide</span></a></li>
                <li className="member-footer-link-wrapper"><a className="member-footer-link" href="/redeem"><span
                    className="member-footer-link-content">Cartes cadeaux</span></a></li>
                <li className="member-footer-link-wrapper"><a className="member-footer-link"
                                                              href="https://media.netflix.com/"><span
                    className="member-footer-link-content">Presse</span></a></li>
                <li className="member-footer-link-wrapper"><a className="member-footer-link"
                                                              href="http://ir.netflix.com/"><span
                    className="member-footer-link-content">Relations Investisseurs</span></a></li>
                <li className="member-footer-link-wrapper"><a className="member-footer-link"
                                                              href="https://jobs.netflix.com/"><span
                    className="member-footer-link-content">Recrutement</span></a></li>
                <li className="member-footer-link-wrapper"><a className="member-footer-link"
                                                              href="https://help.netflix.com/legal/termsofuse"><span
                    className="member-footer-link-content">Conditions d'utilisation</span></a></li>
                <li className="member-footer-link-wrapper"><a className="member-footer-link"
                                                              href="https://help.netflix.com/legal/privacy"><span
                    className="member-footer-link-content">Confidentialité</span></a></li>
                <li className="member-footer-link-wrapper"><a className="member-footer-link"
                                                              href="https://help.netflix.com/legal/notices"><span
                    className="member-footer-link-content">Informations légales</span></a></li>
                <li className="member-footer-link-wrapper"><a className="member-footer-link" href="/Cookies"><span
                    className="member-footer-link-content">Préférences de cookies</span></a></li>
                <li className="member-footer-link-wrapper"><a className="member-footer-link"
                                                              href="https://help.netflix.com/legal/corpinfo"><span
                    className="member-footer-link-content">Mentions légales</span></a></li>
                <li className="member-footer-link-wrapper"><a className="member-footer-link"
                                                              href="https://help.netflix.com/contactus"><span
                    className="member-footer-link-content">Nous contacter</span></a></li>
            </ul>
            <div className="member-footer-service">
                <button className="service-code cc_pointer">Code de service</button>
            </div>
            <div className="member-footer-copyright cc_cursor">
                <span>© 1997-2021 Netflix, Inc.‎</span>
            </div>
        </div>
    );
}

export default Footer;