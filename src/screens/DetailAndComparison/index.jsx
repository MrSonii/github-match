import { useParams, useNavigate } from "react-router-dom";
import { get } from "axios";
import { useEffect, useState } from "react";

import UserDetail from "../../components/UserDetails/UserDetail";
import SearchBar from "../../components/SearchBar/SearchBar";

import "./styles.css";

export default function DetailPage() {
  const [apiData, setApiData] = useState();
  const [apiDataSecond, setApiDataSecond] = useState();
  const [searchElem, setSearchElem] = useState(false);
  const [split, setSplit] = useState("display-hide");
  const [secUsername, setSecUsername] = useState("");

  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      try {
        const response = await get(`https://api.github.com/users/${params.id}`);
        const { data } = response;

        setApiData(data);
      } catch (err) {
        navigate(-1);

        alert("Invalid-UserName");
      }
    })();
  }, []);

  function handleCompareScreen() {
    split === "display-hide" ? setSplit("flex-50") : setSplit("display-hide");
    searchElem ? setSearchElem(false) : setSearchElem(true);
  }

  const handleSearchClick = async () => {
    try {
      const resp = await get(`https://api.github.com/users/${secUsername}`);
      const { data } = resp;

      setApiDataSecond(data);
      setSearchElem(false);
    } catch (err) {
      alert("Invali-UserName");
    }
  };

  function handleUserNameChange(event) {
    const { value } = event.target;

    setSecUsername(value);
  }

  if (!apiData) {
    return <h1 className="main display-center">Loading...</h1>;
  }

  return (
    <div className="main">
      <h1 className="t-center z-index">Detail-Page</h1>
      <div className="all-details">
        <UserDetail apiData={apiData} split={split} />
        {searchElem && (
          <SearchBar
            split={split}
            onValueChange={handleUserNameChange}
            onSearchClick={handleSearchClick}
          />
        )}
        {!searchElem && apiDataSecond && (
          <UserDetail apiData={apiDataSecond} split={split} />
        )}
      </div>
      <button onClick={handleCompareScreen}>
        Start/Close Profile comparison with another Github User
      </button>
    </div>
  );
}
