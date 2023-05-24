import { Icon, Button } from '@tremor/react'
import { AiFillGithub, AiFillLinkedin, AiFillHome } from 'react-icons/ai'
import { MdNightlight } from 'react-icons/md'
import { BsSunFill } from 'react-icons/bs'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { Toggle, ToggleItem } from '@tremor/react'
import { useEffect, useState, createContext } from 'react'

export const ThemeContext = createContext()

export const Layout = ({ children }) => {
   const [theme, setTheme] = useState('light')
   const darkColor = '#282A3A'
   const navigate = useNavigate()
   const location = useLocation()

   const getTheme = () => {
      return localStorage.getItem('theme')
   }

   useEffect(() => {
      const theme = getTheme()
      if (theme) {
         setTheme(theme)
      }
   }, [theme])

   return (
      <ThemeContext.Provider value={{ theme, setTheme }}>
         <div
            style={{
               backgroundColor: theme === 'light' ? '#fff' : '#000',
            }}
         >
            <header className='App-header text-3xl'>
               <Button
                  className='button-to-projects'
                  color={theme === 'dark' ? darkColor : 'blue'}
                  onClick={() => {
                     navigate('/projects')
                  }}
                  disabled={location.pathname === '/projects'}
               >
                  Mes projets
               </Button>

               <h1
                  style={{
                     color: theme === 'dark' ? 'white' : 'black',
                  }}
               >
                  Mon (minimaliste) portfolio
               </h1>
               <div className='link-container'>
                  <Toggle
                     defaultValue={() => {
                        const theme = getTheme()
                        if (theme) {
                           return theme
                        } else {
                           return 'light'
                        }
                     }}
                     onValueChange={(value) => {
                        localStorage.setItem('theme', value)
                        setTheme(value)
                     }}
                     color={theme === 'dark' ? darkColor : 'blue'}
                  >
                     <ToggleItem value='dark' icon={MdNightlight} />
                     <ToggleItem value='light' icon={BsSunFill} />
                  </Toggle>
                  <Link to='/'>
                     <Icon
                        color={theme === 'dark' ? darkColor : 'blue'}
                        size='lg'
                        icon={AiFillHome}
                        tooltip='Page accueil'
                     />
                  </Link>
                  <a href='https://github.com/kevinrss01' target='_blank' rel='noopener noreferrer'>
                     <Icon
                        size='lg'
                        icon={AiFillGithub}
                        tooltip='GitHub'
                        color={theme === 'dark' ? darkColor : 'blue'}
                     />
                  </a>
                  <a
                     href='https://www.linkedin.com/in/kevin-rousseau-20a7b11b5/'
                     target='_blank'
                     rel='noopener noreferrer'
                  >
                     <Icon
                        size='lg'
                        icon={AiFillLinkedin}
                        tooltip='Linkedin'
                        color={theme === 'dark' ? darkColor : 'blue'}
                     />
                  </a>
               </div>
            </header>
            <main>{children}</main>
            <footer></footer>
         </div>
      </ThemeContext.Provider>
   )
}
