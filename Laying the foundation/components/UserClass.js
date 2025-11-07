
import React from "react";

class UserClas extends React.Component{
   constructor(props){
    super (props)
   }
    render(){
        return (
            <div>
            <h1>this is usecalss frm hi </h1>
            <h3>this is {this.props.name} </h3>
            </div>
        )
    }
}

export default UserClas;