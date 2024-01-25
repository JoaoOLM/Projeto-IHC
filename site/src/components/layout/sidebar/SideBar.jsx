import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './SideBar.css'; 

import { MdMenu, MdHouse, MdOutlineQuestionMark, MdStackedBarChart, MdSettings } from "react-icons/md";

const Sidebar = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

    return (
        <div>
            <div className="sidebar-button" onClick={toggleSidebar}>
                <MdMenu size={30} color='#1D1B20' />
            </div>

            {/* Sidebar */}
            {sidebarOpen && (
                <div className='sidebar'>
                    {/* Conteúdo da Sidebar */}
                    <div className="sidebar-button first" onClick={toggleSidebar}>
                        <MdMenu size={30} color='#fff' />
                    </div>

                    <div className="sidebar-button rest" onClick={toggleSidebar}>
                        <Link to="/home">
                            <MdHouse size={30} color='#fff' />
                            <span className='icon-text'>Home</span>
                        </Link>
                    </div>
                    <div className="sidebar-button rest" onClick={toggleSidebar}>
                        <Link to='/about'>
                            <MdOutlineQuestionMark size={30} color='#fff' />
                            <span className='icon-text'>Sobre</span>
                        </Link>
                    </div>
                    <div className="sidebar-button rest" onClick={toggleSidebar}>
                        <Link to='/version'>
                            <MdStackedBarChart size={30} color='#fff' />
                            <span className='icon-text'>Versão</span>
                        </Link>
                    </div>
                    <div className="sidebar-button rest" onClick={toggleSidebar}>
                        <Link to='/settings' >
                            <MdSettings size={30} color='#fff' />
                            <span className='icon-text'>Configurações</span>
                        </Link>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Sidebar;
