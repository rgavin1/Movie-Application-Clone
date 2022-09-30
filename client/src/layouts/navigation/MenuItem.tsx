import React from 'react';

const MenuItem: React.FC<{ text: string; icon: JSX.Element }> = ({ text, icon }) => {
    return <span id={text} >{icon}</span>
}

export default MenuItem;

