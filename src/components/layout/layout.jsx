import { Icon, Button } from '@tremor/react'
import { AiFillGithub, AiFillLinkedin, AiFillHome } from 'react-icons/ai'
import { Link } from 'react-router-dom'

export const Layout = ({ children }) => {
   return (
      <>
         <header className='App-header text-3xl'>
            <Button className='button-to-projects'>
               <Link to='/projects'>Mes projets</Link>
            </Button>

            <h1>Mon (minimaliste) portfolio</h1>
            <div className='link-container'>
               <Link to='/'>
                  <Icon size='lg' icon={AiFillHome} tooltip='Page accueil' />
               </Link>
               <a href='https://github.com/kevinrss01' target='_blank' rel='noopener noreferrer'>
                  <Icon size='lg' icon={AiFillGithub} tooltip='GitHub' />
               </a>
               <a
                  href='https://www.linkedin.com/in/kevin-rousseau-20a7b11b5/'
                  target='_blank'
                  rel='noopener noreferrer'
               >
                  <Icon size='lg' icon={AiFillLinkedin} tooltip='Linkedin' />
               </a>
            </div>
         </header>
         <main>{children}</main>
         <footer></footer>
      </>
   )
}
