import React from 'react'
import wecasaLogo from "../../assets/images/wecasa.svg";
import {Link} from "@inertiajs/inertia-react";

export default function Header() {
    return (
        <div className="header">
            <img src={wecasaLogo} alt="Logo wecasa" className="logo"/>
            <nav className="w-full">
                <ul className="flex justify-evenly w-full">
                    <a className="universe" href="https://www.wecasa.fr/coiffure-domicile">
                        Coiffure
                    </a>
                    <a className="universe" href="https://www.wecasa.fr/estheticienne-domicile">
                        Beauté
                    </a>
                    <Link className="universe" href="https://www.wecasa.fr/massage-domicile">
                        Massage
                    </Link>
                    <a className="universe" href="https://www.wecasa.fr/femme-menage-domicile">
                        Ménage
                    </a>
                    <a className="universe" href="https://www.wecasa.fr/coiffure-domicile">
                        Coiffure
                    </a>
                    <a className="universe" href="https://www.wecasa.fr/garde-enfant">
                        Garde d'enfants
                    </a>
                    <a className="universe" href="https://www.wecasa.fr/coach-sportif-domicile">
                        Coach sportif
                    </a>
                    <Link className="universe universe--selected rotated" href="/">
                        Magie
                    </Link>
                </ul>
            </nav>
        </div>
    );
}
