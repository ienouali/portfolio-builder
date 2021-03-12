import React from "react";

export default function DynamicBloc ({title, state, setState, component}) {
    return (
        <>
            <div className='bloc--action'>
                <h3>{title}</h3>
                <i onClick={() => setState([...state, {id: state.length + 1, Bloc: component}])}
                   className='fas fa-plus icon-add'/>
            </div>
            <hr/>
            {
                state.map((item) => <item.Bloc type={title === 'Educations' ? 'school' : 'professional'}
                                               idBloc={item.id}
                                               key={item.id}
                />)
            }
        </>
    );
}
