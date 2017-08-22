import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import {browserHistory } from 'react-router';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {selectUser} from '../actions/index';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { routerMiddleware, push } from 'react-router-redux'
import allReducers from '../reducers';


const middleware = routerMiddleware(browserHistory)
const store = createStore(
  allReducers,
  applyMiddleware(middleware)
)
class Register extends Component {
	

  constructor(props) {
    super(props);
    this.state = {first: '', last:'', email:'', passwd: '', repasswd: ''};
    this.handleInputChange = this.handleInputChange.bind(this);
	
	
    this.handleClick = this.handleClick.bind(this);
	
  }
  
 

	
  handleClick(){
								
		var first = this.state.first;
		var last = this.state.last;
		var email = this.state.email;
	    var passwd = this.state.passwd;
		var rePasswd = this.state.repasswd;
		
		
		if( passwd === rePasswd) {
		
				
		var userlist = this.props.users;
		
		var id =  userlist.length+1;
			
		userlist.push({ id:id, first: first, last: last, email:email, passwd:passwd });

       this.setState({ user : userlist});	

       alert("Data added Successfully");	
	  

		 this.setState({
                first : ''
            }); 
		} else{
			 alert("Please type the same password ");
		}		
  }
  
  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
	
	this.setState({[name]: value   });
  }
  

  
  
render(){

		return(
		
			     <div className="jumbotron">
    <div className="panel panel-default" id="loginPanel">
    
		
		<form>
		   
		   &nbsp;
            <div className="form-inline form-group" >
				<label > &nbsp; &nbsp;&nbsp;First Name:  &nbsp;</label>
				<input type="text" className="form-control" defaultValue={this.state.first} 
							onChange={this.handleInputChange}	
				name="first" id="first" />
			  </div>
			  
			  <div className="form-inline form-group" >
				<label > &nbsp; &nbsp;&nbsp;Last Name:  &nbsp;</label>
				<input type="text" className="form-control" defaultValue={this.state.last} 
				onChange={this.handleInputChange}
				name="last" id="last"/>
			  </div>
			 
			  
			
			 <div className=" form-inline form-group" >
				<label > &nbsp; &nbsp;&nbsp;Email:  &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
				<input type="email" className="form-control" onChange={this.handleInputChange}
				defaultValue={this.state.email} 
				name="email" id="email"/>
			  </div>
			  
			   <div className=" form-inline form-group" >
				<label > &nbsp; &nbsp;&nbsp;Password:  &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
				<input type="password" className="form-control" onChange={this.handleInputChange}
				defaultValue={this.state.passwd} 
				name="passwd" id="passwd"/>
			  </div>
			  
			   <div className=" form-inline form-group" >
				<label > &nbsp; &nbsp;&nbsp;Re-type Password:  &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
				<input type="password" className="form-control" onChange={this.handleInputChange}
				defaultValue={this.state.repasswd} 
				name="repasswd" id="repasswd"/>
			  </div>
			  
			   <div className="form-inline col-md-6">
			  <button type="button" className="btn btn-primary col-md-6"  onClick={this.handleClick}>Register User</button>
			 
			 
			  
			  </div>
          </form>
          </div>
		  </div>
		
		);
		
		
}


}

Register.propTypes = {
  first: PropTypes.string.isRequired,
  last: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  passwd: PropTypes.element.isRequired,
  repasswd: PropTypes.element.isRequired
};

function mapStateToProps( state ) {
	
	return {
		users: state.loginUsers
	};
}

export default connect(mapStateToProps) (Register);
