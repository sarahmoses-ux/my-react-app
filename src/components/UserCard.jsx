import React, { Component } from  "react";

class userCard extends Component {
    render (){
     <div>
        <h2>Name: {this.props.name}</h2>
        <p>Age: {this.props.age}</p>
        <p>Role: {this.props.role}</p>
        <p>Company Name: {this.props.companyName}</p>
     </div>   
    }
}

userCard.defaultProps = {
    role: "Guest",
}


    export default userCard;

