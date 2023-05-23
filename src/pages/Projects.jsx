import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'
import Loader from '../components/Loader'
import { Card, Title, Text, Bold } from '@tremor/react'
import { AiFillGithub } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'

export default function Projects() {
   const [projects, setProjects] = useState([])
   const [isLoading, setIsLoading] = useState(true)
   const [cardId, setCardId] = useState('')

   const callData = async () => {
      await axios
         .get('https://api.github.com/users/kevinrss01/repos')
         .then((response) => {
            toast.success('Données récupérées avec succès')
            setProjects(response.data)
            setIsLoading(false)
            console.log(response.data)
         })
         .catch((err) => {
            console.log(err)
            toast.error('Une erreur est survenue veuillez réesayer plus tard')
         })
   }

   useEffect(() => {
      callData()
   }, [])

   const navigate = useNavigate()

   return (
      <div>
         {isLoading ? (
            <Loader />
         ) : (
            <div className='project-card-container'>
               {[...projects]
                  .sort((a, b) => {
                     const dateA = new Date(a.created_at)
                     const dateB = new Date(b.created_at)
                     return dateB.getTime() - dateA.getTime()
                  })
                  .map((project) => {
                     if (project.name !== 'kevinrss01') {
                        return (
                           <Card
                              key={project.id}
                              className='project-card'
                              decoration={cardId === project.id ? 'top' : ''}
                              onMouseEnter={() => {
                                 setCardId(project.id)
                              }}
                              onMouseLeave={() => {
                                 setCardId('0')
                              }}
                              onClick={() => {
                                 navigate(`/project/${project.id}`)
                              }}
                              style={{ cursor: 'pointer' }}
                           >
                              <div style={{ display: 'flex', alignItems: 'center' }}>
                                 <AiFillGithub style={{ marginRight: '5px' }} />
                                 <Title>{project.name}</Title>
                              </div>

                              <Text>
                                 <Bold>Description : </Bold>{' '}
                                 {project.description
                                    ? project.description
                                    : 'Aucune description 🥲'}
                              </Text>
                           </Card>
                        )
                     }
                  })}
            </div>
         )}
      </div>
   )
}
