import { useState } from 'react';
import { TRENDING_MOVIES, SEARCH_MOVIE, useFetch } from '../hooks/useFetch';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import ElementCatalog from '../components/ElementCatalog';

const Catalog = () => {
    const [searchText, setSearchText] = useState('');
    const [searchParams, setSearchParams] = useState(TRENDING_MOVIES);
    const { data, message } = useFetch(searchParams);
    console.log(data)
        return (
            <>
                <Header brand='Muvie Box' />
                <SearchBar onTriggerSearch={() => setSearchParams(`${SEARCH_MOVIE}${searchText}`)} 
                onSearchChange={(text) => { setSearchText(text)
                    if(text === '') {
                        setTimeout(() => {
                            setSearchParams(TRENDING_MOVIES);
                        }, 2000);
                }}}/>
                <main className='Main'>
                {/* {loading && <p>'Loading...'</p>} */}
                {data.length > 0 ? (
                    data.map((movie) => <ElementCatalog data={movie} key={movie.id} />)
                ) : (
                    <p>{message}</p>
                )}
                </main>
            </>
        );
};

export default Catalog;


