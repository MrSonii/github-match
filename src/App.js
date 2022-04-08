import { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./App.css";

function App() {
  const [userName, setUserName] = useState("");
  const navigate = useNavigate();

  const handleSearchClick = () => navigate(`user/${userName}`);
  function handleUserNameChange(event) {
    const {value} = event.target;
    setUserName(value);
  }

  return (
    <div className="body">
      <label htmlFor="search-bar">Github-Username: </label>
      <input
        type="text"
        id="search-bar"
        className="search-bar"
        placeholder="typeUserName"
        value={userName}
        onChange={handleUserNameChange}
      ></input>
      <button className="search-button" onClick={handleSearchClick}>
        &#128269;
      </button>
    </div>
  );
}

export default App;
