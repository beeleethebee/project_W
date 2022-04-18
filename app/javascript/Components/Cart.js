import React, {useEffect, useState} from "react";
import pinIcon from "../../assets/images/pin.svg"
import cartIcon from "../../assets/images/cart.svg"
import peopleIcon from "../../assets/images/people.svg"

export default function Cart({services, address, shouldShow, magician}) {

    function serviceToComponent(service, count) {
        if (count == 0) {
            return null;
        }

        if (count == 1) {
            return <p className="cart--content">{service}</p>
        }

        return <p className="cart--content">{service} ({count})</p>
    }

    if (!shouldShow) {
        return (
            <div className="cart">
                <p>Rien dans le panier</p>
            </div>
        );
    }

    return (
        <div className="cart">
            <p className="cart--title">Mon panier</p>
            { services && (
                <div className="cart--section">
                    <div className="go-back">
                        <img src={cartIcon} width={30} alt="Potit panier"/>
                        <p className="ml-5">Vos services</p>
                    </div>
                    {
                        Object.entries(services).map(([key, value]) => serviceToComponent(key, value))
                    }
                </div>
            )}
            { address && (
                <div className="cart--section">
                    <div className="go-back">
                        <img src={pinIcon} width={30} alt="localisation"/>
                        <p className="ml-5">{address}</p>
                    </div>
                </div>
            )}
            { magician && (
                <div className="cart--section">
                    <div className="go-back">
                        <img src={peopleIcon} width={30} alt="localisation"/>
                        <p className="ml-5">Avec {magician.first_name} {magician.last_name}</p>
                    </div>
                </div>
            )}
        </div>
    )
}
