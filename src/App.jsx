import './App.css'
import { router } from "./router"
import { RouterProvider } from 'react-router-dom';
import Header from './components/Header';
function App() {

  return (
    <div>
      <Header />
      <RouterProvider router={router} />
    </div>
  )
}

export default App
