import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css'
import Chat from './components/Chat'
import Sidebar from './components/Sidebar'
import Login from './components/Login'
import Register from './components/Register';

function App() {

  const [usuario, setUsuario] = useState(false);

  return (
    <div className="h-screen overflow-hidden flex items-center justify-center">
      <div className="flex h-screen antialiased text-gray-800">
        <div className="flex flex-row h-full w-full overflow-x-hidden">
          <Router>
          <Sidebar usuario={usuario} setUsuario={setUsuario}/>
            <Routes>
              <Route path="/" element={<Chat />} />
              <Route path="/login" element={<Login setUsuario={setUsuario}/>} />
              <Route path="/register" element={<Register />} />
            </Routes>
          </Router>
          {/* <Sidebar />
          <Chat /> */}
        </div>
      </div>
    </div>
  )
}

export default App
