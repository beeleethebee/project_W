import React, {useState} from "react";

export default function Input({onChange, label, data, defaultPlaceholder, id}) {
    const [placeholder, setPlaceholder] = useState('');

    function onFocus() {
        setTimeout(() => setPlaceholder(defaultPlaceholder), 75)
    }

    function onBlur() {
        setPlaceholder("");
    }
    return (
        <div className="form">
            <input
                type="text"
                value={data}
                onFocus={onFocus}
                onBlur={onBlur}
                onChange={onChange}
                required
                id={id}
                className="form--input"
                placeholder={placeholder}
            />
            {
                data.trim().length === 0 &&
                <label className="form--label">{label}</label>
            }
        </div>
        )
}
