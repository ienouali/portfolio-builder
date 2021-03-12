import React  from 'react';
import PortfolioForm from "../../containers/portfolio-form/PortfolioForm";
import PortfolioViewer from "../../containers/portfolio-viewer/PortfolioViewer";
import {PortfolioProvider} from "../../hooks/context/portfolioContext";
import {motion} from "framer-motion";
import "./style.scss";
import {frameMotion} from "../../utils/functions";



function Generator() {

    return (
        <PortfolioProvider>
            <motion.section  initial={frameMotion.out}
                    exit={frameMotion.out}
                    animate={frameMotion.in}
                    variants={frameMotion.pageTransition}
                    transition={frameMotion.durationTransition} className='generator'>
                <PortfolioForm />
                <PortfolioViewer />
            </motion.section>
        </PortfolioProvider>
    );
}

export default Generator;
