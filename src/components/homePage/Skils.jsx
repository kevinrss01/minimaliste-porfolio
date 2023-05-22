import React from 'react'
import { AiFillTool } from 'react-icons/ai'
import { Title, Subtitle, Bold, Text, Card } from '@tremor/react'


export default function Skils() {
    return (
        <section>
            <Card decoration='top' decorationColor='indigo'>
                <div
                    className='center'
                    style={{
                        gap: '5px',
                    }}
                >
                    <Title>Compétences</Title>
                    <AiFillTool />
                </div>
                <br />
                <Subtitle
                    style={{
                        textDecoration: 'underline',
                    }}
                >
                    Langages de programmation :
                </Subtitle>{' '}
                <br />
                <Text>
                    <Bold>Front-end :</Bold>
                    <ul>
                        <li>- HTML, CSS, SASS</li>
                        <li>- Javascript, typeScript, Python, PHP</li>
                        <li>- ReactJS, NextJS, Redux, Symphony</li>
                        <li>- Développement mobile avec flutter</li>
                    </ul>
                    <br />
                    <Bold>Back-end :</Bold>
                    <ul>
                        <li>- NodeJS, NestJS</li>
                    </ul>
                    <br />
                    <Bold>Serveur :</Bold>
                    <ul>
                        <li>- Firebase, SQL, MongoDB, MySQL</li>
                    </ul>
                </Text>
                <br />
                <Subtitle
                    style={{
                        textDecoration: 'underline',
                    }}
                >
                    Autres :
                </Subtitle>{' '}
                <br />
                <Text>
                    <Bold>- UX/UI design</Bold>
                    <br />
                    <Bold>- Git et GitHub</Bold>
                    <br />
                    <Bold>- Azure DevOps</Bold>
                    <br />
                    <Bold>- Bonne notion gestion de projet AGILE</Bold>
                    <br />
                    <Bold>- Blockchain, web3</Bold>
                    <br />
                </Text>
            </Card>
        </section>
    )
}
