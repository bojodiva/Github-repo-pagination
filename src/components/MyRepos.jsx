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

//functions handling page increment anf decrement
handleIncrement= () =>{
   this.setState({
currentPage:  this.state.currentPage + 1 });
}

handleDecrement = () =>{
  this.setState({
    currentPage: this.state.currentPage - 1 }) ;
  }

  

  render(){

  var{loading} = this.state

    const indexOfLastPost = this.state.currentPage * this.state.postsPerPage;
    const indexOfFirstPost = indexOfLastPost - this.state.postsPerPage;
    const currentPosts = this.state.repos.slice(indexOfFirstPost, indexOfLastPost);


    const pageNos = [];

    let totalPosts = this.state.repos.length
      for ( let i = 1; i <= Math.ceil(totalPosts/ this.state.postsPerPage); i++) {
         pageNos.push(i) ;                          
      }

    const setPage = (pageNo) => {
      this.setState({currentPage: pageNo})
    }


    if(!loading){
      return(
 <div className="loader-body">
        <div className="loader"></div>
      </div>
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
           
             <br></br>
            </div>
      ))};

          
          <div className= "page--link">
      <div  className="number" onClick={this.handleDecrement}>Prev</div>
            
           {pageNos.map((pageNo, index) => (  <div   key={index} className="number" onClick={() => {setPage(pageNo)}}>
                {pageNo}
       </div>    
          ))}

            
     <div  className="number" onClick={this.handleIncrement}> Next</div>
                                      
         
        </div>

       </div>   
      )
    }
    
  }
}

export default MyRepos;