import React, {Component}  from 'react';
import UserList from './users-list';
import UserDetails from './userdetails';
import AddUser from './adduser';

class Home extends Component {


  constructor(props) {
    super(props);
    this.state = {addClass: '', updateClass:'active'};
	this.handleClickAdd = this.handleClickAdd.bind(this);   
    this.handleClickUpdate = this.handleClickUpdate.bind(this);
  }
	
  handleClickAdd(){
			
	this.setState({ addClass:'active'});
	this.setState({ updateClass:''});
	
  }
  
  handleClickUpdate(){
	  
	this.setState({ addClass:''});
	this.setState({ updateClass:'active'});
  }
  
  createTabBased(){
	  
	  
	  if(this.state.addClass==='active'){
			
		return(	
		
		    <AddUser />
							
			);

		}
		
		return (
		
		 <div>
			  
			 <h3 className="breadcrumb"> User Search </h3>
			 <UserList />

			 <br/>
			 
			 &nbsp;&nbsp;
			 
			 <UserDetails/>
			 
			 </div>
		
		);
	  
	  
  }
  
	
render(){
	
return (

		 <div>
			
			 <ul className="nav nav-tabs">
			   <li role="presentation" className={this.state.addClass}><a href="#" onClick={this.handleClickAdd}>Add User</a></li>
			   <li role="presentation"  className={this.state.updateClass}><a href="#" onClick={this.handleClickUpdate}>Search & Update User</a></li>	  
			</ul>

			{this.createTabBased()}
			
		</div>

);
}

}

export default Home;