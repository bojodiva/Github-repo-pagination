import React, {Component} from "react";


class MyRepos extends Component {

  
  
  constructor(props){
    super(props)
    this.state = {
      repos: [],
      loading: false,
      currentPage: 1,
      postsPerPage: 2,
    }
  }

  componentDidMount(){

  fetch("https://api.github.com/users/bojodiva/repos")
  .then((response) => response.json())
  .then(data => {
    this.setState({
      repos: data,
      loading: true,
    })
  })
  }


  render(){
  var{loading} = this.state

    const indexOfLastPost = this.state.currentPage * this.state.postsPerPage;
    const indexOfFirstPost = indexOfLastPost - this.state.postsPerPage;
    const currentPosts = this.state.repos.slice(indexOfFirstPost, indexOfLastPost);


    const pageNos = [];

      for ( let i = 1; i <= Math.ceil(this.state.repos.length/ this.state.postsPerPage); i++) {
         pageNos.push(i) ;                          
      }

    const setPage = (pageNo) => {
      this.setState({currentPage: pageNo})
    }


    if(!loading){
      return(
<div>Loading...</div>
      )
    }
    else{
      return(
        <div>
          {currentPosts.map(repo => (
           <div className="container" key={repo.id}>
             <a className="url" href={repo.html_url}>{repo.full_name}</a>
             <p className='description'>{repo.description} </p> 
            <p className='time'>Time created: {repo.created_at}</p>
                                                            
            <br></br>
            
             <p className='visibility'>{repo.visibility}</p>
             <hr className="hr"></hr>
             <br></br>
            </div>
      ))};
          <div className= "page--link">
     <span className="number" onClick={() => {setPage(currentPage - 1)}}>Prev</span>
           { 
              pageNos.map((pageNo, index) => (  <span   key={index} className="number" onClick={() => {setPage(pageNo)}}>
                {pageNo}
       </span>    
          ))}
            <span className="number" onClick={() => {setPage(currentPage + 1)}}>Next</span>
         
        </div>

       </div>   
      )
    }
    
  }
}

export default MyRepos;