import React, {useState} from "react";
import Header from "../Components/Header";
import GoBack from "../Components/GoBack";
import {useForm} from "@inertiajs/inertia-react";
import {Inertia} from "@inertiajs/inertia";
import Input from "../Components/Input";


export default function Address({}) {
    const { data, setData, get, processing } = useForm({
        address: '',
    });


    function submit(e) {
        e.preventDefault();
        get('/bookings/service');
    }

    function onChange(e) {
        setData('address', e.target.value)
    }

    return (
        <div className="main">
            <Header/>
            <div style={{ width: '78rem', margin: 'auto'}}>
                <GoBack href="/"/>
                <div className="flex flex-col justify-center items-center">
                    <h2>Où aura lieu votre séance de magie ?</h2>
                    <p>
                        Notre mission : vous émerveiller
                        <span className="font-bold"> chez vous </span>,
                        partout en France.
                    </p>
                    <form onSubmit={submit} className="form">
                       <Input data={data.address}
                              defaultPlaceholder="7 allée le fauvin, 60870 Brenouille, France"
                              label="Votre adresse complète"
                              onChange={onChange}
                      />
                        <button type="submit"
                                disabled={processing || data.address.trim().length === 0}
                                className="form--submit"
                        >
                            <span>Suivant</span>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}
