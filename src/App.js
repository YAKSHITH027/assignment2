import { Route, Routes } from 'react-router-dom'
import './App.css'
import Orders from './Pages/Orders'
import Sidebar from './Components/Sidebar'

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route
          path='/'
          element={
            <Sidebar>
              <Orders />
            </Sidebar>
          }
        />
      </Routes>
    </div>
  )
}

export default App
