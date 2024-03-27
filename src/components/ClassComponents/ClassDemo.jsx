import React from "react";

class ClassDemo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      country: "Kenya",
      capital: "Nairobi",
    };
  }
  render() {
    return (
      <>
        <h1>Prop=&gt; {this.props.name}</h1>
        <h1>Welcome to class components</h1>
        <h1>State {this.state.country}</h1>
        <button
          onClick={() => {
            this.setState({ country: "Uganda" });
          }}
        >
          Change Country
        </button>
      </>
    );
  }
}
export default ClassDemo;
