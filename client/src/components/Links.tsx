import React from 'react';
import { faLink } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';

// https://www.imdb.com/title/tt0434665/


const Links: React.FC<{ item: any }> = ({ item }) => {
    const [externalIds, setExternalIds] = React.useState({
        imdb_id: null
    })

    React.useEffect(() => {
        (async () => {
            try {
                const { data } = await axios.get(`http://localhost:3000/api/v1/tv/${item.id}/links`)
                setExternalIds(data)
            } catch (error) {
                console.error('ERROR', error)
            }
        })()
    }, [item])
    return <>
        <h1>Links</h1>
        <ul className="information__links">
            <li title="homepage"><a href={item?.homepage} target="_blank" rel="noreferrer" ><FontAwesomeIcon icon={faLink} /></a></li>
            <li title="imdb"><a href={"https://www.imdb.com/title/" + externalIds?.imdb_id + "/"} target="_blank" rel="noreferrer" ><FontAwesomeIcon icon={faLink} /></a></li>
        </ul>
    </>
}

export default Links;