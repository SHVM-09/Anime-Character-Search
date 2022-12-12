import React from 'react'
import "./DefBar.css"
function DefBar({ topChar }) {
  let key=10000000
  return (
    <div className="Defbar">
      {topChar.map((char) => (
        <div className="defDiv" key={char.mal_id}>
          <img
            src={char.images.jpg.image_url}
            className="defImg"
            alt={char.name}
          ></img>
          <div className="info">
            <li className="defLi">{char.name} </li>

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
           
          </div >
 <div className='likes'>
              <span className="span">♥️{char.favorites}</span>
            </div>
          <a href={char.url} target="_blank" rel="noreferrer" className="go">
            ➡
          </a>
        </div>
      ))}
    </div>
  );
}

export default DefBar