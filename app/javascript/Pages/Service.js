import React, {useEffect, useState} from "react";
import Header from "../Components/Header";
import GoBack from "../Components/GoBack";
import {useForm, useRemember} from "@inertiajs/inertia-react";
import {Inertia} from "@inertiajs/inertia";
import CategoryStepper from "../Components/CategoryStepper";
import Cart from "../Components/Cart";

export default function Service({ address, categories }) {
    const [services, setServices] = useRemember(services || {})
    const [shouldShow, setShouldShow] = useState(false);

    useEffect(() => {
        setShouldShow(Object.entries(services).some(([_, value]) => value > 0));
    }, [services])

    useEffect(() => {
        const h = { ...services };
        categories.forEach((category) => h[category.name] ||= 0)
        setServices(h);
    }, [])

    function onClick()  {
        const servicesToSend = {}
        const servicesArray = Object.entries(services);
        servicesArray.forEach(([key, value]) => {
            if (value > 0) {
                const category = categories.find((category) => category.name === key);
                servicesToSend[category.id] = value;
            }
        });
        Inertia.get("/bookings/magicians", {
            address,
            services: servicesToSend
        })
    }

    return (
        <div className="main">
            <Header/>
            <div style={{ width: '78rem', margin: 'auto'}}>
                <GoBack href="/bookings/address"/>
                <div className="flex flex-col justify-center items-center">
                    <h3>Envie de quoi ?</h3>
                    <div className="flex w-full justify-evenly items-start">
                        <div className="category--wrapper">
                            { categories.map((category) => (
                                <CategoryStepper category={category}
                                                 setService={(i) => setServices({ ...services, [category.name]: i })}
                                                 serviceCount={services[category.name]}
                                                 key={category.id}
                                />
                            ))}
                        </div>
                        <Cart services={services}
                              address={address}
                              shouldShow={shouldShow}
                        />
                    </div>
                    <button type="submit"
                            disabled={!shouldShow}
                            className="form--submit"
                            onClick={onClick}
                    >
                        <span>Choisir son magicien</span>
                    </button>
                </div>
            </div>
        </div>
    )
}
