import React, {Component}  from 'react';
import Home from '../containers/home';
import Register from '../containers/register';

import App from '../App';
import {connect} from 'react-redux';

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



class Main extends Component {


  constructor(props) {
    super(props);
    this.state = {isOpen:false, fade:"jumbotron", first:'', last:'', addClass: '', register:'', email:'', passwd:''};
	this.handleClickRegister = this.handleClickRegister.bind(this);
	this.handleClickLogin = this.handleClickLogin.bind(this);  
	this.handleInputChange = this.handleInputChange.bind(this); 	
	this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
	this.handleClick = this.handleClick.bind(this);
   
  }
  openModal() {
    this.setState({isOpen: true});
  }
 
  afterOpenModal() {
    // references are now sync'd and can be accessed. 
   // this.subtitle.style.color = '#f00';
  }
 
  closeModal() {
    this.setState({isOpen: false});
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
	   this.state.fade="jumbotron";	   
	   this.setState({isOpen: false});

		 
		} else{
			 alert("Please type the same password ");
		}		
  }
  
  handleEdit(){
		
	this.setState({
      isOpen: !this.state.isOpen
    });
	this.state.fade="jumbotron fade-css";
  }
  
  handleInputChange(event) {
	  
	console.log(event);
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
	
	console.log(value);

    this.setState({[name]: value   });
  }
  
   handleClickRegister(){
	   this.state.fade="jumbotron fade-css";
	   
	   	   
	   this.setState({register: "yes"   });
  
   }
	
  handleClickLogin(){
		
	 var logging = false;
	
	 var email = this.state.email;
	 var passwd = this.state.passwd;
		
	 var arr = this.props.users;
								
	 for (var i in arr) {
		 if (arr[i].email == email && arr[i].passwd == passwd ) {
				this.setState({ addClass:'active'});
				logging=true;
				break; 
			 } 
		  
	    }
		
		
         if(!logging){
				  alert(" Invalid Username and Password");
			 }
		
	 
		
	
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
		<h2 ref={subtitle => this.subtitle = subtitle}>Create New User</h2>
		
		<form>
            <div className="col-md-12">
			<div className="form-group" >
				<label > First Name:</label>
				<input type="text" className="form-control" defaultValue={this.state.first} 
							onChange={this.handleInputChange}	
				name="first" id="first" />
			  </div>
			  
			  <div className=" form-group" >
				<label > Last Name: </label>
				<input type="text" className="form-control" defaultValue={this.state.last} 
				onChange={this.handleInputChange}
				name="last" id="last"/>
			  </div>
			 
			  
			
			 <div className="form-group" >
				<label> Email:</label>
				<input type="email" className="form-control" onChange={this.handleInputChange}
				defaultValue={this.state.email} 
				name="email" id="email"/>
			  </div>
			  
			   <div className=" form-group" >
				<label > Password: </label>
				<input type="password" className="form-control" onChange={this.handleInputChange}
				defaultValue={this.state.passwd} 
				name="passwd" id="passwd"/>
			  </div>
			  
			   <div className=" form-group" >
				<label > Re-type Password: </label>
				<input type="password" className="form-control" onChange={this.handleInputChange}
				defaultValue={this.state.repasswd} 
				name="repasswd" id="repasswd"/>
			  </div>
			  
			   <div id="registerBtn">
			  <button type="button" className="btn btn-primary"  onClick={this.handleClick}>Register User</button>
			 </div>
			  </div>
          </form>
          
          
          
        </Modal>
				);
		}
  }
  
  
 
  
  createLoginBased(){
	  
	  
	  if(this.state.addClass==='active'){
			
		return(	
		
		  <Home/>
							
			);

		} else if(this.state.register ==='yes'){
			return(	
		
				<Register/>
							
			);
		}
		
		return (
		
   <div className={this.state.fade} >
    <div className="panel panel-default" id="loginPanel">
    
    <div className="panel-body">
      <h2>Login to your Account</h2>
      <div className="row col-md-12">
  <div className="input-group">
  <span className="input-group-addon" id="basic-addon1"><i className="glyphicon glyphicon-envelope"></i></span>
  <input type="email" className="form-control" placeholder="Username" onChange={this.handleInputChange}
defaultValue={this.state.email}				
				name="email" id="email"
  aria-describedby="basic-addon1"/>
</div>
<br/>
<div className="input-group">
  <span className="input-group-addon" id="basic-addon2"><i className="glyphicon glyphicon-lock"></i></span>
  <input type="password" className="form-control" placeholder="Password" 
  
  defaultValue={this.state.passwd}	 onChange={this.handleInputChange}			
				name="passwd" id="passwd"
  aria-describedby="basic-addon2"/>
  
</div>
<br/>
<div className="login">
  <button type="submit" className="btn btn-success" onClick={() => this.handleClickLogin()}>Get In</button>
  </div>
  <br/>
  <div className="bottom">
    <p>Don't have an account? <span><a href="#" onClick={() => this.handleEdit()}>Create one</a></span></p>
    <br/>
    <a href="#">Go back to Home Page</a>
  </div>
      </div>
    </div>
  </div>
</div>

		
		);
	  
	  
  }
  
	
render(){
	
return (

		 <div>
		 
		 
			 <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css" rel="stylesheet" type="text/css" />
			  
			  {this.createLoginBased()}
			    {this.createModal()}
			 <script src="https://code.jquery.com/jquery.min.js"></script>

			<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js"></script>

		</div>

);
}

}

function mapStateToProps( state ) {
	
	return {
		users: state.loginUsers
	};
}


export default connect(mapStateToProps) (Main);
