import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Stepper from './components/Stepper/Stepper'
import PathPage from './components/AnotherPages/PathPage'
import ProcessingPage from './components/AnotherPages/ProcessingPage'

const router = createBrowserRouter([
  {
    path:"/",
    element:<Stepper />
  },
  {
    path:"/searching",
    element:<ProcessingPage />
  },
  {
    path:"/learningPath",
    element:<PathPage />
  },
])

function App() {
  return (
    <div className='p-4 justify-center items-center'>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App
