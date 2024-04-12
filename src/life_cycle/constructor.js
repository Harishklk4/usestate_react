import React from "react";
class lap extends React.Component{
    constructor(props){
        super(props)

        this.state={
            name:"jessy"
        }
    }

    render(){
        return(
            <div>
                <h1>{this.state.name}</h1>
            </div>
        )
    }
}
export default lap