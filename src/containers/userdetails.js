import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {selectUser} from '../actions/index';
import Modal from 'react-modal';

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};


class UserDetails extends Component {
	
	constructor(props) {
    super(props);
    this.state = { isOpen: false, clickUser:"",firstModal: '', lastModal:'', emailModal:'' };
    this.handleEdit = this.handleEdit.bind(this);
	this.handleRemove = this.handleRemove.bind(this);
	this.handleSubmit = this.handleSubmit.bind(this);
	this.handleInputChange = this.handleInputChange.bind(this);
	this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    
  }
	 openModal() {
    this.setState({isOpen: true});
  }
 
  afterOpenModal() {
    // references are now sync'd and can be accessed. 
    this.subtitle.style.color = '#f00';
  }
 
  closeModal() {
    this.setState({isOpen: false});
  }
  
  handleInputChange(event) {
	  
	console.log(event);
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
	
	console.log(value);

    this.setState({[name]: value   });
  }
	
	
	handleRemove(user){
					 
		 var arr = this.props.users;
		 
							
		for (var i in arr) {
		 if (arr[i].id == user.id) {
				arr.splice(i,1);
				break; 
			 }
	    }
		
		this.setState({ users : arr});
		
		alert(" Deleted User "+ user.first+" Successfully");  
	}
	
	handleSubmit(){
		this.setState({isOpen: false});
		
		
		var first = this.state.clickUser.first;
		var last = this.state.clickUser.last;
		var email = this.state.clickUser.email;
		
		console.log(last);
		console.log(this.state.lastModal);
		
		if(this.state.firstModal!="")
			first=this.state.firstModal;
		if(this.state.lastModal!="")
			last=this.state.lastModal;
		if(this.state.emailModal!="")
			email=this.state.emailModal;
		
		
				
		var arr = this.props.users;
								
		for (var i in arr) {
		 if (arr[i].email == this.state.clickUser.email) {
				arr[i].first = first;
				arr[i].last = last;
				arr[i].email = email;
				break; 
			 }
	    }
		
		this.setState({ users : arr});
		
	}
	handleEdit(user){
		
		this.setState({ clickUser: user })
					
		console.log(user);
	this.setState({
      isOpen: !this.state.isOpen
    });
		
	 
		
		
	    
			
  }
  
  createModal(){
	  
	  console.log("modal calling");
	  
	  console.log(this.state.clickUser);
	  
	  if(this.state.isOpen){
			
				return (  
				<Modal
          isOpen={this.state.isOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
		<h2 ref={subtitle => this.subtitle = subtitle}>Edit User</h2>
		
		<form>
            <div className="form-group">
				<label >First Name:</label>
				<input type="text" className="form-control"  
				
				onChange={this.handleInputChange}
                   defaultValue={this.state.clickUser.first}				
				name="firstModal" id="firstModal" />
			  </div>
			  
			  <div className="form-group">
				<label >Last Name:</label>
				<input type="text" className="form-control" defaultValue={this.state.clickUser.last} 
				onChange={this.handleInputChange}
				name="lastModal" id="lastModal"/>
			  </div>
			  
			  <div className="form-group">
				<label >Email:</label>
				<input type="email" className="form-control" defaultValue={this.state.clickUser.email} 
				onChange={this.handleInputChange}
				name="emailModal" id="emailModal"/>
			  </div>
			   <div className="form-inline   col-md-12">
			  <button type="button" onClick={this.handleSubmit} className="btn btn-primary col-md-6">Submit</button>
			 
			  <button className="btn btn-danger col-md-6" onClick={this.closeModal}>close</button>
			  
			  </div>
          </form>
          
          
          
        </Modal>
				);
		}
  }
	
	
	createListItems(){
		
		var userList = this.props.users;
		
		if(this.props.activeUsers){
			userList= this.props.activeUsers;
		}
			
		return userList.map( (user)=> {
			
			return (
			

			
			     <tr key={user.id} data-toggle="modal" data-target="#myModal">
					   <th scope="row">{user.id}</th> 
					   <td>{user.first} {user.last} </td> 
					   <td>{user.email}</td> 
					   <td>{user.gender}</td> 
					   <td><input type="button" className="btn btn-primary" onClick={() => this.handleEdit(user)} value="Edit" /> </td> 
					   <td><input type="button" className="btn btn-danger" onClick={() => this.handleRemove(user)} value="Remove" /></td> 
				
				  </tr>
				  
				  
			
			
			
			);
		
			
			
		});
		
		
		
		
		
	}
	
		
	render(){
		
	
		
		return(
		   <div className="panel panel-default"> 
		    
			   
			   {this.createModal()}
			
			   <table className="table table-bordered"> 
			   <thead> 
				   <tr> 
					   <th>#</th>
					   <th>Name</th> 
					   <th>Email</th> 
					   <th>Gender</th> 
					   <th>Edit</th> 
					   <th>Remove</th> 
				   </tr> 
			   </thead> 
			   <tbody> 
			   {this.createListItems()}
			   
			   
				 </tbody> 
				
			   </table> 
			  
		   </div>
		
		);
		
	}
	
}


function mapStateToProps( state ) {
	
	return {
		users: state.users,
		activeUsers: state.activeUser
	};
}


export default connect(mapStateToProps) (UserDetails);

