import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';

function Github() {

    const data = useLoaderData();

    // const [data, setData] = useState([]);

    // useEffect (() => {
    //     fetch('https://api.github.com/users/asishmehata48')
    //     .then(response => response.json())
    //     .then(data => {
    //         console.log(data);
    //         setData(data)
    //     })
    // }, [])
  return (
    <div className="flex flex-wrap items-center text-center m-4 bg-gray-600 text-white p-4 text-3xl">
        <div className="w-full md:w-1/2">
            <h1>Username: {data.login}</h1>
            <h3 className="text-xl text-black">Bio: {data.bio}</h3>
            <p className="text-2xl text-blue-400">GitHub Followers: {data.followers}</p>
        </div>
        <div className="w-full md:w-1/2">
            <img src={data.avatar_url} alt="Git Picture" width={300} />
        </div>
    </div>

  );
}


export default Github;

export async function githubInfoLoader() {
  const response = await fetch('https://api.github.com/users/asishmehata48');

  if (!response.ok) {
    throw new Error('Failed to fetch GitHub data');
  }

  const data = await response.json(); // ✅ Safe now
  return data;
}
