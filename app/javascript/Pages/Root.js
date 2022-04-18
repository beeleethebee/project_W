import React from 'react'
import Header from "../Components/Header";
import magieBg from "../../assets/images/magibg.png"
import MagicAnnouncement from "../Components/MagicAnnouncement";

export default function Welcome({notice}) {
    return (
        <div className="main">
            <Header/>
            {
                notice && <p className="notice">{notice}</p>
            }
            <div className="cta-container">
                <div className="cta-container--text">
                    <h2 className="text-4xl">Magicien à domicile</h2>
                    <p className="text-2xl">
                        Les meilleurs magiciens près de
                        <span className="rotated">chez vous</span>
                    </p>
                </div>
                <img src={magieBg} alt="Illustration de la magie"/>
            </div>
            <MagicAnnouncement/>
        </div>

    )
}
