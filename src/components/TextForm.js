import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");
  const [searchText, setSearchText] = useState("");
  const [replaceText, setReplaceText] = useState("");

  const toUpper = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };

  const toLower = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };

  const toggleCase = () => {
    var newSplit = [];
    var split = text.split(" ");
    for (var i = 0; i < split.length; i++) {
      newSplit.push(
        split[i].charAt(0).toLowerCase() + split[i].slice(1).toUpperCase()
      );
    }
    let newText = newSplit.join(" ");
    setText(newText);
  };

  const capitalizeWord = () => {
    var newSplit = [];
    var split = text.split(" ");
    for (var i = 0; i < split.length; i++) {
      newSplit.push(
        split[i].charAt(0).toUpperCase() + split[i].slice(1).toLowerCase()
      );
    }
    let newText = newSplit.join(" ");
    setText(newText);
  };

  const alternateCase = () => {
    var chars = text.toLowerCase().split("");
    console.log(chars);
    for (var i = 0; i < chars.length; i += 2) {
      chars[i] = chars[i].toUpperCase();
    }
    // var newSplit = [];
    // var newstrarr = [];
    // var split = text.split(" ");
    // for (var i = 0; i < split.length; i++) {
    //   split[i].toUpperCase();
    //   var newsplitstr = split[i].split(""); //[W, A ,Q]
    //   for (var j = 0; j < newsplitstr.length; j += 2) {
    //     newstrarr.push(newsplitstr[j].toLowerCase());
    //   }
    //   newSplit.push(newstrarr.join(""));
    // }
    let newText = chars.join("");
    setText(newText);
  };

  function wordCount() {
    if (!text.trim().length) {
      return 0;
    }
    return text.trim().split(/[\s]+|--/).length;
  }

  function charCount() {
    var x = text.split("");
    var y = x.filter((str) => str.trim() !== " " && str.trim());
    return y.length;
  }

  // function countVowels() {
  //   var x = [];

  //   for (var i = 0; i < text.length; i++) {
  //     if (
  //       text.charAt(i) === "a" ||
  //       text.charAt(i) === "e" ||
  //       text.charAt(i) === "i" ||
  //       text.charAt(i) === "o" ||
  //       text.charAt(i) === "u" ||
  //       text.charAt(i) === "A" ||
  //       text.charAt(i) === "E" ||
  //       text.charAt(i) === "I" ||
  //       text.charAt(i) === "O" ||
  //       text.charAt(i) === "U"
  //     ) {
  //       x.push(text[i]);
  //     }
  //   }

  //   return x.length;
  // }

  var textReplace = () => {
    var regEx = new RegExp(`(?<=^|\\s)${searchText}(?=\\s|$)`, "g");
    let newText = text.replace(regEx, replaceText);
    setText(newText);
  };

  const eventhandling = (event) => {
    setText(event.target.value);
  };

  const eventhandlingSearch = (event) => {
    setSearchText(event.target.value);
  };

  const eventhandlingReplace = (event) => {
    setReplaceText(event.target.value);
  };

  const handlePaste = () => {
    if (navigator.clipboard) {
      navigator.clipboard.readText().then((clipboardText) => {
        setText((text) => text + clipboardText);
      });
    } else {
      props.showAlert(
        "Clipboard API not supported on this platform. Please try another method.",
        "warning"  
      );

    }
  };

  const handleCopy = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text);
    } else {
     setInterval(()=>{
      props.showAlert(
        "Clipboard API not supported on this platform. Please try another method.",
        "warning"  
      );

     },1500)
    }
  };

  const handleClear = () => {
    setText("");
  };


  return (
    <>
    <div className={`my-4`}>
      <div className="container">
        <div className="mx-2">
          <h1>Welcome to Text Tweaker!</h1>
          <p className="text-secondary">
            {" "}
            <i>
              "Text Tweaker is a simple free online tool that converts any text
              to either lower case, upper case, toggle case, Capital case,
              alternate case, or replace any word with specific word. It helps
              you to find the statistics of your text."
            </i>
          </p>
          {/* <input 
            className="form-control-lg me-2 mx-4"
            type="search"
            placeholder="Search for a word"
            aria-label="Search"
          />

          <button className="btn btn-primary font-weight-bold"  type="button">Search</button> */}
          <h4 className={`text-{props.mode}`}>Input in the text area below:</h4>
          <textarea
            className={`form-control border border-${
              props.mode === "light" ? "dark" : "light"
            } my-3`}
            value={text}
            placeholder="Enter or Paste Text Here"
            onChange={eventhandling}
            id="exampleFormControlTextarea1"
            rows="8"
            data-mode={props.mode}
            style={{
              backgroundColor: props.mode === "light" ? "white" : "#212529",
              color: props.mode === "light" ? "#212529" : "white",
            }}
          ></textarea>

          <p className="my-3">
            <span className="mx-1">
              <b>{wordCount()}</b> Words
            </span>
            <span className="mx-1">
              <b>{charCount()}</b> Characters{" "}
            </span>
            {/* <span><b>{countVowels()}</b> Vowels{" "}</span> */}
          </p>
        </div>
        <div className="btn btn-group container">
          <button className="btn btn-primary" onClick={handleCopy}>
            Copy all text
          </button>

          <button className="btn btn-success" onClick={handlePaste}>
            Paste in input
          </button>
          <button className="btn btn-danger " onClick={handleClear}>
            Clear all text
          </button>
        </div>{" "}
        <br />
        <div className="my-3 container">
          <button
            className={`btn btn-${
              props.mode === "light" ? "dark" : "light"
            } my-2 `}
            onClick={toUpper}
          >
            UpperCase
          </button>
          <button
            className={`btn btn-${
              props.mode === "light" ? "dark" : "light"
            }  my-2 mx-2`}
            onClick={toLower}
          >
            LowerCase
          </button>
          <button
            className={`btn btn-${
              props.mode === "light" ? "dark" : "light"
            } my-2`}
            onClick={toggleCase}
          >
            ToggleCase
          </button>
          <button
            className={`btn btn-${
              props.mode === "light" ? "dark" : "light"
            }  my-2 mx-2`}
            onClick={capitalizeWord}
          >
            Capitalize Word
          </button>
          <button
            className={`btn btn-${
              props.mode === "light" ? "dark" : "light"
            } my-2`}
            onClick={alternateCase}
          >
            AlternateCase
          </button>{" "}
        </div>
        <div className="mx-2">
        <h4 className={`text-{props.mode}`}>Replace word:</h4>

          <form className="d-md-flex my-2" role="search">

            <input
              className={`form-control border border-${
                props.mode === "light" ? "dark" : "light"
              } me-2 my-2`}
              type="search"
              onChange={eventhandlingSearch}
              placeholder="Type word here"
              aria-label="Search"
              data-mode={props.mode}
              style={{
                backgroundColor: props.mode === "light" ? "white" : "#212529",
                color: props.mode === "light" ? "#212529" : "white",
              }}
            />

            <input
              className={`form-control border border-${
                props.mode === "light" ? "dark" : "light"
              } me-2 my-2`}
              type="search"
              onChange={eventhandlingReplace}
              placeholder="Replace with"
              aria-label="Search"
              data-mode={props.mode}
              style={{
                backgroundColor: props.mode === "light" ? "white" : "#212529",
                color: props.mode === "light" ? "black" : "white",
              }}
            />
            <button
              className={`btn btn-${
                props.mode === "light" ? "dark" : "light"
              } my-2`}
              type="button"
              onClick={textReplace}
            >
              Replace
            </button>
          </form>
          <p>
            Average estimated time for reading is{" "}
            <b>{Math.round(wordCount() / 4.5)}</b> sec or{" "}
            <b>{Math.round(wordCount() / 4.5 / 60)}</b> min
          </p>

          <h3>Preview of Your Text:</h3>
          <div className="container bg-clr"> <p style={{ whiteSpace: "pre-wrap" }}>{text}</p></div>
         
          <br />
          <br />
        </div>
      </div>
    </div>
    </>
  );
}
