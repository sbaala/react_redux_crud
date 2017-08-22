import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {selectUser} from '../actions/index';


class AddUser extends Component {
	

  constructor(props) {
    super(props);
    this.state = {first: '', last:'', email:'', firstValue: '', secondValue: ''};
    this.handleInputChange = this.handleInputChange.bind(this);
	this.handleFirstLevelChange = this.handleFirstLevelChange.bind(this);
	this.handleSecondLevelChange = this.handleSecondLevelChange.bind(this);
	
    this.handleClick = this.handleClick.bind(this);
	
  }
  
  static get defaultProps() {
    return {
    
      fieldMap: {
        "TN": [
          { value: "Chennai", label: "Chennai" },
          { value: "Trichy", label: "Trichy" }
        ],
        "KA": [
          { value: "Bangalore", label: "Bangalore" },
          { value: "Mysore", label: "Mysore" }
        ]
      }
    }
   
  }


	
  handleClick(){
								
		var first = this.state.first;
		var last = this.state.last;
		var email = this.state.email;
		
		if( first!="" && last!="" && email!="") {
		
		var stateName = this.state.firstValue;
		var cityName = this.state.secondValue;
				
		var userlist = this.props.users;
		
		var id =  userlist.length+1;
			
		userlist.push({ id:id, first: first, last: last, email:email, gender:'M' });

       this.setState({ user : userlist});	

       alert("Data added Successfully");	

		 this.setState({
                first : ''
            }); 
		} else{
			 alert(" Please fill all the fields ");
		}		
  }
  
  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
	
	this.setState({[name]: value   });
  }
  
  getOptions(key) {    
  	if (!this.props.fieldMap[key]) {
      return null;
    }
    
    return this.props.fieldMap[key].map(function (el, i) {
    	return <option key={i} value={el.value}>{el.label}</option>
    });
  }
  
   handleFirstLevelChange (event) {
	   
	   console.log( event.target.value);
    this.setState({
      firstValue: event.target.value,
      secondValue: ''
    });
  }
  
   handleSecondLevelChange (event) {
    this.setState({
    	secondValue: event.target.value
    });
  }
  
 
  getSecondLevelField () {
	  
  	if (!this.state.firstValue) {
    	return null;
    }
    
    return (
    	<select onChange={this.handleSecondLevelChange} defaultValue={this.state.secondValue}>
       	<option value="">Select City </option>
      	{this.getOptions(this.state.firstValue)}
      </select>
    )
  }

  
  
render(){

		return(
		
		
		
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
			  <label > &nbsp; &nbsp;&nbsp;State: &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
				  <select onChange={this.handleFirstLevelChange} defaultValue={this.state.firstValue}>
					<option value="">Select State</option>
					<option value="TN">TN</option>
					<option value="KA">KA</option>
				  </select>
				 				 
			</div>
			
			<div className=" form-inline form-group">
			 <label > &nbsp; &nbsp;&nbsp;City: &nbsp;&nbsp;&nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
			 {this.getSecondLevelField()}
			</div> 
			
			 <div className=" form-inline form-group" >
				<label > &nbsp; &nbsp;&nbsp;Email:  &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
				<input type="email" className="form-control" onChange={this.handleInputChange}
				defaultValue={this.state.email} 
				name="email" id="email"/>
			  </div>
			  
			   <div className="form-inline col-md-6">
			  <button type="button" className="btn btn-primary col-md-6"  onClick={this.handleClick}>Add User</button>
			 
			 
			  
			  </div>
          </form>
          
		
		);
		
		
}


}

AddUser.propTypes = {
  first: PropTypes.string.isRequired,
  last: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  firstValue: PropTypes.element.isRequired,
  secondValue: PropTypes.element.isRequired
};

function mapStateToProps( state ) {
	
	return {
		users: state.users
	};
}

export default connect(mapStateToProps) (AddUser);
