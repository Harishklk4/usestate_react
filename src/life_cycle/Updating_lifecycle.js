import React from "react";
class up extends React.Component{
    constructor(props){
        super(props)
        this.state={
            id:"harish",
            place:"chennai",
            batch:"2020"
        }
    }

    // static getDerivedStateFromProps(props){
    //     return{id:props.name}
    // }

    // shouldComponentUpdate(){
    //     return true;
    // }

    // up = () =>{
    //     this.setState({id:"vasu"})
    // }

    componentDidMount() {
        setTimeout(() => {
            this.setState({ id: "yellow" })
        }, 2000)
    }

    getSnapshotBeforeUpdate(prevProps,prevState){
        document.getElementById("hi").innerHTML="before id "+prevState.id
    }

    componentDidUpdate(){
        document.getElementById("hello").innerHTML="current id "+this.state.id
    }

    render(){
        return(
            <div>
                <h1>{this.state.id} {this.state.place} {this.state.batch}</h1>
                <button onClick={this.up}>click</button>
                <p id="hi"></p>
                <p id="hello"></p>
            </div>
        )
    }
}
export default up