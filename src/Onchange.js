import React from "react"
import Para2 from "./practice2"
const pic="C:/Users/haris/OneDrive/Desktop/React/harish/src/New folder/lion.jpg"
class Onchange extends React.Component{
    constructor(props){

        super(props)
        this.state={
            Id:1,
            check:false

        }

        this.lap=this.lap.bind(this)
        this.phone= this.phone.bind(this)

    }

    

    lap(h){
        this.setState({
            [h.target.name]:h.target.value
        })
    }

    phone(k){
        if(this.state.check == false){
            this.setState({
                [k.target.name]: true
            })
        }
        else{
            this.setState({
                [k.target.name]: false
            })
        }
    }


    render(){
        return(
            <div>
                <input type="text" value={this.state.hi} name="hi" onChange={this.lap} /> <br/>

                <input type="checkbox" value={this.state.check} name="check" onChange={this.phone} />

 
                {
                    this.state.hi == 1 ? 
                                        <img src={pic } alt="pic"/> : null
                }

                {
                    this.state.hi == "colors" ? <h1><Para2/></h1> : null
                }

                {
                    this.state.check == true ? <h1>Hello</h1> : null
                }
            </div>
        )
    }
}

export default Onchange