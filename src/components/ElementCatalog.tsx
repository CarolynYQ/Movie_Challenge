import { FC } from 'react';

export interface Movie {
    id?: number;
    original_title: string;
    poster_path: string;
    overview: string;
    vote_average: number;
}

interface Props {
    data: Movie;
}

const ElementCatalog: FC<Props> = ({data}) => {
    const ImagesApi = "https://image.tmdb.org/t/p/w500";
    return (
        <>
        {/* <div className='Main-Message__error'>error</div> */}
        <div className='Main-container__movie'>
            <a href=''>
                <span>
                    <img
                    src={ImagesApi + data.poster_path}
                    alt={data.original_title}
                    />
                </span>
            </a>
            <div className="Main-container__movie-info">
                <h3>{data.original_title}</h3>
            </div>
        </div>
    </>
    )
}

export default ElementCatalog