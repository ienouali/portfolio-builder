import React, {useContext} from "react";
import "./style.scss";
import BlocData from "../../components/bloc-data/BlocData";
import {PortfolioContext} from "../../hooks/context/portfolioContext";
import SubTitle from "../../components/commun/sub-title/SubTitle";
import PersonalInfo from "../../components/bloc-personal-info/PersonalInfo";
import BlocContainer from "../../components/commun/bloc-container/BlocContainer";
import BlocContact from "../../components/bloc-contact/BlocContact";
import DynamicBloc from "../../components/dynamic-bloc/DynamicBloc";
import BlocSkills from "../../components/bloc-skills/BlocSkills";
import BlocLang from "../../components/bloc-languages/BlocLanguages";

function PortfolioForm() {
    const {
        handleFunctions: {
            handleChange
        },
        displayBlocs: {
            showSkills, setShowSkills, showContact, setShowContact, showLanguages, setShowLanguages
        },
        portfolioState: {
            userData, selectedSkills, setSelectedSkills
        },
        dynamicComponents: {
            educations, setEducations, experiences, setExperiences
        }
    } = useContext(PortfolioContext);

    return (
        <div className='form'>
            <SubTitle title='Personal Information'/>
            <PersonalInfo handleChange={handleChange} picture={userData.picture}/>

            <BlocContainer>
                <BlocContact handleChange={handleChange}
                             title='Contact'
                             state={showContact}
                             setState={setShowContact}
                />
            </BlocContainer>

            <BlocContainer>
                <DynamicBloc title='Educations'
                             state={educations}
                             setState={setEducations}
                             component={BlocData}
                />
            </BlocContainer>

            <BlocContainer>
                <DynamicBloc title='Experiences'
                             state={experiences}
                             setState={setExperiences}
                             component={BlocData}
                />
            </BlocContainer>


            <BlocContainer>
                <BlocSkills handleChange={handleChange}
                            title='Skills'
                            state={showSkills}
                            setState={setShowSkills}
                            data={userData}
                            skills={{selectedSkills, setSelectedSkills}}
                />
            </BlocContainer>

            <BlocContainer>
                <BlocLang title='Languages'
                          handleChange={handleChange}
                          state={showLanguages}
                          setState={setShowLanguages}
                />
            </BlocContainer>
        </div>
    );
}

export default  PortfolioForm ;
