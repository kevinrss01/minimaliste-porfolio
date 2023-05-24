import React from 'react'
import { BrowserRouter, Route, Routes, Switch } from 'react-router-dom'
import { Layout } from '../components/layout/layout'
import HomePage from '../pages/homePage'
import NoMatch from './NoMatch'
import Projects from '../pages/Projects'
import 'react-toastify/dist/ReactToastify.css'
import SingleProject from '../pages/SingleProject'
import { useEffect, useState } from 'react'

export default function Router() {
   const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light')

   useEffect(() => {
      const handleStorageChange = () => {
         setTheme(localStorage.getItem('theme'))
      }

      window.addEventListener('storage', handleStorageChange)

      return () => {
         window.removeEventListener('storage', handleStorageChange)
      }
   }, [])

   return (
      <BrowserRouter>
         <Layout>
            <Routes>
               <Route path='/' element={<HomePage color={theme} />} />
               <Route path='/projects' element={<Projects color={theme} />} />
               <Route path='/project/:name' element={<SingleProject color={theme} />} />
               <Route path='*' element={<NoMatch color={theme} />} />
            </Routes>
         </Layout>
      </BrowserRouter>
   )
}
