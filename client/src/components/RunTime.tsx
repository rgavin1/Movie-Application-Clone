import React from 'react';

const RunTime: React.FC<{ runtime: any }> = ({ runtime }) => {
    return  <ul className="information_runtime">
        {runtime.map((time: any, id: any) => {
                    return <li key={id}>{time} mins</li>
                }) }
            </ul>
}

export default RunTime;