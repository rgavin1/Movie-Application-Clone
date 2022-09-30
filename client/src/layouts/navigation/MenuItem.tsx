import React from 'react';

const MenuItem: React.FC<{ text: string; icon: JSX.Element }> = ({ text, icon }) => {
    return <div className="sidebar__menuitem" title={text}>
        <span>{icon}</span>
    </div>
}

export default MenuItem;

