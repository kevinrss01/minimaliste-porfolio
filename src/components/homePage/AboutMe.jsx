import React from 'react'
import { Accordion, AccordionList, AccordionHeader, AccordionBody } from '@tremor/react'
import { Bold, Text } from '@tremor/react'
import photo from '../../images/Pro1.jpg'

export default function AboutMe({ color }) {
   return (
      <section>
         <img src={photo} alt='img' />
         <AccordionList>
            <Accordion
               expanded={true}
               style={{
                  backgroundColor: color === 'dark' ? '#282A3A' : 'white',
                  color: color === 'dark' ? 'white' : 'black',
               }}
            >
               <AccordionHeader>À propos de moi</AccordionHeader>
               <AccordionBody>
                  <Text color={color === 'dark' ? 'white' : null}>
                     Je m'appelle <Bold>Kevin Rousseau</Bold>, j'ai 21 ans et j'habite à Versailles.
                     Je suis actuellement en{' '}
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
                        OpenClassrooms.
                     </a>{' '}
                     <br />
                     Passionné par la blockchain et les nouvelles technologies, je suis à la
                     recherche d'une alternance pour la rentrée 2023 à l'école ESGI pour un Bachelor
                     Ingénierie de la Blockchain.
                  </Text>
               </AccordionBody>
            </Accordion>
            <Accordion
               expanded={false}
               style={{
                  backgroundColor: color === 'dark' ? '#282A3A' : 'white',
                  color: color === 'dark' ? 'white' : 'black',
               }}
            >
               <AccordionHeader>Mon parcours</AccordionHeader>
               <AccordionBody>
                  <Text color={color === 'dark' ? 'white' : null}>
                     Ma scolarité s'est déroulée principalement dans des filières professionnelles.
                     <br /> Après un CAP carrosserie j'ai rapidement intégré le monde du travail.
                     J'ai par exemple travaillé dans la restauration pendant deux ans en tant que
                     pizzaiolo. <br />
                     Ma passion pour les nouvelles technologies, mon attrait pour la résolution de
                     problème et ma capacité de logique mon orienté vers le développement web.
                  </Text>
               </AccordionBody>
            </Accordion>
         </AccordionList>
      </section>
   )
}
