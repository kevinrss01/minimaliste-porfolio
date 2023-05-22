import React from 'react'
import Skils from './Skils'
import AboutMe from './AboutMe'
import ExperiencesAndFormations from './ExperiencesAndFormations'

const myComponents = [
    {
        comp: <AboutMe />,
    },
    {
        comp: <Skils />,
    },
    {
        comp: <ExperiencesAndFormations />,
    },
]

export default function HomePage() {
    return (
        <div
            className='homePage-container flex-centre'
            style={{
                flexDirection: 'column',
            }}
        >
            {myComponents.map((component, index) => {
                return (
                    <div
                        className='flex-centre'
                        style={{
                            width: '100%',
                            flexDirection: 'column',
                        }}
                        key={index}
                    >
                        {component.comp}
                    </div>
                )
            })}
        </div>
    )
}
