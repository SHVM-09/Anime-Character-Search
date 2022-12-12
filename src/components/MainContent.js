import React from 'react'
import "./MainContent.css";
import Header from "./Header";


function MainContent(props) {
   
  return (
    <main className="view">
      <div className="main-head">
        <Header />
        <form className="search-box" onSubmit={props.HandleSearch} action="">
          <input
            type="search"
            placeholder="Search for Anime Character..."
            className="input"
            required
            value={props.search}
            onChange={(e) => props.setSearch(e.target.value)}
          />
          <button className="btnSearch" onClick={props.HandleSearch}>
            Search
          </button>
          {props.matches > 0 ? (
            <h5 className="matchline">Total {props.matches} matches Found!</h5>
          ) : (
            <h5 className="matchline">Total 0 matches Found!</h5>
          )}
        </form>
      </div>
    </main>
  );
}

export default MainContent