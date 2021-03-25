import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="not-found">
        <h2>Error</h2>
        <p>This page can not be found</p>
        <Link to='/'>Back to the homepage...</Link>
        </div>
      );
}
 
export default ErrorPage;