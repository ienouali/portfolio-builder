import React from "react";
import Input from "../commun/Input/Input";
import "./style.scss";

export default function BlocLang({title, handleChange, state, setState, }) {

    return (
        <>
            <div className='bloc--action'>
                <h3>{title}</h3>
                <i onClick={() => setState(!state)}
                   className={`${state ? 'far fa-eye-slash' : 'far fa-eye'} icon-add`}/>
            </div>
            <hr/>
            <div style={{display: `${state ? 'flex' : 'none'}`}} className='languages'>
                <Input onChange={(e) => handleChange(e)}
                       mr='15' type='text'
                       placeholder='language 1'
                       name='language1'
                />
                <Input onChange={(e) => handleChange(e)}
                       mr='15'
                       type='text'
                       placeholder='language 2'
                       name='language2'
                />
                <Input onChange={(e) => handleChange(e)}
                       mr='15'
                       type='text'
                       placeholder='language 3'
                       name='language3'
                />
            </div>
        </>
    );

}
