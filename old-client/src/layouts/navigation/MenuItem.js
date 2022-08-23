import React from 'react';


const MenuItem = ({ text, icon }) => {
    return  <div className="sidebar__menuitem" title={text}>
                 <span>{icon}</span>
            </div>
}

export default MenuItem;

