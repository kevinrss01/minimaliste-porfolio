import React from 'react'
import { Accordion, AccordionHeader, AccordionBody } from '@tremor/react'
import { Bold, Text } from '@tremor/react'
import photo from '../../images/Pro1.jpg'

export default function AboutMe() {
    return (
        <section>
            <img src={photo} alt='img' />
            <Accordion expanded={true}>
                <AccordionHeader>À propos de moi</AccordionHeader>
                <AccordionBody>
                    <Text>
                        Je m'appelle <Bold>Kevin Rousseau</Bold>, j'ai 21 ans, je suis actuellement
                        en{' '}
                        <a
                            href='https://ecole-ipssi.com/formations-informatique/bachelor-developpeur-fullstack-devops/'
                            target='_blank'
                            rel='noopener noreferrer'
                            style={{ textDecoration: 'underline' }}
                        >
                            Bachelor FullStack
                        </a>{' '}
                        et DevOps à l'IPSSI.
                        <br />
                        J'ai également un diplôme de développeur web niveau bac+2 que j'ai obtenu à
                        l'école{' '}
                        <a
                            href='https://openclassrooms.com/fr/paths/717-developpeur-web'
                            style={{ textDecoration: 'underline' }}
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            OpenClassrooms
                        </a>{' '}
                        <br />
                        Passionné par la blockchain et les nouvelles technologies, je suis à la
                        recherche d'une alternance pour la rentrée 2023 à l'école ESGI pour un
                        Bachelor Ingénierie de la Blockchain.
                    </Text>
                </AccordionBody>
            </Accordion>
        </section>
    )
}
