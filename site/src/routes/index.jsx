import { Routes, Route, Navigate } from 'react-router-dom'

import Home from '../pages/sidePages/home/Home'
import About from '../pages/sidePages/about/About'
import Version from '../pages/sidePages/version/Version'
import Settings from '../pages/sidePages/settings/Settings'
import Options from '../pages/options/Options'
import Meditation from '../pages/meditation/Meditation'
import Respiration from '../pages/respiration/Respiration'
import Music from '../pages/music/Music'
import FaceScan from '../pages/faceScan/FaceScan'


export const AppRoutes = ( ) => {

    return (
        <Routes>
            <Route path="/" element={<Navigate to="/home"/>}/>
            <Route path="/home" element={<Home />}/>
            <Route path="/about" element={<About />}/>
            <Route path="/version" element={<Version />}/>
            <Route path="/settings" element={<Settings />}/>
            <Route path="/options" element={<Options />}/>
            <Route path="/meditation" element={<Meditation />}/>
            <Route path="/respiration" element={<Respiration />}/>
            <Route path="/music" element={<Music />}/>
            <Route path="/facescan" element={<FaceScan />}/>

        </Routes>
    )
}