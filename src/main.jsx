// LIBRARY
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// GLOBAL STYLE
import './styles/index.css'


// PAGES
import Home from './pages/home'
import Login from './pages/login'
import Register from './pages/register'


createRoot(document.getElementById('root')).render(
    <StrictMode>
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
            </Routes>
        </Router>
    </StrictMode>,
)
