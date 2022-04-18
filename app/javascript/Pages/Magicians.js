import React, {useEffect, useState} from "react";
import Header from "../Components/Header";
import GoBack from "../Components/GoBack";
import Cart from "../Components/Cart";
import MagicianRadio from "../Components/MagicianRadio";
import {Inertia} from "@inertiajs/inertia";

export default function Magicians({ address, magicians, magicians_counts, services, services_params }) {
    const [formatedServices, setFormatedServices] = useState({});
    const [magicianId, setMagicianId] = useState(0);

    useEffect(() => {
        let newFormatedServices = {};
        services.forEach((service) => {
            newFormatedServices = { ...newFormatedServices, [service.name]: service.quantity };
        });
        setFormatedServices(newFormatedServices);
    }, services)

    function onClick()  {
        Inertia.get('/bookings/confirm', {
            address,
            magician_id: magicianId,
            services,
            services_params
        })
    }

    return (
        <div className="main">
            <Header/>
            <div style={{ width: '78rem', margin: 'auto'}}>
                <GoBack href="/bookings/service" data={{address, services}}/>
                <div className="flex flex-col justify-center items-center">
                    <h3>{magicians_counts} magiciens près de chez vous</h3>
                    <div className="flex w-full justify-evenly items-start">
                        <div>
                            <p>Choissiez votre magicien parmis une séléction :</p>
                            <div>
                                { magicians.map((magician) => <MagicianRadio magician={magician} setMagicianId={setMagicianId}/> )}
                            </div>
                        </div>
                        <Cart services={formatedServices}
                              address={address}
                              shouldShow={true}
                              magician={magicians.find((magician) => magician.id === magicianId)}
                        />
                    </div>
                    <button type="submit"
                            className="form--submit"
                            disabled={magicianId === 0}
                            onClick={onClick}
                    >
                        <span>Confirmer</span>
                    </button>
                </div>
            </div>
        </div>
    )
}
