import React from 'react';
import './App.css';
import { useState } from 'react';
import html2canvas from 'html2canvas';

function App() {


  const [line1, setLine1] = useState('');
  const [line2, setLine2] = useState('');
  const [image, setImage] = useState('');

  const onChangeLine1 = function (event) {
    setLine1(event.target.value);
  }

  const onChangeLine2 = function (event) {
    setLine2(event.target.value);
  }
  const onChangeImage = function (event) {
    setImage(event.target.value);
  }

  const onClickExport = function (event) {
    alert("Exporting...");
    html2canvas(document.querySelector("#meme")).then(canvas => {
      var img = canvas.toDataURL("image/png");
      var link = document.createElement('a');
      link.download = "meme.png";
      link.href = img;
      link.click();
    });
  }


  return (
    <div className="App">
      <select onChange={onChangeImage}>
        <option value="1"> meme cursed #1</option>
        <option value="2"> meme cursed #2</option>
        <option value="3"> meme cursed #3</option>
        <option value="4"> meme cursed #4</option>
        <option value="5"> meme cursed #5</option>
        <option value="6"> meme cursed #6</option>
        <option value="tapia7"> meme cursed #7</option>
      </select> <br />

      <input onChange={onChangeLine1} type="text" placeholder='line 1' /> <br />
      <input onChange={onChangeLine2} type="text" placeholder='line 2' /> <br />
      <button onClick={onClickExport}>Export</button>

      <div className='meme' id='meme'>
        <span>{line1}</span> <br />
        <span>{line2}</span>
        <img src={"/img/" + image + ".jpg"} />
      </div>

    </div>
  );
}

export default App;

