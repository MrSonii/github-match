import { useParams, useNavigate } from "react-router-dom";
import { get } from "axios";
import { useEffect, useState } from "react";

import UserDetail from "../../components/UserDetails/UserDetail";
import "./styles.css";

export default function DetailPage() {
  const [apiData, setApiData] = useState();

  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      try {
        const response = await get(`https://api.github.com/users/${params.id}`);
        const { data } = response;
        console.log(data);
        setApiData(data);
      } catch (err) {
        navigate(-1);
        alert("Invalid-UserName");
      }
    })();
  }, []);

  if (apiData === undefined) {
    return <h1 className="main display-center">Loading...</h1>;
  }

  return (
    <div className="main">
      <h1 className="t-center">Detail-Page</h1>
      <UserDetail apiData={apiData} />
      <button>Compare Profile with another Github User</button>
    </div>
  );
}
