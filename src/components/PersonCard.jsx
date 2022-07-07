import React, {Component} from "react";

class PersonCard extends Component{
    constructor(props){
        super(props);
        this.state = {
            age: this.props.age
        }
    }
    render(){
        return(
            <div class="card col-3">
                <h1>{this.props.lastName}, {this.props.firstName}</h1>
                <p>Age: {this.state.age}</p>
                <p>Hair Color: {this.props.hairColor}</p>
                <button onClick={()=> this.setState({age : this.state.age +1})}> birthday button for {this.props.firstName} {this.props.lastName} </button>
            </div>
        )
    }
}
export default PersonCard;