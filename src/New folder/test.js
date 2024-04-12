import React from "react";
class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = { name: "ram" };
    }
    render() {
        return (
            <div>
                <h1>This is the content of the Header component</h1>
                <p>
                    {
                        this.props.name
                    }
                </p>
            </div>
        );
    }
}
export default Header
