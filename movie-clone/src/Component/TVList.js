import React from 'react';
import Networks from './Networks';
import RunTime from './RunTime';

const List = ({ list }) => {
    return  <ul>
                { list.map((item) => {
                    return <li style={{ textAlign: 'end', display: 'inline-block' }} key={item.id}>{item.name}</li>
                }) }
            </ul>
}


const TVList = ({ details }) => {
    return  <div className="information__tvlist">
                <ul>
                    <li>
                        <span>Creators</span><span>{ details.created_by && <List list={details.created_by} /> }</span>
                    </li>
                    <li>
                        <span>Run Time</span><span>{ details.episode_run_time && <RunTime runtime={details.episode_run_time} />}</span>
                    </li>
                    <li>
                        <span>First Aired</span><span>{details.first_air_date}</span>
                    </li>
                    <li>
                        <span>Last Aired</span><span>{details.last_air_date}</span>
                    </li>
                    <li>
                        <span>Genres</span><span>{ details.genres && <List list={details.genres} />}</span>
                    </li>
                    <li>
                        <span>Languages</span><span>{ details.spoken_languages && <List list={details.spoken_languages} />}</span>
                    </li>
                    <li>
                        <span>Networks</span><span>{ details.networks && <Networks networks={details.networks} />}</span>
                    </li>
                    <li>
                        <span>No. of Episodes</span><span>{details.number_of_episodes}</span>
                    </li>
                    <li>
                        <span>No. of Seasons</span><span>{details.number_of_seasons}</span>
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
                        <span>Tagline</span><span>{details.tagline}</span>
                    </li>
                    <li>
                        <span>Type</span><span>{details.type}</span>
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

export default TVList;