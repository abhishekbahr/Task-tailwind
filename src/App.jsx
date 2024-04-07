
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import AboutPage from './components/About/AboutPage'
import Interested from './components/Interested/Interested'
import ComfortLevel from './components/ComfortLevel/ComfortLevel.jsx'
import RighPlacePage from './components/AnotherPages/RighPlacePage.jsx'
import OnYourWayPage from './components/AnotherPages/OnYourWayPage.jsx'

const router = createBrowserRouter([
  {
    path:"/",
    element:<AboutPage />
  },
  {
    path:"/interest",
    element:<Interested />
  },
  {
    path:"/comfort",
    element:<ComfortLevel />
  },
  {
    path:'/test',
    element:<RighPlacePage/>
  }
])

function App() {
  return (
    <div className='p-4 justify-center items-center'>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App
