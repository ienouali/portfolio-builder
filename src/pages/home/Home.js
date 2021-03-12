import React,{Fragment} from 'react';
import {motion} from "framer-motion";
import {NavLink} from "react-router-dom";
import Title from "../../components/title/Title";
import Button from "../../components/commun/Button/Button";
import {frameMotion} from "../../utils/functions";
import "./style.scss";

 export default  function Home() {

    return (
        <motion.Fragment initial={frameMotion.out}
                        exit={frameMotion.out}
                        animate={frameMotion.in}
                        variants={frameMotion.pageTransition}
                        transition={frameMotion.durationTransition}
                        className={'home'}
        >
            <Title/>
            <NavLink to="/generator"><Button type='button' value='get started' className='btn-big'/></NavLink>
        </motion.Fragment>

    );
}

