import React from "react";
import Input from "../commun/Input/Input";
import "./style.scss";

export default function  BlocSkills({handleChange, title, state, setState, data,  skills:{selectedSkills, setSelectedSkills}}) {
    return (
        <>
            <div className='bloc--action'>
                <h3>{title}</h3>
                <i onClick={() => setState(!state)}
                   className={`${state ? 'far fa-eye-slash' : 'far fa-eye'} icon-add`}/>
            </div>
            <hr/>
            <div style={{display: `${state ? 'flex' : 'none'}`}} className='skills'>
                <div className='skills__items'>
                    {
                        data.skills && data.skills.map((s,i) =>
                            <span key={i}
                                  onClick={(e) => {
                                      e.target?.classList.contains('selected')
                                          ? setSelectedSkills(selectedSkills.filter(item => item !== s.skills))
                                          :  setSelectedSkills([...selectedSkills, s.skills]);
                                      e.target?.classList.toggle('selected');
                                  }}
                            >
                                    &nbsp;{s.skills}&nbsp;
                                </span>
                        )
                    }
                </div>
                <Input onChange={(e) => handleChange(e)}
                       type='textarea'
                       placeholder='select skills here'
                       name='selectedSkills'
                       value={[...selectedSkills]}
                       disabled={true}
                />
            </div>
        </>
    );
}
