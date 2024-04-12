import React from "react"

class Change extends React.Component{
    constructor(props){
        super(props)

        this.state={
            Id:1,
            check_box:false
        }
        this.input1= this.input1.bind(this)
        this.checkbox=this.checkbox.bind(this)
    }
    
    input1(rock){
        this.setState({
            [rock.target.name]:rock.target.value
        })
    }

    checkbox(cb){
        if(this.state.check_box == false){
            this.setState({
                [cb.target.name]:true
            })
        }
        else{
            this.setState({
                [cb.target.name]:false
            })
        }
    }

    render(){
        return(
            <div>
                <h1>hiii............</h1>
                <input type="text" name="input_box1" value={this.state.input_box1} onChange={this.input1}/>
                <input type="checkbox" name="check_box" value={this.state.check_box} onChange={this.checkbox}/>

                {
                    this.state.input_box1 == 1 ? <h1>okkkk.....</h1>:null   
                }   

                {
                    this.state.check_box == true ? <h1>it's True</h1> : null
                }
            </div>
        )
    }
}
export default Change