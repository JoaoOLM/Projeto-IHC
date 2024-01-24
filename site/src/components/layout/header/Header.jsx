import React, { useState, useEffect } from 'react';
import './Header.css'; // Importe o estilo específico do botão de acessibilidade se houver
import Sidebar from '../sidebar/SideBar';
import AccessibilityButton from '../accessibility/Accessibility';

const Header = () => {
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        // Atualizar a hora a cada minuto
        const intervalId = setInterval(() => {
            setCurrentTime(new Date());
        }, 60000); // Atualiza a cada 60.000 milissegundos (1 minuto)

        // Limpar intervalo quando o componente é desmontado
        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className='header'>

            <Sidebar />

            <div className='current-time'>
                <p>{currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</p>
            </div>

            <AccessibilityButton />

        </div>
    );
}

export default Header;
