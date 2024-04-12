import React from "react"

class mount extends React.Component{
    // constructor
    constructor(props){
        super(props)
        this.state={
            id:1,
            name:"harish",
            place:"chennai"
        }
    }

    // getDerivedStateFromProps()

    // static getDerivedStateFromProps(hi,state){
    //     return{name:hi.myname ,
    //            place:hi.myplace};
    // }

    render(){
        return(
            <div>
                <h1>{this.state.name} {this.state.place}</h1>
            </div>
        )
    }
        // componentDidMount()
    componentDidMount(){
        setTimeout(() =>{
            this.setState({name:"visaali"})
        },2000)
    }
    
}
export default mount