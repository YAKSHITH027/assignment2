import { Route, Routes } from 'react-router-dom'
import './App.css'
import Orders from './Pages/Orders'
import Sidebar from './Components/Sidebar'
import Reports from './Pages/Reports'
import Settings from './Pages/Settings'

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route
          path='/'
          element={
            <Sidebar>
              <Reports />
            </Sidebar>
          }
        />
        <Route
          path='/workspace'
          element={
            <Sidebar>
              <Orders />
            </Sidebar>
          }
        />
        <Route
          path='/setting'
          element={
            <Sidebar>
              <Settings />
            </Sidebar>
          }
        />
      </Routes>
    </div>
  )
}

export default App
