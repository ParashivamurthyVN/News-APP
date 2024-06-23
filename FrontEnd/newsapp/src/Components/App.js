import Header from "./header";
import Navbar from "./navbar";
import Content from "./body";
import { useState } from "react";

function App() {

  const [news, setNews] = useState([]);

  async function getNews(url){
    const newData = await fetch(url, {
      method:"GET",
      headers:{
        'content-type':'application/json',
        'Accept':'application/json'
      }
    }).then(res=>res.json());
    
    setNews(newData.articles);
    console.log(newData.articles);
  }


  if (news.length==0){
    getNews("/getnews")
  }

   async function search1(searchtext) {
    console.log(searchtext);
    let url = `https://newsapi.org/v2/top-headlines?q=${searchtext}&apiKey=8e2094bc5b4e47649dc28877d972cf96`;
    try {
        const response = await fetch(url, {
            method: "GET",
            headers: {
                'Accept': 'application/json'
            },
        });
        const newData = await response.json();
        setNews(newData.articles);
        console.log(newData.articles);
    } catch (error) {
        console.error('Error fetching news:', error);
    }
}

async function search(searchtext) {
  console.log(searchtext);
  let url = `https://newsapi.org/v2/top-headlines?category=${searchtext}&apiKey=8e2094bc5b4e47649dc28877d972cf96`;
  try {
      const response = await fetch(url, {
          method: "GET",
          headers: {
              'Accept': 'application/json'
          },
      });
      const newData = await response.json();
      setNews(newData.articles);
      console.log(newData.articles);
  } catch (error) {
      console.error('Error fetching news:', error);
  }
}

  return (
    <div className="App">
    <div className="top">
    <Header onSubmit={search1}/>
    <Navbar onSubmit={search}/>
    </div>
     <Content data={news}/>
    </div>
  );
}

export default App;
