import React ,{Component}from "react";
import { CommonContext } from "./components/CommonContext";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from './components/Main'
import UpdateButton from "./components/UpdateButton";

export default class App extends Component {
  constructor() {
    super();
    this.updateColor = (color) => {
      this.setState({
        color: color,
      });
    };

    this.state = {
      color: "green",
      updateColor: this.updateColor,
    };
   
  }
  render() {
    return (
      <CommonContext.Provider value={this.state}>
        <Header />
        <CommonContext.Consumer >
        {
            ({color})=>(
                <h1 style={{backgroundColor:color}}>Complete and easy example for Context API</h1>
            )
        }
      </CommonContext.Consumer>
      
        <Main/>
        <UpdateButton />
        <Footer />
      </CommonContext.Provider>
    );
  }
}
