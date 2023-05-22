import { Icon } from '@tremor/react'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'

export const Layout = ({ children }) => {
    return (
        <>
            <header className='App-header text-3xl'>
                <h1>Mon (minimaliste) portfolio</h1>
                <div className='link-container'>
                    <a
                        href='https://github.com/kevinrss01'
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        <Icon size='lg' icon={AiFillGithub} tooltip='GitHub' />
                    </a>
                    <a
                        href='https://www.linkedin.com/in/kevin-rousseau-20a7b11b5/'
                        style={{
                            marginLeft: '10px',
                        }}
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
