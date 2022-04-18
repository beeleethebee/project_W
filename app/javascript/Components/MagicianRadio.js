import React, {useRef} from "react";

export default function MagicianRadio({ magician, setMagicianId }) {
    const {first_name, last_name, id, address} = magician;

    const radio = useRef();

    function onClick() {
        radio.current.checked = true;
        setMagicianId(id);
    }

    return(
        <div className="magician-radio" onClick={onClick}>
            <div className="magician-radio--title">
                <input type="radio" value={id} name="magician_id" ref={radio}/>
                <p>{first_name} {last_name}</p>
            </div>
            <p className="magician-radio--subtitle">{address}</p>
        </div>
    );
}
