import React from 'react'
import {Link} from 'react-router-dom'

const Error = () => {
    return (
      <div id="notfound">
        <div className="wrap-notfound">
          <div className="notfound-item1">
            <p>404</p>
          </div>
          <div className="notfound-item2">
            <p>Page not Found</p>
          </div>
          <div className="notfound-item3">
            <p>
              The page you are looking for might have been removed had its name
              changed or is temporarily unavailable.
            </p>
          </div>
          <div className="notfound-item4">
            <Link to="/">Home Page</Link>
          </div>
        </div>
      </div>
    );
}

export default Error
