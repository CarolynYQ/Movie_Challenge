import { FC } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import DefaultImage from './../assets/NoImage.png'

export interface Movie {
    id: number;
    original_title: string;
    poster_path: string;
    overview: string;
    vote_average: number;
    release_date: string;
    genre_ids: string[];
}

interface Props {
    data: Movie;
}

const ElementCatalog: FC<Props> = ({data}) => {
    const navigate = useNavigate();
    const viewItem = () => {
        navigate(`/catalog/${data.id}`, { state: data })
    }
    const IMAGE_API = "https://image.tmdb.org/t/p/w500";
    const cover = data.poster_path === null ? DefaultImage : IMAGE_API + data.poster_path;
    return (
        <>
        <Link to={`${data.id}`}>
        <div className='Main-container__movie'>
            <span>
                <img
                className='Main-container__poster'
                src={cover}
                alt={data.original_title}
                />
            </span>
            <div className="Main-container__movie-info">
                <h3>{data.original_title}</h3>
            </div>
        </div>
        </Link>
    </>
    )
}

export default ElementCatalog