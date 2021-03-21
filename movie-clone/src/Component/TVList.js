import React from 'react';
import Creators from './Creators';

const TVList = ({ details }) => {
    return  <div className="information__tvlist">
                <ul>
                    <li>
                        <span>Creators</span><span><Creators item={details.created_by} /></span>
                    </li>
                    <li>
                        <span>Run Time</span><span></span>
                    </li>
                    <li>
                        <span>First Aired</span><span>{details.last_air_date}</span>
                    </li>
                    <li>
                        <span>Last Aired</span><span>{}</span>
                    </li>
                    <li>
                        <span>Genres</span><span></span>
                    </li>
                    <li>
                        <span>Languages</span><span></span>
                    </li>
                    <li>
                        <span>Networks</span><span></span>
                    </li>
                    <li>
                        <span>No. of Episodes</span><span>{details.number_of_episodes}</span>
                    </li>
                    <li>
                        <span>No. of Seasons</span><span>{details.number_of_seasons}</span>
                    </li>
                    <li>
                        <span>Production Companies</span><span></span>
                    </li>
                    <li>
                        <span>Production Countries</span><span></span>
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