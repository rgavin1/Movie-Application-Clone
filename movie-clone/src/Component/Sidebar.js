import React from 'react';
import '../Assets/styles/Sidebar.css';
import Menu from './Menu';
import Profile from './Profile';

const Sidebar = () => {
    return  <div className="sidebar">
                <div className="sidebar__logo">R</div>
                <Menu />
                <Profile />
            </div>;
}

export default Sidebar;