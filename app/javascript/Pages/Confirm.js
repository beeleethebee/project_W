import React, {useEffect, useState} from "react";
import Header from "../Components/Header";
import GoBack from "../Components/GoBack";
import Cart from "../Components/Cart";
import {useForm} from "@inertiajs/inertia-react";
import Input from "../Components/Input";

export default function Confirm({ address, magician, services, services_params }) {
    const [formatedServices, setFormatedServices] = useState({});

    useEffect(() => {
        let newFormatedServices = {};
        services.forEach((service) => {
            newFormatedServices = { ...newFormatedServices, [service.name]: service.quantity };
        });
        setFormatedServices(newFormatedServices);
    }, services)

    const { data, setData, post, processing, errors } = useForm({
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        address,
        magician_id: magician.id,
        categories: services.map((service) => [service.id, service.quantity])
    })

    function onChange(e) {
        const { id, value } = e.target;
        setData(values => ({
            ...values,
            [id]: value,
        }))
    }

    function onSubmit(e)  {
        e.preventDefault();
        post('/bookings')
    }

    return (
        <div className="main">
            <Header/>
            <div style={{ width: '78rem', margin: 'auto'}}>
                <GoBack href="/bookings/magicians" data={{address, services: services_params}}/>
                <div className="flex flex-col justify-center items-center mt-5">
                    <h3>Nouveau sur Wecasa ? Faisons connaissance</h3>
                    <form onSubmit={onSubmit}>
                        <div className="flex w-full justify-evenly items-start">
                            <div className="flex flex-col mr-16">
                                <Input data={data.first_name}
                                       id="first_name"
                                       onChange={onChange}
                                       defaultPlaceholder="Hugo"
                                       label="Prénom"
                                />
                                {errors.first_name && <div>{errors.first_name}</div>}

                                <Input data={data.last_name}
                                       id="last_name"
                                       onChange={onChange}
                                       defaultPlaceholder="Vast"
                                       label="Nom"/>
                                {errors.last_name && <div>{errors.last_name}</div>}

                                <Input data={data.email}
                                       id="email"
                                       onChange={onChange}
                                       defaultPlaceholder="hugo.vast@gmail.com"
                                       label="Email"/>
                                {errors.email && <div>{errors.email}</div>}

                                <Input data={data.password}
                                       id="password"
                                       onChange={onChange}
                                       defaultPlaceholder="VotreManqueDeFoiMeConsterne"
                                       label="Mot de passe"/>
                                {errors.password && <div>{errors.password}</div>}
                                <button type="submit"
                                        className="form--submit"
                                        disabled={processing}
                                >
                                    <span>Prendre rendez-vous</span>
                                </button>
                            </div>
                            <Cart services={formatedServices}
                                  address={address}
                                  shouldShow={true}
                                  magician={magician}
                            />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
