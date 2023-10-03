import { Movies } from '../pages/Catalog'

const Movie = ({title, poster_path}: Movies) => {
    const ImagesApi = "https://image.tmdb.org/t/p/w500";
    return (
        <>
        {/* <div className='Main-Message__error'>error</div> */}
        <div className='Main-container__movie'>
            <a href=''>
                <span>
                    <img
                    src={ImagesApi + poster_path}
                    alt={title}
                    />
                </span>
            </a>
            <div className="Main-container__movie-info">
                <h3>{title}</h3>
            </div>
        </div>
    </>
    )
}

export default Movie