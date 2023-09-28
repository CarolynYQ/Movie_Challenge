const API = async () => {
    const URL_INIT = 'https://api.themoviedb.org/3/trending/movie/day?language=en-US';
    //const API_KEY = '2d2fa9874d990d307f10548bbf4393c3';
    //const POSTERS = 'https://image.tmdb.org/t/p/';
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer 2d2fa9874d990d307f10548bbf4393c3'
        }
    };

    const fetchMovies = async (URL: string, options: RequestInit) => {
        try {
            const response = await fetch(URL, options);

            if (response.status !== 200) {
                return null;
            }

            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const data: { [key: string]: any } = await response.json();
            return data.results
            //console.log(response)

        } catch (error) {
            console.error('error:' + error);
        }
    
    }

    return fetchMovies(URL_INIT, options);
}

export default API