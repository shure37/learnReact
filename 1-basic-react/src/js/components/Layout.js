import React from "react";
import Header from "./Header";
import Footer from "./Footer";

export default class Layout extends React.Component{
  constructor(){
    super();
    this.state = {
      title: "title one",
    };
  }

  render(){
    setTimeout(() =>{
      this.setState({title: "title two"})
    }, 2000);

    return (
      <div>
        <Header title={this.state.title}/>
        <Header title="other title"/>
        <Footer/>
      </div>

    );
  }
}
