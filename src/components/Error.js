import { useRouteError } from 'react-router';
const Error = () => {
    const err = useRouteError();
    console.log(err);
    return (
        <div>
            <h1>Oops! Something went wrong.</h1>
            <p>Please try again later.</p>
            <p>{err.status} : {err.statusText}</p>
        </div>
    );
}

export default Error;