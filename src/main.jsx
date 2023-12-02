import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter , createRoutesFromElements} from 'react-router-dom'
import Layout from './components/Layout.jsx'
import Teams from './components/Teams.jsx'
import Events from './components/Events.jsx'
import ErrorPage from './components/ErrorPage.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={ <Layout /> }>
      <Route path='' element={<App />} />
      <Route path='teams' element={<Teams />} />
      <Route path='events' element={<Events />} />
      
      <Route path='*' element={<ErrorPage />} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
