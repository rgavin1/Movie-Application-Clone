import React from 'react';

const RunTime = ({ runtime }) => {
    return  <ul className="information_runtime">
                { runtime.map((time, id) => {
                    return <li key={id}>{time} mins</li>
                }) }
            </ul>
}

export default RunTime;