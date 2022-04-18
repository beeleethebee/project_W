import React, {useEffect, useState} from "react";
import {Link} from "@inertiajs/inertia-react";
import goBackIcon from "../../assets/images/goback.svg";

const HREF_TO_LABEL = {
    '/': 'ACCUEIL',
    '/bookings/address': 'ADRESSE',
    '/bookings/service': 'SERVICE',
    '/bookings/magicians': 'MAGICIEN',
};

export default function GoBack({href, data}) {
    const [label, setLabel] = useState('RETOUR');

    useEffect(() => {
        setLabel(HREF_TO_LABEL[href])
    })

    return(
        <Link href={href} className="go-back" data={data}>
            <img src={goBackIcon} alt="Petite flèche indiquant la gauche" className="go-back--icon"/>
            <p className="go-back--label">{label}</p>
        </Link>
    )
}
