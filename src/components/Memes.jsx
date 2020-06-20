import React from "react";

export const Memes = ({ randomMeme, topText, btmText }) => {
  return (
    <div className="container meme-container mt-4">
      <h5 className="top-text">{topText}</h5>
      <div className="img-container">
        <img src={randomMeme} alt="problems" width="75%" />
      </div>
      <h5 className="btm-text">{btmText}</h5>
    </div>
  );
};
