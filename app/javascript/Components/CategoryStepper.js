import React from "react";
import minusSvg from "../../assets/images/minus.svg";
import plusSvg from "../../assets/images/plus.svg";

export default function CategoryStepper({ category, setService, serviceCount}) {
    const { name } = category;

    function increment() {
        if (serviceCount < 5) {
            setService(serviceCount + 1);
        }
    }

    function decrement() {
        if (serviceCount > 0) {
            setService(serviceCount - 1);
        }
    }

    return (
        <div className="category" >
            <p>{name}</p>
            <div className="category--stepper">
                { serviceCount > 0 && (
                    <>
                        <button onClick={decrement} className="category--stepper-button category--stepper-button__white">
                            <img src={minusSvg} alt="+" />
                        </button>
                        { serviceCount }
                        <button className="category--stepper-button" onClick={increment}>
                            <img src={plusSvg} alt="-"/>
                        </button>
                    </>
                ) || (<button className="category--stepper-button" onClick={increment}><img src={plusSvg}/> </button>)}
            </div>

        </div>
    )
}
