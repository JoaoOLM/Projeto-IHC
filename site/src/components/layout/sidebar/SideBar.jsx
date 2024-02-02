import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './SideBar.css';

import { MdMenu, MdHouse, MdOutlineQuestionMark, MdStackedBarChart, MdSettings, MdArrowBack } from "react-icons/md";

const Sidebar = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = (clickEvent) => {
        // Impede a propagação do evento para que não alcance o corpo da página
        clickEvent.stopPropagation();
        setSidebarOpen(!sidebarOpen);
    }

    const navigate = useNavigate();

    const handleGoBack = () => {
        navigate(-1);
        toggleSidebar();
    };

    useEffect(() => {
        const handleOutsideClick = (clickEvent) => {
            const sidebar = document.getElementById('sidebar');

            // Verifica se o clique foi fora da sidebar
            if (sidebarOpen && sidebar && !sidebar.contains(clickEvent.target)) {
                toggleSidebar(clickEvent);
            }
        };

        // Adiciona o ouvinte de evento ao corpo da página
        document.body.addEventListener('click', handleOutsideClick);

        // Remove o ouvinte de evento ao desmontar o componente
        return () => {
            document.body.removeEventListener('click', handleOutsideClick);
        };
    }, [sidebarOpen, toggleSidebar]);


    return (
        <div>
            <div className="sidebar-button" onClick={toggleSidebar}>
                <MdMenu size={30} color='#1D1B20' />
            </div>

            {/* Sidebar */}
            {sidebarOpen && (
                <div id="sidebar" className={`sidebar ${sidebarOpen ? 'open' : ''}`}>
                    {/* Conteúdo da Sidebar */}
                    <div className="sidebar-button first" onClick={toggleSidebar}>
                        <MdMenu size={30} color='#fff' />
                    </div>

                    <div className="sidebar-button rest" onClick={toggleSidebar}>
                        <Link to="/home">
                            <MdHouse size={30} color='#fff' />
                        </Link>
                        <Link to="/home">
                            <span className='icon-text'>Home</span>
                        </Link>
                    </div>
                    <div className="sidebar-button rest" onClick={toggleSidebar}>
                        <Link to='/about'>
                            <MdOutlineQuestionMark size={30} color='#fff' />
                        </Link>
                        <Link to='/about'>
                            <span className='icon-text'>Sobre</span>
                        </Link>
                    </div>
                    <div className="sidebar-button rest" onClick={toggleSidebar}>
                        <Link to='/version'>
                            <MdStackedBarChart size={30} color='#fff' />
                        </Link>
                        <Link to='/version'>
                            <span className='icon-text'>Versão</span>
                        </Link>
                    </div>
                    <div className="sidebar-button rest" onClick={toggleSidebar}>
                        <Link to='/settings' >
                            <MdSettings size={30} color='#fff' />
                        </Link>
                        <Link to='/settings' >
                            <span className='icon-text'>Configurações</span>
                        </Link>
                    </div>
                    <div className="sidebar-button last" onClick={handleGoBack}>
                        <Link className="sidebar-item">
                            <MdArrowBack size={30} color='#fff' />
                        </Link>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Sidebar;
