import React from 'react'
import "./DefBar.css"
function Results({charList}) {
    let key = 200;
  return (
    <div className="Defbar">
      {charList.length!==0?charList.map((char) => (
        <div className="defDiv" key={char.mal_id}>
          <img
            src={char.images.jpg.image_url}
            className="defImg"
            alt={char.name}
          ></img>
          <div className="info">
            <li className="defLi">{char.name}</li>
            {char.nicknames ? (
              <div className="btns">
                {char.nicknames.map((n) => (
                  <button key={key++} className="btn">
                    {n}
                  </button>
                ))}
              </div>
            ) : (
              ""
            )}
          </div>
          <div className="likes">
            <span className="span">♥️{char.favorites}</span>
          </div>

          <a href={char.url} target="_blank" rel="noreferrer" className="go">
            ➡
          </a>
        </div>
      )):<h1 className='defH1'>No Result Found!</h1>}
    </div>
  );
}

export default Results