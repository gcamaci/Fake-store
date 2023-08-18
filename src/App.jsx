import './App.css'
import { router } from "./router"
import { RouterProvider } from 'react-router-dom';
import Nav from './components/Nav';
import Header from './components/Header';
function App() {

  return (
    <div className='grid grid-cols-12'>
      <Header />
      <Nav />
      <RouterProvider router={router} />
    </div>
  )
}

export default App
