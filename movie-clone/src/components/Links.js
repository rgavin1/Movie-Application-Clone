import React from 'react';
import { faLink } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Links = ({ item }) => {

    return  <ul className="information__links">
                <li title="homepage"><a href={item.homepage} target="_blank" rel="noreferrer" ><FontAwesomeIcon icon={faLink} /></a></li>
            </ul>
}

export default Links;