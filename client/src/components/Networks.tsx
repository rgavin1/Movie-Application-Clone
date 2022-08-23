import React from 'react';

const Networks = ({ networks }) => {
    return  <ul className="information_networks">
                { Object.values(networks).map(item => {
                    return <li key={item.id}>{item.name}</li>
                }) }
            </ul>
}

export default Networks;