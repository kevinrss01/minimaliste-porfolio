import React, { useEffect, useState } from 'react'
import Skils from './Skils'
import AboutMe from './AboutMe'
import ExperiencesAndFormations from './ExperiencesAndFormations'
import { ProgressBar } from '@tremor/react'
import Projets from './Projets'

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
   {
      comp: <Projets />,
   },
]

export default function HomePage() {
   const [scrollLevel, setScrollLevel] = useState(0)

   useEffect(() => {
      const handleScroll = () => {
         const currentScrollLevel = window.pageYOffset || document.documentElement.scrollTop
         setScrollLevel(currentScrollLevel)
      }

      window.addEventListener('scroll', handleScroll)

      return () => {
         window.removeEventListener('scroll', handleScroll)
      }
   }, [])

   return (
      <>
         <div
            style={{
               position: 'fixed',
               width: '40%',
               top: '50%',
               rotate: '90deg',
               right: '-120px',
            }}
         >
            <ProgressBar percentageValue={(scrollLevel * 100) / 651} />
         </div>

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
      </>
   )
}
