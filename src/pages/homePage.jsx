import React, { useEffect, useState, useContext } from 'react'
import Skils from '../components/homePage/Skils'
import AboutMe from '../components/homePage/AboutMe'
import ExperiencesAndFormations from '../components/homePage/ExperiencesAndFormations'
import { ProgressBar } from '@tremor/react'
import { ThemeContext } from '../components/layout/layout'

export default function HomePage() {
   const [scrollLevel, setScrollLevel] = useState(0)
   const { theme, setTheme } = useContext(ThemeContext)

   const myComponents = [
      {
         comp: <AboutMe color={theme} />,
      },
      {
         comp: <Skils color={theme} />,
      },
      {
         comp: <ExperiencesAndFormations color={theme} />,
      },
   ]

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
