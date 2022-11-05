import React, {useState, useEffect} from "react";
import axios from "axios";
import Repos from "../components/Repos";
import Pagination from "../components/Pagination"


export default function Repositories(){
  const[repos, setRepos] = useState([]);
  const[loading, setLoading] = useState(false);
  const[currentPage, setCurrentPage] = useState(1);
  const[reposPerPage, setReposPerPage] = useState(2);

  useEffect (() => {
   setLoading(true);
    axios.get("https://api.github.com/users/bojodiva")
     .then(response => response.json())
     .then((data) => {
       setRepos(data)
    setLoading(false);
     })
  }, [])

  console.log(repos)


const indexOfLastPost = currentPage * reposPerPage;
  const indexOfFirstPost =indexOfLastPost - reposPerPage;
  const currentRepos = repos.slice(indexOfFirstPost, indexOfLastPost);
             
  return(
    <main>
      <h1>my repos</h1>
      <Repos repos={currentRepos} loading={loading} />
      <Pagination postsPerPage= {reposPerPage} totalPosts = {repos.length} />
    </main>
  )
}
