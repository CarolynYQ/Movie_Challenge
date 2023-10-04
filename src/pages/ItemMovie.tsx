import { useLocation } from 'react-router-dom';
import { useFetch } from '../hooks/useFetch';

const ItemMovie = () => {
  const { state } = useLocation();
  const { loading, message, data } = useFetch(`${id}`);
  const { ...Movie } = data;

  return (
    <>
      <div className='Item-Movie__container'>
        <img src={IMAGE_API + data.poster_path} alt={data.original_title} />
      </div>
      <div className='Item-Movie__title'>
        <p>{data.original_title}</p>
      </div>
      <div className='Item-Movie__details'>
        <span className='date'>
          <div>
            {data.release_date}
            <p>Year</p>
            </div>
        </span>
        <span className='score'>
          <div>
          `${ Math.round(data.vote_average*10) }%`
          <p>Score</p>
          </div>
        </span>
      </div>
      <div className='Item-Movie__overview'>
        <p>{data.overview}</p>
      </div>

    <h2> single movie</h2>
    </>
  )
}

export default ItemMovie