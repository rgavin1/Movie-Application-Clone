import React from 'react';
import '../Assets/styles/Sidebar.css';
import Menu from './Menu/Menu';
import Profile from '../Component/Profile';
import { motion } from 'framer-motion';

const Sidebar = () => {
    return  <motion.div initial={{ x: '-100%', opacity: 0 }} transition={{ duration: 2.5 }} animate={{ x: '0%', opacity: 1 }} className="sidebar">
                <div className="sidebar__logo">R</div>
                <Menu />
                <Profile />
            </motion.div>;
}

export default Sidebar;