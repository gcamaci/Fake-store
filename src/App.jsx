import './App.css'
import { router } from "./router"
import { RouterProvider } from 'react-router-dom';
import Header from './components/Header';
import { Provider } from 'react-redux';
import store from './redux/store'


function App() {

  return (
    <Provider store={store}>
      <div className='bg-primary'>
        <RouterProvider router={router}/>
      </div>
    </Provider>
  )
}

export default App
