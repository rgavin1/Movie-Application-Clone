import React from 'react';

const Networks: React.FC<{ networks: any }> = ({ networks }) => {
    return  <ul className="information_networks">
        {Object.values(networks).map((item: any) => {
                    return <li key={item.id}>{item.name}</li>
                }) }
            </ul>
}

export default Networks;