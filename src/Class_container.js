import React from 'react';
class Container extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            stateName:"tamilnadu",
            stateId: 5,
            name: "hi",
            year: 1111,
            active: true
        }
        this.city={
            cityName:"chennai"
        }
    }
    render() {
        return (
            <div >
                {
                    this.city.cityName == "chennai" || this.state.name=="thilakar" ? 
                        <div>
                            <div>
                                <h1>chennai</h1>
                                <input type='text' />
                                <input type='password' />
                                <button onClick={this.login}>click</button>
                            </div>
                        </div>
                        : <h4>error :state id is not true</h4>
                }
                <h1>class component</h1>
                <h2>{this.state.name} {this.state.year}</h2>
            </div>
        )
    }
}
export default Container;