import React from 'react'
import loaderSrc from './assets/loader.gif'

const Loader = (props) => (
    <div className="search-handling">
        <img 
         style={{width: 75}}
         alt="loader icon"
         src={loaderSrc} />
        <p>Loading...</p>
    </div>
);

export default Loader;