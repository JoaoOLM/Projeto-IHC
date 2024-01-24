import { Routes, Route, Navigate } from 'react-router-dom'

import Home from '../pages/home/Home'
import Options from '../pages/options/Options'

export const AppRoutes = ( ) => {

    return (
        <Routes>
            <Route path="/" element={<Navigate to="/home"/>}/>
            <Route path="/home" element={<Home />}/>
            <Route path="/options" element={<Options />}/>
        </Routes>
    )
}