import {ErrorType} from '../types/main';

function Error({ statusCode }: {statusCode: Number}) {
  return (
    <p className="error">
      {statusCode
        ? `An error occured on the server. Status: ${statusCode}`
        : 'An error occurrred on the client.'}
    </p>
  )
}
Error.getInitialProps = ({ res, error }: {res: Response, error: ErrorType}) => {
  const statusCode = res ? res.status : error ? error.statusCode : 404
  return {statusCode}
};

export default Error;
