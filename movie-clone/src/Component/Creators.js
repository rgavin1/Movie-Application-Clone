import React from 'react';

const Creators = ({ item }) => {
    return  <ul className="information_creators">
                { item.map(creator => {
                    return <li>{creator.name}</li>
                }) }
            </ul>
}

export default Creators;