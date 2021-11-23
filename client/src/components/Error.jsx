import React from "react";
import { NavLink } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="not-found">
        <h2>Error</h2>
        <p>This page can not be found</p>
        <NavLink to="/">Back to the home page...</NavLink>
        </div>
      );
}
 
export default ErrorPage;