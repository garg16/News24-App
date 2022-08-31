import React, {useEffect, useState} from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";
const News=(props)=> {
  
const [articles, setarticles] = useState([]);
const [loading, setloading] = useState(false);
const [page, setpage] = useState(1)
const [totalResults, settotalResults] = useState(0)

  
const capitalize = (word) => {
  const lower = word.toLowerCase();
  return lower.charAt(0).toUpperCase() + lower.slice(1);
}
document.title = "News24 - " + capitalize(props.category);

 const updateNews= async ()=> {
    props.setProgress(0);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=7e647472a2194913bdaa9eb3d43cffd9&page=${page}&pageSize=${props.pageSize}`;
    setloading(true);
    props.setProgress(30);
    let data = await fetch(url);

    let parsedData = await data.json();
    setarticles( parsedData.articles);
    setloading(false);
    settotalResults(parsedData.totalResults);
    props.setProgress(100);
  }
  
  useEffect(() => {
   updateNews(); 
  }, [ ])
  

 
 const fetchMoreData = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=${
      props.country
    }&category=${props.category}&apiKey=7e647472a2194913bdaa9eb3d43cffd9&page=${
     page+1
    }&pageSize=${props.pageSize}`;
    setpage(page+1);
    let data = await fetch(url);
    let parsedData = await data.json();
    setarticles(articles.concat(parsedData.articles))
    settotalResults(parsedData.totalResults);
    setloading(false);
      
    }

    return (
      <>
        <h1
          className="display-4 text-center"
          style={{ margin: "40px", marginTop: "100px" }}
        >
          
          News24 - Top Headlines <br /> {capitalize(
            props.category
          )}
        </h1>
        {loading && <Spinner />}{" "}
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={<Spinner />}
        >
          <div className="container">
            <div className="row">
              {" "}
             
              
                {articles.map((element) => {
                  return (
                    <div className="col-md-4 my-3" key={element.url}>
                      <NewsItem
                        title={element.title}
                        desc={element.description}
                        urlToImage={element.urlToImage}
                        url={element.url}
                        author={element.author}
                        publishedAt={element.publishedAt}
                      />
                    </div>
                  );  })}
            
            </div>{" "}
          </div>{" "}
        </InfiniteScroll>{" "}
      </>
    );
  
            }
 
News.defaultProps = {
  country: "in",
  category: "general",
  pageSize: "8",
};
News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};

export default News;