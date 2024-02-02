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
import ChechEmotion from '../pages/faceScan/checkEmotion/CheckEmotion'
import EmotionFail from '../pages/faceScan/checkEmotion/emotionFail/EmotionFail'
import Feliz from '../pages/faceScan/checkEmotion/emotions/feliz/Feliz'
import Medo from '../pages/faceScan/checkEmotion/emotions/medo/Medo'
import Nervoso from '../pages/faceScan/checkEmotion/emotions/nervoso/Nervoso'
import Neutro from '../pages/faceScan/checkEmotion/emotions/neutro/Neutro'
import Nojo from '../pages/faceScan/checkEmotion/emotions/nojo/Nojo'
import Surpresa from '../pages/faceScan/checkEmotion/emotions/surpresa/Surpresa'
import Triste from '../pages/faceScan/checkEmotion/emotions/triste/Triste'

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
            <Route path="/checkemotion/:emocao" element={<ChechEmotion />}/>
            <Route path="/checkemotion/emotionfail" element={<EmotionFail />}/>
            <Route path="Happy" element={<Feliz />}/>
            <Route path="Fear" element={<Medo />}/>
            <Route path="Nervous" element={<Nervoso />}/>
            <Route path="Neutral" element={<Neutro />}/>
            <Route path="Disgust" element={<Nojo />}/>
            <Route path="Surprise" element={<Surpresa />}/>
            <Route path="Sad" element={<Triste />}/>

        </Routes>
    )
}