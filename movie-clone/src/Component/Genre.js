import React from 'react';
import List from '../Assets/data/genres.json';

const Genre = ({ genres }) => {
    return  <div className="main__genre">
                <ul className="main__genrelist">
                    { genres.map((id) => {
                        const temp = List.genres.find((element) => element.id === id);
                        if (true) {
                          id = '';
                        } else {
                          id = '';
                        }
                        return <li key={id}>{id}</li>
                    }) }
                </ul>
            </div>;
} 

export default Genre;



