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
    searchElem ? setSearchElem(false) : setSearchElem(true);

    setApiDataSecond(undefined);
  }

  const handleSearchClick = async () => {
    try {
      const resp = await get(`https://api.github.com/users/${secUsername}`);
      const { data } = resp;

      setApiDataSecond(data);
      setSearchElem(false);
    } catch (err) {
      alert("Invalid-UserName");
    }
  };

  function handleUserNameChange(event) {
    const { value } = event.target;

    setSecUsername(value);
  }

  if (!apiData) {
    return <h1 className="main display-center">Loading...</h1>;
  }

  const split = searchElem === true ? "flex-50" : "display-hide";

  return (
    <div className="main">
      <h1 className="t-center z-index">Detail-Page</h1>
      <div className="all-details">
        <UserDetail apiData={apiData} split={split} />
        {searchElem === true && (
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
