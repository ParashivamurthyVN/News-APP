function Content(props) {
    const { data } = props;
  
    function NewsCard({ data, index }) {
      // Console log the image URL to debug
      // console.log(`NewsCard ${index} - content:`, data.content || data.description);
     let date=data.publishedAt.substring(8,10)+"-"+data.publishedAt.substring(5,7)+"-"+data.publishedAt.substring(0,4);
      return (
        data.urlToImage && <div className="card" key={index}>
           <div>
            <img src={data.urlToImage} alt="NewsImage" />
            </div>
          <div className="rightCard">
           <span className="titleSpan">{data.title}</span>
           <div className="authorLine"> 
            {data.author && <span><span className="newsSpan">News</span> by {data.author}</span>}
            {date && <span> / {date}</span>}
            </div>
            <span className="contentSpan">{data.content || data.description}</span>
            {data.url && <a className="morelink" href={data.url}>Read more at {data.source.name && <span className="sourceSpan">{data.source.name}</span>}</a>}
          </div>
        </div>
      );
    }
  
    return (
      <div className="content">
        {data.map((item, index) => (
          <NewsCard key={index} data={item} index={index} />                                                    
        ))}
      </div>
    );
  }
  
  export default Content;
  