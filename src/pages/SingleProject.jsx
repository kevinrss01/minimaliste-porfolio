import React, { useEffect, useState, useContext } from 'react'
import { useParams } from 'react-router-dom'
import { Card, Title, Text, Button, Bold } from '@tremor/react'
import axios from 'axios'
import { AiFillGithub } from 'react-icons/ai'
import { BsBrowserChrome } from 'react-icons/bs'
import { toast } from 'react-toastify'
import Loader from '../components/Loader'
import { ThemeContext } from '../components/layout/layout'

export default function SingleProject() {
   const { name } = useParams()
   const [project, setProject] = useState({})
   const [languages, setLanguages] = useState([{}])
   const [isLoading, setIsLoading] = useState(true)
   const [numberOfCommits, setNumberOfCommits] = useState(0)
   const { theme, setTheme } = useContext(ThemeContext)

   const errorMessage = 'Oups une erreur est survenue, veuillez réessayer plus tard.'

   const getData = async () => {
      await axios
         .get(`https://api.github.com/repos/kevinrss01/${name}`)
         .then((response) => {
            setProject(response.data)
         })
         .catch((err) => {
            toast.error(errorMessage)
            console.log(err)
            return
         })

      await axios
         .get(`https://api.github.com/repos/kevinrss01/${name}/languages`)
         .then((res) => {
            setLanguages(res.data)
         })
         .catch((err) => {
            toast.error(errorMessage)
            console.log(err)
            return
         })

      await axios
         .get(`https://api.github.com/repos/kevinrss01/${name}/commits`)
         .then((res) => {
            setNumberOfCommits(res.data.length)
         })
         .catch((err) => {
            toast.error(errorMessage)
            console.log(err)
            return
         })

      setIsLoading(false)
   }

   useEffect(() => {
      getData()
   }, [])

   return (
      <div
         style={{
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column',
            width: '70%',
            height: '90vh',
         }}
      >
         {isLoading ? (
            <>
               <Loader />
            </>
         ) : (
            <Card
               className='card-container'
               style={{
                  backgroundColor: theme === 'dark' ? '#282A3A' : 'white',
                  color: theme === 'dark' ? 'white' : null,
               }}
            >
               <div className='text'>
                  <div>
                     <Title color={theme === 'dark' ? 'white' : null}>
                        {project.name} - ({numberOfCommits} commits)
                     </Title>
                  </div>

                  <br />
                  <Text color={theme === 'dark' ? 'white' : null}>
                     <Bold>Description : </Bold> {project.description}
                  </Text>
                  <br />
                  {project.topics.length > 0 && (
                     <Text color={theme === 'dark' ? 'white' : null}>
                        <Bold>Topics : </Bold>
                        <ul>
                           {project.topics.map((topic, index) => {
                              return <li key={index}>- {topic}</li>
                           })}
                        </ul>
                     </Text>
                  )}
                  <br />
                  <Text color={theme === 'dark' ? 'white' : null}>
                     <Bold>Technologies utilisées : </Bold>
                     <ul>
                        {Object.keys(languages).map((key, index) => {
                           return <li key={index}>- {key}</li>
                        })}
                     </ul>
                  </Text>
               </div>
               <div className='buttons'>
                  <a href={project.html_url} target='_blank' rel='noreferrer'>
                     <Button icon={AiFillGithub} color={theme === 'dark' ? '#282A3A' : 'blue'}>
                        Voir sur github
                     </Button>
                  </a>

                  <Button
                     icon={BsBrowserChrome}
                     disabled={!project.homepage}
                     color={theme === 'dark' ? '#282A3A' : 'blue'}
                  >
                     <a
                        style={{
                           all: 'unset',
                        }}
                        href={project.homepage ? project.homepage : '#'}
                     >
                        Voir le projet
                     </a>
                  </Button>
               </div>
            </Card>
         )}
      </div>
   )
}
