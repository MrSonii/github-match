import { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./styles.css";
import SearchBar from "../../components/SearchBar/SearchBar";

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
        onSearchClick={handleSearchClick}
      />
    </div>
  );
}

export default App;
