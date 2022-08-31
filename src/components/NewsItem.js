import React from "react";

const NewsItem = (props)=> {
  

    let { title, desc,urlToImage,url,publishedAt,author } = props;
    return (
      <div className='my-3'> 
        <div className="card">
          <img src={!urlToImage?"https://play-lh.googleusercontent.com/hctyczj6W9AZPTTrhp8PCywK2LVFa13jucUE4Jrl600hfFGKmiRxlsZZi7g2EOMuf3M":urlToImage} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{desc}</p>
            <p className="card-text"><small className="text-muted">By {!author?"Unknown":author} {new Date(publishedAt).toUTCString()}</small></p>
            <a href={url}  rel="noreferrer" target="_blank" className="btn btn-sm btn-dark">
              Read more
            </a>
          </div>
        </div>
      </div>
    );
  
}

export default NewsItem;
