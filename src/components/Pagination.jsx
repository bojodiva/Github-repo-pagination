import React from "react";

function Pagination(reposPerPage, totalPosts, paginate){
  const pageNos = [];

  for(let i = 1; i <= Math.ceil(totalPosts/reposPerPage); i++){
    pageNos.push(i);
  }

  return(
    <nav>
    <ul>
      {pageNos.map(number => (
      <li key={number}>
        <a href="!H" onClick = {() => paginate(number)}>{number}</a>
      </li>
      ))}
    </ul>
  </nav>
  )
}

export default Pagination;