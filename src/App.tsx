import { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/header";
import Main from "./components/main";

const sections = [
  { title: "Home", url: "#" },
  { title: "Posts", url: "#" },
  { title: "About", url: "#" },
  { title: "Contact", url: "#" },
];

interface Post {
  url: string;
  title: string;
  text: string;
  published_date: string;
}

//const url = "https://eduzen.ar/api/";
const url = `${process.env.REACT_APP_URL}`;
const username = `${process.env.REACT_APP_USERNAME}`;
const password = `${process.env.REACT_APP_PASSWORD}`;

function App() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [error, setError] = useState([]);

  useEffect(() => {
    fetch(url, {
      headers: {
        Authorization: `Basic ${btoa(`${username}:${password}`)}`,
      },
    })
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error("Network response was not ok.");
    })
    .then((response) => {
      console.log(response["results"]);
      setPosts(response["results"]);
    })
    .catch((error) => {
      setError(error);
    });
  }, []);

  return (
    <div className="App">
      <Header title="eduzen" sections={sections} />
      <Main title="Posts" posts={posts} />
    </div>
  );
}

export default App;
