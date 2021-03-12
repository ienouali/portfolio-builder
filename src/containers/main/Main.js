import React from 'react';
import { useLocation } from 'react-router-dom';
import "./style.scss";

export default function Main({children}) {
    const {pathname} = useLocation();
    return (

        <main className="main">
            <section className={`${pathname === '/generator' ? 'generator-page' : ''} main__content`}>
                {children}
            </section>
        </main>
    )
}
