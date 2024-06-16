import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
  //   const [data, setData] = useState([]);
  //   useEffect(() => {
  //     fetch("https://api.github.com/users/Samir-codes-123")
  //       .then((res) => res.json())
  //       .then((data) => setData(data));
  //   }, []);
  const data = useLoaderData(); //gets data from loader loader is more optimized than fetch
  return (
    <div className="text-center m-4 bg-gray-800 text-white p-4 text-3xl">
      Github followers:{data.followers}
      <img src={data.avatar_url} alt="profile photo" width={300} />
    </div>
  );
}

export default Github;
export const GithubLoader = async () => {
  const response = await fetch("https://api.github.com/users/Samir-codes-123");
  return response.json();
};
