import React from 'react';
// import '../../assets/styles/Sidebar.css';
import Menu from "../navigation";
// import Profile from '../../pages/profile/Container';
import { motion } from 'framer-motion';

const Sidebar = () => {
    return  <motion.div initial={{ x: '-100%', opacity: 0 }} transition={{ duration: 2.5 }} animate={{ x: '0%', opacity: 1 }} className="sidebar">
                <div className="sidebar__logo">R</div>
                <Menu />
                {/* <Profile /> */}
            </motion.div>;
}

export default Sidebar;