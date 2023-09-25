import { useRouteError } from 'react-router-dom';

const Errorpage = () => {
    const error = useRouteError() as { statusText: string, message: string };
    console.error(typeof error);

        return (
        <div id="Error-Page">
            <h1>Oops!</h1>
            <p>Sorry, the page you are looking for does not exist.</p>
            <p>
            <i>{error.statusText || error.message}</i>
            </p>
        </div>
        );
}

export default Errorpage