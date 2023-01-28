import React from 'react';
import { faLink } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faImdb, faFacebook, faInstagram, faWikipediaW } from '@fortawesome/free-brands-svg-icons'
import axios from 'axios';

// https://www.imdb.com/title/tt0434665/
// https://www.instagram.com/wednesdaynetflix/
// https://twitter.com/wednesdayaddams
// https://www.wikidata.org/wiki/Q105553568
// https://www.facebook.com/netflixvalhalla/

const ExternalLinks: { [key: string]: any } = {
    imdb_id: {
        title: "IMDB",
        url: "https://www.imdb.com/title/",
        icon: faImdb
    },
    freebase_mid: null,
    freebase_id: null,
    tvdb_id: null,
    tvrage_id: null,
    facebook_id: {
        title: "Facebook",
        url: "https://www.facebook.com/",
        icon: faFacebook
    },
    instagram_id: {
        title: "Instagram",
        url: "https://www.instagram.com/",
        icon: faInstagram
    },
    twitter_id: {
        title: "Twitter",
        url: "https://twitter.com/",
        icon: faTwitter
    },
    wikidata_id: {
        title: "Wiki Data",
        url: "https://www.wikidata.org/wiki/",
        icon: faWikipediaW
    }
}

type ExternalIds = {
    imdb_id: string | null;
    freebase_mid: string | null;
    freebase_id: string | null;
    tvdb_id: number | null;
    tvrage_id: number | null;
    facebook_id: string | null;
    instagram_id: string | null;
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
    instagram_id: null,
    twitter_id: null,
    id: null,
    wikidata_id: null
}

const socialMediaLink = (linkName: string, linkId: string): JSX.Element => {
    const { title, url, icon } = ExternalLinks[linkName]

    return <li title={title}><a href={url + linkId} target="_blank" rel="noreferrer" ><FontAwesomeIcon icon={icon as any} /></a></li>
}

const ListOfExternalLinks = (externalIds: ExternalIds): JSX.Element[] => {
    const { imdb_id, facebook_id, instagram_id, twitter_id, wikidata_id } = externalIds

    let Links = []

    if (imdb_id) Links.push(socialMediaLink("imdb_id", imdb_id))

    if (facebook_id) Links.push(socialMediaLink("facebook_id", facebook_id))

    if (instagram_id) Links.push(socialMediaLink("instagram_id", instagram_id))

    if (twitter_id) Links.push(socialMediaLink("twitter_id", twitter_id))

    if (wikidata_id) Links.push(socialMediaLink("wikidata_id", wikidata_id))

    return Links
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

    return <>
        <h1>Links</h1>
        <ul className="information__links">
            <li title="homepage"><a href={item?.homepage} target="_blank" rel="noreferrer" ><FontAwesomeIcon icon={faLink} /></a></li>
            {ListOfExternalLinks(externalIds).map((link: JSX.Element) => link)}
        </ul>
    </>
}

export default Links;