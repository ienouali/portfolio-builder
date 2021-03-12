import React from "react";
import Input from "../commun/Input/Input";

export default function ({title, state, setState, handleChange}) {
    return (
        <>
            <div className='bloc--action'>
                <h3>{title}</h3>
                <i onClick={() => setState(!state)}
                   className={`${state ? 'far fa-eye-slash' : 'far fa-eye'} icon-add`}/>
            </div>
            <hr/>
            <div style={{display: `${state ? 'flex' : 'none'}`}} className='contact_bloc'>
                <div className='contact_bloc--one'>
                    <Input onChange={(e) => handleChange(e)}
                           mr='15'
                           type='text'
                           placeholder='address'
                           name='address'
                    />
                    <Input onChange={(e) => handleChange(e)}
                           mr='15'
                           type='email'
                           placeholder='email'
                           name='email'
                    />
                </div>
                <div className='contact_bloc--two'>
                    <Input onChange={(e) => handleChange(e)}
                           type='tel'
                           placeholder='phone'
                           name='phone'
                    />
                    <Input onChange={(e) => handleChange(e)}
                           type='text'
                           placeholder='Linkedin url'
                           name='linkedin'
                    />
                </div>
            </div>
        </>
    )
}
