import React, {createContext} from "react";
import {usePortfolio} from "../custom/usePortfolio";

export const PortfolioContext = createContext(undefined, undefined);

export const PortfolioProvider = ({children}) => {

    return (
        <PortfolioContext.Provider value={usePortfolio()}>
            {children}
        </PortfolioContext.Provider>
    );
}
