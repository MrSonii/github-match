import { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./App.css";
import SearchBar from "./components/SearchBar/SearchBar";

function App() {
  const [userName, setUserName] = useState("");
  const navigate = useNavigate();

  const handleSearchClick = () => navigate(`user/${userName}`);
  function handleUserNameChange(event) {
    const { value } = event.target;
    setUserName(value);
  }

  return (
    <div>
      <SearchBar
        onValueChange={handleUserNameChange}
        userName={userName}
        onSearchClick={handleSearchClick}
      />
    </div>
  );
}

export default App;
