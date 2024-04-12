import React from "react";
import Header1 from './test'
class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      favoritecolor: "red",
      name: "ram",
      name1: "raj",
      name2: "arun"
    };
  }
  static getDerivedStateFromProps(props, state) {
    console.log("hhhhhhh");
    return { favoritecolor: props.favcol };
  }

  render() {
    console.log(this.props.favcol);
    return (
      <div>
        <h1>My Favorite Color is {this.state.favoritecolor}</h1>

        <Header1 name={this.state.name} />
        <Header1 name={this.state.name1} />

        <Header1 name={this.state.name2} />

      </div>
    );
  }
}

export default Header