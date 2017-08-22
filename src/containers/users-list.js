import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {searchUsers} from '../actions/searchusers';


class UserList extends Component {
	
  constructor(props) {
    super(props);
    this.state = {firstName: '', lastName:'', email:''};
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
	
  handleClick(){
			
					
		var first = this.state.firstName;
		var last = this.state.lastName;
		var email = this.state.email;
		var userlist = this.props.users;
					
		var userFilter =  userlist.filter(function (n,i){
			
			if(first!=""&& last!=""&& email!=""){
				return ( n.first===first && n.last===last && n.email===email);
			}
        });
	    console.log("filter");
		console.log(userFilter);
	
		this.props.searchUsers(userFilter)
			
  }
	
  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
	
	console.log(name);

    this.setState({[name]: value   });
  }
	
	render(){
		
		return(
			<form >
			  <div className="form-inline  col-md-12">
			  <div className="form-group  col-md-4">
				<label >First Name:</label>
				<input type="text" className="form-control" value={this.state.firstName} 
				onChange={this.handleInputChange}
				name="firstName" id="firstName"/>
			  </div>
			  
			  <div className="form-group  col-md-4">
				<label >Email:</label>
				<input type="email" className="form-control" 
				onChange={this.handleInputChange}
				value={this.state.email} name="email" id="email"/>
			  </div>
			  
			  
			  </div>
			  &nbsp;&nbsp;
			  
			   <div className="form-inline  col-md-12">
			  <div className="form-group  col-md-4">
				<label >Last Name:</label>
				<input type="text" className="form-control" 
				onChange={this.handleInputChange}
				value={this.state.lastName} name="lastName" id="lastName"/>
			  </div>
			 
			  </div>
			  &nbsp;&nbsp;
			  <div className="breadcrumb form-inline btn-toolbar col-md-12">
			  
			  <button type="button" onClick={this.handleClick} className="btn btn-primary col-md-1">Search</button>
			  
			   <button type="button" className="btn btn-primary col-md-1">Reset</button>
			  
			  </div>
			</form>

		
		);
		
	}
	
}


function mapStateToProps( state ) {
	
	return {
		users: state.users
	};
}

function matchDispatchToProps(dispatch) {
	
	return bindActionCreators({ searchUsers: searchUsers},dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps) (UserList);

