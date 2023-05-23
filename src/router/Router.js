import React from 'react'
import { BrowserRouter, Route, Routes, Switch } from 'react-router-dom'
import { Layout } from '../components/layout/layout'
import HomePage from '../pages/homePage'
import NoMatch from './NoMatch'
import Projects from '../pages/Projects'
import 'react-toastify/dist/ReactToastify.css'
import SingleProject from '../pages/SingleProject'

export default function Router() {
   return (
      <BrowserRouter>
         <Layout>
            <Routes>
               <Route path='/' element={<HomePage />} />
               <Route path='/projects' element={<Projects />} />
               <Route path='/project/:id' element={<SingleProject />} />
               <Route path='*' element={<NoMatch />} />
            </Routes>
         </Layout>
      </BrowserRouter>
   )
}
