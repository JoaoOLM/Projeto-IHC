import React, { useState } from 'react';
import './SideBar.css'; // Importe o estilo específico da barra lateral se houver
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
                        <MdHouse size={30} color='#fff' />
                    </div>
                    <div className="sidebar-button rest" onClick={toggleSidebar}>
                        <MdOutlineQuestionMark size={30} color='#fff' />
                    </div>
                    <div className="sidebar-button rest" onClick={toggleSidebar}>
                        <MdStackedBarChart size={30} color='#fff' />
                    </div>
                    <div className="sidebar-button rest" onClick={toggleSidebar}>
                        <MdSettings size={30} color='#fff' />
                    </div>

                </div>
            )}
        </div>
    );
}

export default Sidebar;
