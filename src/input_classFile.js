import React from "react"
import View from "../firstComponent/view"
import Test from "../classComponent/test"
class Input extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            // name: "frontend class",
            error: "Error",
            check: false
        }
        this.onValueChange = this.onValueChange.bind(this)
        this.onValueC = this.onValueC.bind(this)
    }
    onValueChange(e) {
        console.log("value", e.target.name);
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    onValueC(e) {
        if (this.state.check == false) {
            this.setState({
                [e.target.name]: true
            })
        } else {
            this.setState({
                [e.target.name]: false
            })
        }

    }
    render() {
        return (
            <div>
                <div>
                    <input type="text" value={this.state.ruleId} name="ruleId" onChange={this.onValueChange} />
                    <input type="text" value={this.state.routeId} name="routeId" onChange={this.onValueChange} />
                    <input type="checkbox" name="check" value={this.state.check} onChange={this.onValueC} />
                </div>
                {
                    this.state.ruleId == 3 && this.state.routeId == 2 ? <h1><View /></h1>
                        : null
                }
                {
                    this.state.check == true ? <h1><Test /></h1>
                        : null
                }
            </div>
        )
    }
}
export default Input 
