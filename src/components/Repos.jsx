import React from 'react';

function Repos({repos, loading}){
  if (loading){
    return <h2>Loading...</h2>
  }

  return <ul className ="">
    {repos.map(repo => (
    <li key ={repo.node_id}>{repos.name}</li>
    ))}</ul>
}

export default Repos;