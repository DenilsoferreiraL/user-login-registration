import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Users from './containers/User'
import Home from './containers/Home'

function MyRoutes() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/users" element={<Users />} />
            </Routes>
        </Router>

    )
}

export default MyRoutes