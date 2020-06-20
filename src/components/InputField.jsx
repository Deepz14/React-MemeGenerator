import React, { useState, useEffect } from "react";
import axios from "axios";
import { Memes } from "./Memes";

export const InputField = () => {
  const [items, setItems] = useState([]);
  const [randomMeme, setRandomMeme] = useState("http://i.imgflip.com/1bij.jpg");
  const [topText, setTopText] = useState("");
  const [btmText, setBtmText] = useState("");

  useEffect(() => {
    axios("https://api.imgflip.com/get_memes")
      .then(res => {
        const { memes } = res.data.data;
        setItems(memes);
      })
      .catch(Error => console.log(Error));
  }, []);

  const handleSubmit = e => {
    e.preventDefault();
    const randomNum = Math.floor(Math.random() * items.length);
    setRandomMeme(items[randomNum].url);
  };

  return (
    <div className="container">
      <form className="form-inp m-3" onSubmit={handleSubmit}>
        <input
          type="text"
          className="form-control w-50 mb-2"
          value={topText}
          onChange={e => setTopText(e.target.value)}
          placeholder="EnterTop text"
        />
        <input
          type="text"
          className="form-control w-50 mb-2"
          value={btmText}
          onChange={e => setBtmText(e.target.value)}
          placeholder="EnterBottom text"
        />
        <button type="submit" className="btn btn-outline-primary">
          Generate
        </button>
      </form>
      <Memes randomMeme={randomMeme} topText={topText} btmText={btmText} />
    </div>
  );
};
