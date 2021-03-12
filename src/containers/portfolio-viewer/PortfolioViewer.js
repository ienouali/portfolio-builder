import React, {useContext, useState} from "react";
import "./style.scss";
import ReactToPdf from "react-to-pdf";
import {PortfolioContext} from "../../hooks/context/portfolioContext";


export default function PortfolioViewer() {
    const ref = React.createRef();
    const [stylePFD, setStylePFD] = useState(false);

    const {
        portfolioState : {
            userData,
            educationsData,
            experiencesData,
            selectedSkills,
        }
    } = useContext(PortfolioContext);

    return (
        <div className='portfolio'>
            <div>
                <h3>resume preview</h3>
                <hr/>
            </div>

            <div className='model'>
            <div ref={ref}  style={stylePFD ? {width: '90%', height: '100%'} : {}} className="portfolio__viewer">
                <div className='model__sidebar'>

                    <div className='title'>
                        <figure className='title__img'>
                            <img alt='profile-img'
                                    src={`${userData.picture !== undefined 
                                    ? userData.picture 
                                    : 'https://www.flaticon.com/svg/vstatic/svg/149/149071.svg?token=exp=1615376889~hmac=22a2a8a3b2fcb27e3aa2c08bcb955e64'}
                                    `}
                                />
                        </figure>
                        <h1>
                            {
                                userData?.firstname !== undefined && userData.lastname !== undefined
                                    ? `${userData.firstname}  ${userData.lastname.toUpperCase()}`
                                    : `FullName`
                            }
                        </h1>
                        <span>
                                {
                                    userData.profile !== undefined
                                        ? `${userData.profile}`
                                        : `Profile : (ex: Web Developer)`

                                }
                            </span><br/>
                        <small style={{marginTop: "5px"}}>
                            {
                                userData.age !== undefined
                                    ? `${new Date().getFullYear() - userData.age.split('-')[0]} years old`
                                    : `Age`
                            }
                        </small>
                    </div>

                    <div className='contact'>
                        <h4>Contact</h4>
                        <ul className='contact__list'>
                            <li><i className="fas fa-mobile"/>
                                {userData.phone !== undefined ? userData.phone : ' Phone'}
                            </li>
                            <li><i className="fas fa-map-marker"/>
                                {userData.address !== undefined ? userData.address : ' Address'}
                            </li>
                            <li><i className="fas fa-envelope"/>
                                {userData.email !== undefined ? userData.email : ' email'}
                            </li>
                            <li><i className="fab fa-linkedin"/>
                                {userData.linkedin !== undefined ? '/in/' + userData.linkedin : ' linkedin url'}
                            </li>
                        </ul>
                    </div>

                    <div className='contact'>
                        <h4>Educations</h4>
                        <ul className='contact__list'>
                            {
                                educationsData[0]?.option !== undefined ? educationsData.map(education =>
                                        <div key={education.id}>
                                            <li>{education.dates.start} &nbsp;&nbsp; - &nbsp;&nbsp; {education.dates.end}</li>
                                            <li>{education.school} &nbsp;&nbsp; - &nbsp;&nbsp;
                                                <span>{education.option}</span></li>
                                            <br/>
                                        </div>
                                    )
                                    :
                                    (
                                        <>
                                            <div>
                                                <li>dd-mm-YYYY &nbsp;&nbsp; - &nbsp;&nbsp; dd-mm-YYYY</li>
                                                <li>school name &nbsp;&nbsp; - &nbsp;&nbsp; <span>speciality</span></li>
                                            </div>
                                            <br/>
                                            <div>
                                                <li>dd-mm-YYYY &nbsp;&nbsp; - &nbsp;&nbsp; dd-mm-YYYY</li>
                                                <li>school name &nbsp;&nbsp; - &nbsp;&nbsp; <span>speciality</span></li>
                                            </div>
                                            <br/>
                                        </>
                                    )
                            }


                        </ul>
                    </div>

                    <div className='contact'>
                        <h4>Langues</h4>
                        <ul className='contact__list'>
                            <li><i className="fas fa-check"/>&nbsp;
                                {userData.language1 !== undefined ? userData.language1 : 'language'}
                            </li>
                            {userData.language2 !== undefined ? <li>
                                    <i className="fas fa-check"/>&nbsp;
                                    {userData.language2}
                                < /li>
                                : null
                            }

                            {userData.language3 !== undefined ? <li>
                                    <i className="fas fa-check"/>&nbsp; {userData.language3}
                                </li>
                                : null}
                        </ul>
                    </div>

                </div>
                <div className='model__content'>
                    <div className='model__content--about'>
                        <h4>About</h4>
                        <p className='about'>
                            {userData.about !== undefined
                                ? userData.about
                                : `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                            voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum`
                            }

                        </p>
                    </div>
                    <div className='model__content--experience'>
                        <h4>Experiences</h4>
                        <ul>
                            {
                                experiencesData[0]?.companyName !== undefined ? experiencesData.map(exp =>
                                        <div key={exp.id}>
                                            <li>{exp.dates.startExp} - {exp.dates.endExp}</li>
                                            <li>{exp.companyName} - <span>{exp.companyProfile}</span></li>
                                            <br/>
                                        </div>
                                    )
                                    :
                                    <>
                                        <div>
                                            <li>dd-mm-YYYY - dd-mm-YYYY</li>
                                            <li>company name - <span>profile</span></li>
                                        </div>
                                        <br/>
                                        <div>
                                            <li>dd-mm-YYYY - dd-mm-YYYY</li>
                                            <li>company name - <span>profile</span></li>
                                        </div>
                                        <br/>
                                        <div>
                                            <li>dd-mm-YYYY - dd-mm-YYYY</li>
                                            <li>company name - <span>profile</span></li>
                                        </div>
                                    </>
                            }
                        </ul>
                    </div>

                    <div className='model__content--skills'>
                        <h4>Skills</h4>
                        <ul className='skills--items'>
                            {
                                selectedSkills.length > 0 ? selectedSkills.map(item =>
                                    <li>{item}</li>
                                )
                                    :
                                  <>
                                      <li>skill</li><li>skill</li><li>skill</li>
                                      <li>skill</li><li>skill</li><li>skill</li>
                                      <li>skill</li><li>skill</li><li>skill</li>
                                      <li>skill</li><li>skill</li><li>skill</li>
                                  </>
                            }
                        </ul>
                    </div>
                </div>
            </div>
                <ReactToPdf targetRef={ref}
                            y={50}
                            filename={`portfolio_${userData?.firstname?.toUpperCase()}_${userData?.lastname?.toUpperCase()}.pdf`}
                            onComplete ={() =>  setTimeout(() =>setStylePFD(false),10)}
                >
                    {({toPdf}) => (
                        <button onClick={() => {
                           setTimeout(() => setStylePFD(true),0);
                            setTimeout(() => toPdf(),0);

                        } }
                                disabled={selectedSkills.length === 0 || userData.firstname === undefined }
                                type='button'>
                            <i className='fas fa-file-download'/>
                        </button>
                    )}
                </ReactToPdf>
            </div>
        </div>
    );
}
