import express from "express";
import bodyParser from "body-parser";


const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(express.json());

const getNews = async () => {
    return new Promise((resolve, reject) => {
      try {
    const newData = fetch("https://newsapi.org/v2/top-headlines?language=en&apiKey=8e2094bc5b4e47649dc28877d972cf96", {
        method: "GET",
        headers: {
            'content-type': 'application/json',
            'Accept': 'application/json'
        },
    }).then(res => res.json());
    resolve(newData);
  }
  catch(err){
    reject(err);
  }
    });
  }
  
  app.get("/getnews", async (req, res) => {
    getNews().then((data)=>{res.send(data);});
  });

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
  });