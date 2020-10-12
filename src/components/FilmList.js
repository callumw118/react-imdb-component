import React from 'react';
import Film from './Film';
import { render } from '@testing-library/react';

export default function FilmList(props){
    const filmList = props.films.map(film => {
        return <Film title={film.name} key={film.id} url={film.url}/>
    })

    return (
        <ul>
            {filmList}
        </ul>
    )
}