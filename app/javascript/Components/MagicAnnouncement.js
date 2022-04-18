import React from "react";
import {Link} from "@inertiajs/inertia-react";
import phoneIcon from "../../assets/images/phone_icon.png"
import heroIcon from "../../assets/images/hero_icon.png"
import workerIcon from "../../assets/images/prestataire_icon.png"

export default function MagicAnnouncement ({}) {
    return(
        <div className="magic-announcement">
            <h3 className="magic-announcement--title">La magie arrive chez vous grâce à Wecasa</h3>
            <div className="magic-announcement--container">
                <div className={"magic-announcement--box"}>
                    <img src={phoneIcon} className="magic-announcement--icon" alt="Potit téléphone"/>
                    <p className="magic-announcement--subtitle">1. Faites votre programme</p>
                    <p className="magic-announcement--body">Choissisez vos services, donnez vos disponibilités. C'est aujourd'hui ? Aucun souci !</p>
                </div>
                <div className={"magic-announcement--box"}>
                    <img src={heroIcon} className="magic-announcement--icon" alt="Le héro magicien"/>
                    <p className="magic-announcement--subtitle">2. Choisissez votre magicien idéal</p>
                    <p className="magic-announcement--body">Ou laissez Wecasa choisir le meilleur pro pour vous, c'est comme vous voulez</p>
                </div>
                <div className={"magic-announcement--box"}>
                    <img src={workerIcon} className="magic-announcement--icon" alt="Le prestataire qui débarque en Y"/>
                    <p className="magic-announcement--subtitle">3. Il arrive avec tout son matériel</p>
                    <p className="magic-announcement--body">Profitez de ce moment pour vous, chez vous.</p>
                </div>
            </div>
            <Link href="/bookings/address" className="form--submit form--submit__link"><span>Choisir mon magicien</span></Link>
        </div>
    );
}
