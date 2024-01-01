import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Users from './containers/User'
import Home from './containers/Home'
import Teste from './containers/Teste'

function MyRoutes() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/teste" element={<Teste/>} />
                <Route path="/users" element={<Users />} />
            </Routes>
        </Router>

    )
}

export default MyRoutes