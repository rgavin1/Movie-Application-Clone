import React from 'react';

const List = ({ list }) => {
    return  <ul>
                { list.map((item, id) => {
                    return <li style={{ textAlign: 'end', display: 'inline-block' }} key={id}>{item.name }</li>
                }) }
            </ul>
}

const MovieList = ({ details }) => {
    return  <div className="information__tvlist">
                <ul>
                    <li>
                        <span>Belongs To Collection</span><span>{ details.belongs_to_collection ? details.belongs_to_collection : '-' }</span>
                    </li>
                    <li>
                        <span>Budget</span><span>${ details.budget ? details.budget : "-"}</span>
                    </li>
                    <li>
                        <span>Genres</span><span>{ details.genres && <List list={details.genres} />}</span>
                    </li>
                    <li>
                        <span>Languages</span><span>{ details.spoken_languages && <List list={details.spoken_languages} />}</span>
                    </li>
                    <li>
                        <span>Production Companies</span><span>{ details.production_companies &&  <List list={details.production_companies} /> }</span>
                    </li>
                    <li>
                        <span>Production Countries</span><span>{ details.production_countries &&  <List list={details.production_countries} /> }</span>
                    </li>
                    <li>
                        <span>Status</span><span>{details.status}</span>
                    </li>
                    <li>
                        <span>Tagline</span><span>{details.tagline ? details.tagline : '-'}</span>
                    </li>
                    <li>
                        <span>Runtime</span><span>{details.runtime ? details.runtime+' mins' : '-' }</span>
                    </li>
                    <li>
                        <span>Vote Avg</span><span>{details.vote_average}</span>
                    </li>
                    <li>
                        <span>Vote Count</span><span>{details.vote_count}</span>
                    </li>
                </ul>
            </div>
}

export default MovieList;