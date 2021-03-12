import React, {useContext} from "react";
import Input from "../commun/Input/Input";
import Button from "../commun/Button/Button";
import {PortfolioContext} from "../../hooks/context/portfolioContext";
import "./style.scss";


export default function BlocData({ type, idBloc}) {
    const {
        handleFunctions : {
            handleChange,
            handleSubmitEducations,
            handleSubmitExp,
            removeBlocData
        }
    } = useContext(PortfolioContext);

    return (
        <form onSubmit={type === 'school' ? handleSubmitEducations : handleSubmitExp} className='bloc__data'>

            <div className='bloc__data--dates'>

                <Input onChange={(e) => handleChange(e)}
                       mr='15'
                       label='Start Date'
                       type='date'
                       name={`${type === "professional" ? 'startExp' : 'start'}`}/>
                <Input onChange={(e) => handleChange(e)}
                       label='End Date'
                       type='date'
                       name={`${type === "professional" ? 'endExp' : 'end'}`}/>
            </div>
            <div className='bloc__data--field'>
                {
                    type === "school"
                        ? (<>
                                <Input onChange={(e) => handleChange(e)}
                                       mr='15'
                                       type='text'
                                       placeholder='school name'
                                       name='school'/>
                                <Input onChange={(e) => handleChange(e)}
                                       mr='3'
                                       type='text'
                                       placeholder='option'
                                       name='option'/>
                            </>)
                        :
                        type === "professional"
                            ? (
                                <>
                                    <Input onChange={(e) => handleChange(e)}
                                           mr='15'
                                           type='text'
                                           placeholder='company name'
                                           name='companyName'/>
                                    <Input onChange={(e) => handleChange(e)}
                                           mr='3'
                                           type='text'
                                           placeholder='profile (ex: web developer)'
                                           name='companyProfile'/>
                                </>
                            )
                            : null
                }
            </div>
            <div className='bloc__data--btns'>
                <Button type='submit'
                        value='valid'
                        className='align-start bg-light-grey btn-medium'
                        noMargin={true}
                />
                <i onClick={() => removeBlocData(idBloc, type)} className="fas fa-times color-dark-red"/>
            </div>
        </form>
    );
}
