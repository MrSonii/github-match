import { useParams, useNavigate } from "react-router-dom";
import { get } from "axios";
import { useEffect, useState } from "react";

import "./DetailAndComparison.css";

export default function DetailPage() {
  const [apiData, setApiData] = useState();

  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      try {
        const response = await get(`https://api.github.com/users/${params.id}`);
        setApiData(response);
      } catch (err) {
        navigate(-1);
        alert("Invalid-UserName");
      }
    })();
  }, []);
  //bio, followers, following,
  return (
    <div className="body">
      <h1>Detail-Page</h1>
      <div className="detail-element"></div>
    </div>
  );
}
