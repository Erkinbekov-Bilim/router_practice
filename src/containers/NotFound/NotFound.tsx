import React from 'react';
import './NotFound.css';

const NotFound = () => {
  return (
    <>
      <div className="not-found">
        <h1 className="not-found-title">404 - Page Not Found</h1>
        <div className='not-found-img-block'>
          <img
            className="not-found-img"
            src="/src/assets/photos/sad_or_angry_smile.png"
            alt="404"
          />
        </div>
      </div>
    </>
  );
};

export default NotFound;
