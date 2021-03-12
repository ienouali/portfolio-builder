import React from "react";
import "./style.scss";

export default function Input({w, mr, label, type, className, placeholder, name, ...props}) {

    return (
        <div style={{marginRight: `${mr !== undefined ? mr + 'px' : ''}`}}
             className={`${w !== undefined ? 'custom-with' : ''} form__group`}
        >
            {
                label &&
                <label
                    className="form__group--label">
                    {label}
                </label>
            }
            {
                type === "textarea"
                    ? <textarea name={name}  {...props} placeholder={placeholder} className='textarea form__group--control'/>
                    : <input {...props}
                             className={`${w !== undefined ? 'custom-with' : ''} form__group--control`}
                             type={type}
                             placeholder={placeholder}
                             name={name}
                    />
            }

        </div>
    );
}
