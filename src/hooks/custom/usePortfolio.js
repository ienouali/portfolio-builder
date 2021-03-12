import React, {useEffect, useState} from "react";
import axios from "axios";

export function usePortfolio() {
    /** random generator ID */
    const ID = () => '_' + Math.random().toString(36).substr(2, 9);

    /** state portfolio */
    const [userData, setUserData] = useState({});
    const [educationsData, setEducationsData] = useState([]);
    const [experiencesData, setExperiencesData] = useState([]);

    /** state for dynamic bloc components */
    const [educations, setEducations] = useState([]);
    const [experiences, setExperiences] = useState([]);

    /** selecting the skills selected by user */
    const [selectedSkills, setSelectedSkills] = useState([]);

    /** state to make dynamic hide/show for blocs */
    const [showContact, setShowContact] = useState(false);
    const [showLanguages, setShowLanguages] = useState(false);
    const [showSkills, setShowSkills] = useState(false);


    /** remove dynamic bloc components by id */
    const removeBlocData = (id, type) => {
        if (type === "school") {
            setEducations(educations.filter(bloc => bloc.id !== id));
            setEducationsData(educationsData.filter(t => t.id !== id));

        }
        if (type === "professional") {
            setExperiences(experiences.filter(bloc => bloc.id !== id));
            setExperiencesData(experiences.filter(ex => ex.id !== id));
        }
    }
    /** dynamic handle change for all fields */
    const handleChange = (e) => {
        const {value, name} = e.target;
        setUserData({
            ...userData,
            [name]: name === 'picture' ? URL.createObjectURL(e.target.files[0]) : value,
        });
    };

    /** handle submit for educations bloc  */
    const handleSubmitEducations = (e) => {
        e.preventDefault();
        const {start, end, school, option} = userData;
        setEducationsData([...educationsData, {id: educationsData.length + 1, dates: {start, end}, option, school}]);
    };

    /** handle submit for experiences bloc  */
    const handleSubmitExp = (e) => {
        e.preventDefault();
        const {startExp, endExp, companyName, companyProfile} = userData;
        setExperiencesData([...experiencesData, {
            id: experiencesData.length + 1,
            dates: {startExp, endExp},
            companyName,
            companyProfile
        }])
    };

    /** calling for an API of programming skills */
    useEffect(() => {
        (async () =>
            setUserData({
                ...userData,
                skills: (await axios.get('https://6049f8f79251e100177cd94f.mockapi.io/it/programming')).data
            }))();
    }, []);


    return {
        handleFunctions : {
            handleChange,
            handleSubmitEducations,
            handleSubmitExp,
            removeBlocData
        },
        portfolioState : {
            userData,setUserData,
            educationsData,setEducationsData,
            experiencesData,setExperiencesData,
            selectedSkills, setSelectedSkills
        },
        dynamicComponents : {
            educations, setEducations,
            experiences, setExperiences
        },
        displayBlocs : {
            showSkills, setShowSkills,
            showContact, setShowContact,
            showLanguages, setShowLanguages
        }
    }
}
