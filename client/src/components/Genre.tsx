import React from 'react';
// import List from '../assets/data/genres.json';

const Genre: React.FC<{ genres: any }> = ({ genres }) => {
    return  <div className="main__genre">
                {/* <ul className="main__genrelist">
                    { genres.map((termid, number) => {
                        const term = List.genres.find((element) => element.id === termid);
                        return <li key={number}>{term.name}</li>
                    }) } 
                </ul>*/}
            </div>;
} 

export default Genre;



