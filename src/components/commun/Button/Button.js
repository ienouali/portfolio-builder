import React from "react";
import "./style.scss";

export default function Button({noMargin,ico,  className, type,  value}) {

    return (
        <button
            style={{marginTop : `${noMargin ? 0 : ''}`}}
            type={type}
            className={`${className} button`}
        >
            <i className={ico}/>{value}
        </button>
    );
}
