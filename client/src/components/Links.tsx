import React from 'react';
import { faLink } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';

// https://www.imdb.com/title/tt0434665/
// https://www.instagram.com/wednesdaynetflix/
// https://twitter.com/wednesdayaddams
// https://www.wikidata.org/wiki/Q105553568

const ExternalBaseUrls = {
    imdb_id: "https://www.imdb.com/title/",
    freebase_mid: null,
    freebase_id: null,
    tvdb_id: null,
    tvrage_id: null,
    facebook_id: null,
    instagram_id: "https://www.instagram.com/",
    twitter_id: "https://twitter.com/",
    wikidata_id: "https://www.wikidata.org/wiki/"
}

type ExternalIds = {
    imdb_id: string | null;
    freebase_mid: string | null;
    freebase_id: string | null;
    tvdb_id: number | null;
    tvrage_id: number | null;
    facebook_id: string | null;
    instagram_id: string;
    twitter_id: string | null;
    id: number | null;
    wikidata_id?: string | null;
}

const baseExternalIds: ExternalIds = {
    imdb_id: null,
    freebase_mid: null,
    freebase_id: null,
    tvdb_id: null,
    tvrage_id: null,
    facebook_id: null,
    instagram_id: "",
    twitter_id: null,
    id: null,
    wikidata_id: null
}

const Links: React.FC<{ item: any }> = ({ item }) => {
    const [externalIds, setExternalIds] = React.useState<ExternalIds>(baseExternalIds)

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

    console.log('externalIds', externalIds)
    console.log('ExternalBaseUrls', ExternalBaseUrls["instagram_id"])
    return <>
        <h1>Links</h1>
        <ul className="information__links">
            <li title="homepage"><a href={item?.homepage} target="_blank" rel="noreferrer" ><FontAwesomeIcon icon={faLink} /></a></li>
            <li title="imdb"><a href={"https://www.imdb.com/title/" + externalIds?.imdb_id + "/"} target="_blank" rel="noreferrer" ><FontAwesomeIcon icon={faLink} /></a></li>
            <li title="instagram"><a href={"https://www.instagram.com/" + externalIds?.instagram_id + "/"} target="_blank" rel="noreferrer" ><FontAwesomeIcon icon={faLink} /></a></li>
            <li title="twitter"><a href={"https://twitter.com/" + externalIds?.twitter_id + "/"} target="_blank" rel="noreferrer" ><FontAwesomeIcon icon={faLink} /></a></li>
        </ul>
    </>
}

export default Links;