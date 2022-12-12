import "./App.css";

import { useState, useEffect } from "react";
import DefBar from "./components/DefBar";
import MainContent from "./components/MainContent";
import Results from "./components/Results";
import Footer from "./components/Footer";

function App() {
  const [charList, setCharList] = useState([]);
  const [topChar, setTopChar] = useState([]);
  const [search, setSearch] = useState("");
  const [shift, setShift] = useState(true);
  const [matches, setMatches] = useState("");

  const getTopAnimeChar = async () => {
    const temp = await fetch(
      `https://api.jikan.moe/v4/characters?page=0&limit=15&q=&order_by=favorites&sort=desc`
    )
    const tempData = await temp.json();
    setTopChar(tempData.data);
  };

  useEffect(() => {

    getTopAnimeChar();

  }, []);
  // console.log(topChar);

  const FetchChar = async (query) => {
    const temp =
      await fetch(`https://api.jikan.moe/v4/characters?q=${query}&order_by=fav
orites&sort=desc`);
    const tempData = await temp.json();
    // console.log(tempData.data);
    console.log(tempData.data.length);
     setMatches(tempData.data.length);
    setCharList(tempData.data.slice(0,15));
   
  }
  const HandleSearch = e => {
    e.preventDefault();
    FetchChar(search);
    setShift(false);
    setSearch("");
    // console.log(charList);
  }

  return (
    <div className="App">
      <MainContent HandleSearch={HandleSearch} search={search} matches={matches} setSearch={ setSearch} />
      {shift?<DefBar topChar={topChar} />:
        <Results charList={charList} />}
      <Footer/>
    </div>
  );
}

export default App;
