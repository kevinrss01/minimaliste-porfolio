import React, { useState } from 'react'
import { Bold, Card, Metric, Subtitle, Text, Title, TabList, Tab, Callout } from '@tremor/react'
import { GiNetworkBars } from 'react-icons/gi'
import { FaSchool } from 'react-icons/fa'
import { BiCode } from 'react-icons/bi'
import { ipssiTecho, ocTechno } from '../../utils/data'

export default function ExperiencesAndFormations() {
    const [showCard, setShowCard] = useState(true)

    return (
        <section>
            <Card decoration='top' decorationColor='red'>
                <TabList
                    defaultValue='1'
                    onValueChange={(value) => setShowCard(value === '1')}
                    className='mt-6'
                >
                    <Tab value='1' text='Experiences' icon={GiNetworkBars} />
                    <Tab value='2' text='Formations' icon={FaSchool} />
                </TabList>

                {showCard === true ? (
                    <>
                        <br />
                        <Subtitle>
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
                        <Text>
                            - Développement de fonctionnalités front-end sur des applications web.
                            <br />- Résolution de bugs ou amélioration de fonctionnalités
                            existantes. <br />- Création de documentation technique pour les
                            développeurs.
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
                        <Subtitle>
                            {' '}
                            <a
                                href='https://ecole-ipssi.com/'
                                style={{ textDecoration: 'underline' }}
                                target='_blank'
                                rel='noreferrer'
                            >
                                IPSSI
                            </a>{' '}
                            - de Octobre 2022 à octobre 2023
                        </Subtitle>
                        <br />
                        {ipssiTecho.map((item, index) => {
                            return <Text key={index}>- {item}</Text>
                        })}
                        <br />
                        <Subtitle>
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
                        </Subtitle>
                        <br />
                        <Text>
                            <Bold> Réalisation de 6 projets en autonomie :</Bold>
                        </Text>
                        {ocTechno.map((item, index) => {
                            return <Text key={index}>{item}</Text>
                        })}
                    </>
                )}
                {/*  */}
            </Card>
        </section>
    )
}
