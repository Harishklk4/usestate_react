import React from "react";
class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = { favoritecolor: 1 };
    }
    static getDerivedStateFromProps(props, state) {
        console.log("getDerivedStateFromProps");
    }

   
    render() {
        console.log("render");
        return (
            <h1>My Favorite Color is {this.state.favoritecolor}</h1>
        );
    }

    componentDidMount() {
        console.log("componentDidMount");
        setInterval(() => {
            this.setState({ favoritecolor: this.state.favoritecolor + 1 })
        }, 2000)
    }
}
export default Header  