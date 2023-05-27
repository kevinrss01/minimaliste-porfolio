import React, { useState } from 'react'
import { Bold, Card, Metric, Subtitle, Text, Title, TabList, Tab, Callout } from '@tremor/react'
import { GiNetworkBars } from 'react-icons/gi'
import { FaSchool } from 'react-icons/fa'
import { BiCode } from 'react-icons/bi'
import { ipssiTecho, ocTechno, esgiTechno } from '../../utils/data'
import Loader from '../Loader'

export default function ExperiencesAndFormations({ color }) {
   const [showCard, setShowCard] = useState(true)
   const [isLoading, setIsLoading] = useState(false)

   return (
      <section>
         <Card
            decoration='top'
            decorationColor='red'
            style={{
               backgroundColor: color === 'dark' ? '#282A3A' : 'white',
               color: color === 'dark' ? 'white' : null,
            }}
         >
            <TabList
               defaultValue='1'
               onValueChange={(value) => {
                  setIsLoading(true)
                  setShowCard(value === '1')
                  setIsLoading(false)
               }}
               className='mt-6'
               color={color === 'dark' ? 'white' : 'blue'}
            >
               <Tab value='1' text='Experiences' icon={GiNetworkBars} />
               <Tab value='2' text='Formations' icon={FaSchool} />
            </TabList>
            {isLoading ? (
               <Loader />
            ) : (
               <>
                  {showCard === true ? (
                     <>
                        <br />
                        <Subtitle color={color === 'dark' ? 'white' : null}>
                           {' '}
                           <a
                              href='https://www.eurostep.com/'
                              style={{ textDecoration: 'underline' }}
                              target='_blank'
                              rel='noreferrer'
                           >
                              Eurostep
                           </a>{' '}
                           - de Octobre 2022 à octobre 2023
                        </Subtitle>
                        <br />
                        <Bold>Mes missions :</Bold>
                        <Text color={color === 'dark' ? 'white' : null}>
                           - Développement de fonctionnalités front-end sur des applications web.
                           <br />- Résolution de bugs ou amélioration de fonctionnalités existantes.{' '}
                           <br />- Création de documentation technique pour les développeurs.
                        </Text>
                        <Callout
                           className='h-12 mt-4'
                           title='Quelles technologies ?'
                           icon={BiCode}
                           color='teal'
                           style={{
                              height: 'auto',
                           }}
                        >
                           Pendant mes missions, j'utilisais principalement javascript et nodeJS.
                           Cependant j'ai également souvent utilisé typeScript et reactJS.
                        </Callout>
                     </>
                  ) : (
                     <>
                        <br />
                        <Subtitle color={color === 'dark' ? 'white' : null}>
                           {' '}
                           <a
                              href='https://www.esgi.fr/programmes/ingenierie-blockchain.html'
                              style={{ textDecoration: 'underline' }}
                              target='_blank'
                              rel='noreferrer'
                           >
                              ESGI
                           </a>{' '}
                           - de septembre 2023 à septembre 2024
                           <Bold
                              style={{
                                 marginLeft: '10px',
                              }}
                           >
                              (Bachelor développement Ingéniérie Blockchain)
                           </Bold>
                        </Subtitle>
                        <br />
                        {esgiTechno.map((item, index) => {
                           return (
                              <Text key={index} color={color === 'dark' ? 'white' : null}>
                                 - {item}ut
                              </Text>
                           )
                        })}
                        <br />
                        <Subtitle color={color === 'dark' ? 'white' : null}>
                           {' '}
                           <a
                              href='https://ecole-ipssi.com/'
                              style={{ textDecoration: 'underline' }}
                              target='_blank'
                              rel='noreferrer'
                           >
                              IPSSI
                           </a>{' '}
                           - de septembre 2022 à septembre 2023
                           <Bold
                              style={{
                                 marginLeft: '10px',
                              }}
                           >
                              (Bachelor développement FullStack et Devops)
                           </Bold>
                        </Subtitle>
                        <br />
                        {ipssiTecho.map((item, index) => {
                           return (
                              <Text color={color === 'dark' ? 'white' : null} key={index}>
                                 - {item}
                              </Text>
                           )
                        })}
                        <br />
                        <Subtitle color={color === 'dark' ? 'white' : null}>
                           {' '}
                           <a
                              href='https://openclassrooms.com/fr/paths/717-developpeur-web'
                              style={{ textDecoration: 'underline' }}
                              target='_blank'
                              rel='noreferrer'
                           >
                              OpenClassrooms
                           </a>{' '}
                           - de Janvier 2022 à Juillet 2022
                           <Bold
                              style={{
                                 marginLeft: '10px',
                              }}
                           >
                              (Bac+2)
                           </Bold>
                        </Subtitle>
                        <br />
                        <Text color={color === 'dark' ? 'white' : null}>
                           <Bold> Réalisation de 6 projets en autonomie :</Bold>
                        </Text>
                        {ocTechno.map((item, index) => {
                           return (
                              <Text key={index} color={color === 'dark' ? 'white' : null}>
                                 {item}
                              </Text>
                           )
                        })}
                     </>
                  )}
                  {/*  */}
               </>
            )}
         </Card>
      </section>
   )
}
