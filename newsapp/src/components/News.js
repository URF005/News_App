import React, { useEffect, useState } from "react";
import Newsitem from "./Newsitem";
import Spinner from "./Spinner";
export default function News() {
  const [articles, setarticles] = useState([]);
  const [loading, setloading] = useState(false);
  const [page, setpage] = useState(1);

  const updatenews = async () => {
    let url =
      "https://newsapi.org/v2/top-headlines?country=us&apiKey=7b218961046c4921915c8832a0563ae7&page=1&pageSize=4";
    setloading(true);
    let data = await fetch(url);
    let pasrsedata = await data.json();
    setarticles(pasrsedata.articles);
    setloading(false);
  };
  useEffect(() => {
    updatenews();
  }, []);
  const handlenextclick = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=7b218961046c4921915c8832a0563ae7&page=${
      page + 1
    }&pageSize=4`;
    setloading(true);
    let data = await fetch(url);
    let pasrsedata = await data.json();
    setpage(page + 1);
    setarticles(pasrsedata.articles);
    setloading(false);
  };
  const handlpreclick = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=7b218961046c4921915c8832a0563ae7&page=${
      page - 1
    }&pageSize=4`;
    setloading(true);
    let data = await fetch(url);
    let pasrsedata = await data.json();
    setpage(page - 1);
    setarticles(pasrsedata.articles);
    setloading(false);
  };
  return (
    <div className="container">
      <h2 className=" text-center" style={{marginTop:'70px'}}>Top Headlines</h2>
      {loading && <Spinner />}

      <div className="row">
        {!loading &&
          articles.map((element) => {
            return (
              <div className="col-md-4 mt-4" key={element.url}>
                <Newsitem
                  title={element.title}
                  discription={element.description}
                  imgurl={element.urlToImage}
                  newsurl={element.url}
                  author={element.author}
                  date={element.publishedAt}
                />
              </div>
            );
          })}
      </div>
      <div className="container d-flex justify-content-between mb-2 mt-2">
        <button
          disabled={page <= 1}
          type="button"
          className="btn btn-dark"
          onClick={handlpreclick}
        >
          &larr;
        </button>
        <button
          type="button"
          className="btn btn-dark"
          onClick={handlenextclick}
          disabled={page === 9}
        >
          &rarr;
        </button>
      </div>
    </div>
  );
}
